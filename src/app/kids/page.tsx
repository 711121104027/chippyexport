//src/app/kids/page.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ProductGrid from "@/components/products/ProductGrid";
import QuickViewModal from "@/components/products/QuickViewModal";
import ProductTypeFilter from "@/components/products/ProductTypeFilter";
import { Product } from "@/types/product";

const DEFAULT_GENDERS = ["ALL", "Boys", "Girls", "Unisex"];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function KidsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGender, setSelectedGender] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products/category/KIDS", {
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
      console.error("Failed to load kids products:", error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (gender: string, type: string) => {
    let result = products;

    if (gender !== "ALL") {
      result = result.filter(
        (p) => (p.gender || "").toLowerCase() === gender.toLowerCase()
      );
    }

    if (type !== "ALL") {
      result = result.filter((p) => p.type === type);
    }

    setFilteredProducts(result);
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    applyFilters(gender, selectedType);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    applyFilters(selectedGender, type);
  };

  // Extract unique gender list if custom ones exist
  const dynamicGenders = Array.from(
    new Set([
      ...DEFAULT_GENDERS,
      ...products.map((p) => p.gender).filter(Boolean) as string[],
    ])
  );

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
          src="/images/kids-hero.png"
          alt="Kids Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-[var(--font-playfair)]">
            Kid&apos;s Wear
          </h1>

          <p className="mt-4 max-w-2xl text-sm md:text-lg text-neutral-100">
            Breathable innerwear engineered for comfort, flexibility and performance.
          </p>
        </div>
      </section>

      <section className="pt-6 pb-8 md:pt-8 md:pb-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          {/* Filters Bar: Gender Tabs on Left / Type Selector on Right */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8 border-b border-neutral-100 pb-4">
            {/* Gender Section */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mr-1">
                Gender:
              </span>
              {dynamicGenders.map((gender) => {
                const isSelected = selectedGender.toLowerCase() === gender.toLowerCase();
                return (
                  <button
                    key={gender}
                    type="button"
                    onClick={() => handleGenderChange(gender)}
                    className={`
                      px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer
                      ${
                        isSelected
                          ? "bg-[#7A1C1C] text-white shadow-md scale-105"
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-black"
                      }
                    `}
                  >
                    {gender === "ALL" ? "All Kids" : gender}
                  </button>
                );
              })}
            </div>

            {/* Type Filter */}
            {productTypes.length > 1 && (
              <div className="w-full md:w-auto">
                <ProductTypeFilter
                  selectedType={selectedType}
                  setSelectedType={handleTypeChange}
                  productTypes={productTypes}
                  label="Select Kid's Type"
                />
              </div>
            )}
          </div>

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