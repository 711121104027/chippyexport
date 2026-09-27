//src/lib/cloudinary.ts

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Extracts public_id from a Cloudinary image URL.
 * Example: https://res.cloudinary.com/dtbel6lke/image/upload/v1781968776/r5ktbepucmz1w65pvh6x.png
 * returns: "r5ktbepucmz1w65pvh6x"
 */
export function extractCloudinaryPublicId(url: string): string | null {
  if (!url || typeof url !== "string") return null;
  if (!url.includes("res.cloudinary.com")) return null;

  try {
    const uploadIndex = url.indexOf("/upload/");
    if (uploadIndex === -1) return null;

    let path = url.substring(uploadIndex + "/upload/".length);
    // Strip version e.g. v123456/
    path = path.replace(/^v\d+\//, "");

    // Strip extension
    const lastDotIndex = path.lastIndexOf(".");
    if (lastDotIndex !== -1) {
      path = path.substring(0, lastDotIndex);
    }

    return path || null;
  } catch (error) {
    console.error("Error extracting Cloudinary public_id:", error);
    return null;
  }
}

/**
 * Deletes a single image from Cloudinary by its URL or public_id.
 */
export async function deleteCloudinaryImage(urlOrPublicId: string) {
  try {
    const publicId = urlOrPublicId.startsWith("http")
      ? extractCloudinaryPublicId(urlOrPublicId)
      : urlOrPublicId;

    if (!publicId) return { result: "not_found" };

    const res = await cloudinary.uploader.destroy(publicId);
    return res;
  } catch (error) {
    console.error("Failed to delete image from Cloudinary:", urlOrPublicId, error);
    return null;
  }
}

/**
 * Deletes multiple images from Cloudinary by an array of URLs or public_ids.
 */
export async function deleteCloudinaryImages(urlsOrPublicIds: string[]) {
  if (!urlsOrPublicIds || urlsOrPublicIds.length === 0) return;

  const publicIds = urlsOrPublicIds
    .map((item) => (item.startsWith("http") ? extractCloudinaryPublicId(item) : item))
    .filter((id): id is string => Boolean(id));

  if (publicIds.length === 0) return;

  try {
    // Delete up to 100 images per batch
    const result = await cloudinary.api.delete_resources(publicIds);
    return result;
  } catch (error) {
    console.error("Batch delete from Cloudinary failed:", error);
    // Fallback: delete one by one
    await Promise.allSettled(
      publicIds.map((id) => cloudinary.uploader.destroy(id))
    );
  }
}

export default cloudinary;
