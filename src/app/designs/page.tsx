//src/app/designs/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

import DesignHero from "@/components/designs/DesignHero";
import DesignCategoryTabs from "@/components/designs/DesignCategoryTabs";
import DesignGrid from "@/components/designs/DesignGrid";

import { Design } from "@/types/design";

export default function DesignsPage() {
  const [designs, setDesigns] = useState<
    Design[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [activeCategory, setActiveCategory] =
    useState<
      "PACKING_BOX" | "PACKING_BOX_DESIGN"
    >("PACKING_BOX");

  useEffect(() => {
    fetchDesigns();
  }, []);

  async function fetchDesigns() {
    try {
      const res = await fetch(
        "/api/designs"
      );

      const data = await res.json();

      setDesigns(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filteredDesigns = useMemo(() => {
    return designs.filter(
      (design) =>
        design.category === activeCategory
    );
  }, [designs, activeCategory]);

  return (
    <>
      <DesignHero />

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
          md:py-12
        "
      >
        <div className="text-center mb-8">
          <h2
            className="
              text-3xl
              md:text-5xl
              font-playfair
              mb-4
            "
          >
            Our Packaging Designs
          </h2>

          <p
            className="
              text-neutral-600
              max-w-3xl
              mx-auto
            "
          >
            Explore our premium packaging
            collection crafted with elegance
            and precision.
          </p>
        </div>

        <div className="flex justify-center">
          <DesignCategoryTabs
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {loading ? (
          <div
            className="
              text-center
              py-20
            "
          >
            Loading...
          </div>
        ) : (
          <DesignGrid
            designs={filteredDesigns}
          />
        )}
      </section>
    </>
  );
}