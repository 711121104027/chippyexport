//src/components/products/ProductGrid.tsx

"use client";

import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export default function ProductGrid({
  products,
  onQuickView,
}: ProductGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={() =>
            onQuickView(product)
          }
        />
      ))}
    </div>
  );
}