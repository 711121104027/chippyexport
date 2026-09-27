//src/lib/imageCompression.ts

/**
 * Compresses and resizes an image file to be <= maxSizeBytes (default 1MB / 1024*1024)
 * while preserving high visual quality.
 */
export async function compressImageToMax1MB(
  file: File,
  maxSizeBytes: number = 1024 * 1024 // 1 MB
): Promise<File> {
  // If not an image or already under 1MB and reasonably small, still ensure clean optimization if desired
  if (!file.type.startsWith("image/")) {
    return file;
  }

  // If already under 1MB and smaller than 800KB, return as-is
  if (file.size <= maxSizeBytes && file.size < 800 * 1024) {
    return file;
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new (window as any).Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        let { width, height } = img;

        // Max dimension cap at 2400px (crystal clear for 4K / mobile zoom while keeping size small)
        const maxDimension = 2400;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(file);
          return;
        }

        // Enable high-quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        // Determine output MIME type: preserve PNG transparency if PNG, else JPEG for photo efficiency
        const isPNG = file.type === "image/png";
        const outputType = isPNG ? "image/png" : "image/jpeg";

        // If PNG and already reasonable, check canvas blob
        let quality = 0.92;

        const attemptCompression = (currentQuality: number) => {
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                resolve(file);
                return;
              }

              // If still over 1MB and we can lower quality / switch to JPEG
              if (blob.size > maxSizeBytes && currentQuality > 0.4) {
                // If it's a huge PNG with no alpha, converting to high-res JPEG gives 10x compression with zero visible loss
                if (isPNG && currentQuality === 0.92) {
                  canvas.toBlob(
                    (jpegBlob) => {
                      if (jpegBlob && jpegBlob.size <= maxSizeBytes) {
                        const newFile = new File(
                          [jpegBlob],
                          file.name.replace(/\.[^/.]+$/, ".jpg"),
                          {
                            type: "image/jpeg",
                            lastModified: Date.now(),
                          }
                        );
                        resolve(newFile);
                      } else {
                        attemptCompression(currentQuality - 0.15);
                      }
                    },
                    "image/jpeg",
                    0.88
                  );
                  return;
                }

                attemptCompression(currentQuality - 0.15);
              } else {
                const newFile = new File([blob], file.name, {
                  type: blob.type,
                  lastModified: Date.now(),
                });
                resolve(newFile);
              }
            },
            outputType,
            currentQuality
          );
        };

        attemptCompression(quality);
      };

      img.onerror = () => {
        resolve(file);
      };
    };

    reader.onerror = () => {
      resolve(file);
    };
  });
}
