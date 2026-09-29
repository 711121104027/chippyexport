export interface ColorVariant {
  name: string;
  hex?: string;
  images?: string[];
}

export interface Product {
  id: string;
  productName: string;
  category: string;
  gender?: string | null;
  type: string;
  size: string;
  description: string;
  features: string[];
  images: string[];
  colors?: ColorVariant[];
  createdAt?: string;
  updatedAt?: string;
}

export function parseProductColors(colors: any): ColorVariant[] {
  if (!colors) return [];
  if (Array.isArray(colors)) {
    return colors.filter((c) => c && typeof c === "object");
  }
  if (typeof colors === "string") {
    try {
      const parsed = JSON.parse(colors);
      if (Array.isArray(parsed)) {
        return parsed.filter((c) => c && typeof c === "object");
      }
    } catch {
      return [];
    }
  }
  return [];
}