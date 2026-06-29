"use client";

import { useEffect, useState } from "react";

import ProductGrid from "@/components/products/ProductGrid";
import QuickViewModal from "@/components/products/QuickViewModal";
import ProductTypeFilter from "@/components/products/ProductTypeFilter";

interface Product {
  id: string;
  productName: string;
  category: string;
  type: string;
  size: string;
  description: string;
  features: string[];
  images: string[];
}

export default function WomenPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>([]);

  const [selectedType, setSelectedType] =
    useState("ALL");

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      const womenProducts = data.filter(
        (product: Product) =>
          product.category === "WOMEN"
      );

      setProducts(womenProducts);
      setFilteredProducts(womenProducts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTypeChange = (
    type: string
  ) => {
    setSelectedType(type);

    if (type === "ALL") {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) => product.type === type
    );

    setFilteredProducts(filtered);
  };

  const productTypes = [
    "ALL",
    ...new Set(
      products.map(
        (product) => product.type
      )
    ),
  ];

  const openQuickView = (
    product: Product
  ) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="relative h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
        <img
          src="/images/women-hero.png"
          alt="Women Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-[var(--font-playfair)]">
            Women's Wear
          </h1>

          <p className="mt-4 max-w-2xl text-sm md:text-lg">
            Breathable innerwear engineered
            for comfort, flexibility and
            performance.
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
          />
        </div>
      </section>

      <QuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
      />
    </>
  );
}