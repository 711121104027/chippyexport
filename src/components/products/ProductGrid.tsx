//src/components/products/ProductGrid.tsx

"use client";

import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product, initialColorIndex?: number) => void;
  loading?: boolean;
}

export default function ProductGrid({
  products,
  onQuickView,
  loading = false,
}: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-[8px] overflow-hidden shadow-sm border border-neutral-100 animate-pulse"
          >
            <div className="aspect-[3/4] bg-neutral-200" />
            <div className="p-3 space-y-2">
              <div className="h-4 bg-neutral-200 rounded w-3/4 mx-auto" />
              <div className="h-3 bg-neutral-100 rounded w-1/2 mx-auto" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-[#7A1C1C] mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">No Products Found</h3>
        <p className="text-neutral-500 max-w-md mx-auto text-sm">
          We couldn&apos;t find any products in this section at the moment. Please check back soon or explore our other collections.
        </p>
      </div>
    );
  }

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
          onQuickView={(colorIdx) =>
            onQuickView(product, colorIdx)
          }
        />
      ))}
    </div>
  );
}