//src/app/women/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ProductGrid from "@/components/products/ProductGrid";
import QuickViewModal from "@/components/products/QuickViewModal";
import ProductTypeFilter from "@/components/products/ProductTypeFilter";
import { Product } from "@/types/product";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function WomenPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products/category/WOMEN", {
        cache: "no-store",
      });
      const data = await res.json();

      if (Array.isArray(data)) {
        const randomized = shuffleArray(data);
        setProducts(randomized);
        setFilteredProducts(randomized);
      } else {
        setProducts([]);
        setFilteredProducts([]);
      }
    } catch (error) {
      console.error("Failed to load women products:", error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);

    if (type === "ALL") {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => product.type === type);
    setFilteredProducts(filtered);
  };

  const productTypes = [
    "ALL",
    ...Array.from(new Set(products.map((product) => product.type).filter(Boolean))),
  ];

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const openQuickView = (product: Product, initialColorIndex: number = 0) => {
    setSelectedProduct(product);
    setSelectedColorIndex(initialColorIndex);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="relative h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden bg-neutral-900">
        <Image
          src="/images/women-hero.png"
          alt="Women Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-[var(--font-playfair)]">
            Women&apos;s Wear
          </h1>

          <p className="mt-4 max-w-2xl text-sm md:text-lg text-neutral-100">
            Breathable innerwear engineered for comfort, flexibility and performance.
          </p>
        </div>
      </section>

      <section className="pt-4 pb-8 md:pt-6 md:pb-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <ProductTypeFilter
            selectedType={selectedType}
            setSelectedType={handleTypeChange}
            productTypes={productTypes}
            label="Select Women's Type"
          />

          <ProductGrid
            products={filteredProducts}
            onQuickView={openQuickView}
            loading={loading}
          />
        </div>
      </section>

      <QuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        initialColorIndex={selectedColorIndex}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}