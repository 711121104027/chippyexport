//src/components/designs/DesignCategoryTabs.tsx

// src/components/designs/DesignCategoryTabs.tsx

"use client";

interface Props {
  active: string;
  onChange: (
    category:
      | "PACKING_BOX"
      | "PACKING_BOX_DESIGN"
  ) => void;
}

export default function DesignCategoryTabs({
  active,
  onChange,
}: Props) {
  return (
    <div
      className="
        flex
        justify-center
        gap-4
        flex-wrap
        mb-12
      "
    >
      <button
        onClick={() =>
          onChange("PACKING_BOX")
        }
        className={`
          min-w-[150px]
          px-6
          py-3
          rounded-xl
          font-medium
          text-base
          transition-all
          duration-300

          ${
            active === "PACKING_BOX"
              ? `
                bg-[#C95A11]
                text-white
                shadow-[0_8px_20px_rgba(201,90,17,0.20)]
                scale-[1.01]
              `
              : `
                bg-white
                text-neutral-800
                border
                border-neutral-200
                shadow-[0_3px_12px_rgba(0,0,0,0.05)]
                hover:-translate-y-1
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                hover:bg-neutral-50
              `
          }
        `}
      >
        Packing Box
      </button>

      <button
        onClick={() =>
          onChange(
            "PACKING_BOX_DESIGN"
          )
        }
        className={`
          min-w-[190px]
          px-6
          py-3
          rounded-xl
          font-medium
          text-base
          transition-all
          duration-300

          ${
            active ===
            "PACKING_BOX_DESIGN"
              ? `
                bg-[#C95A11]
                text-white
                shadow-[0_8px_20px_rgba(201,90,17,0.20)]
                scale-[1.01]
              `
              : `
                bg-white
                text-neutral-800
                border
                border-neutral-200
                shadow-[0_3px_12px_rgba(0,0,0,0.05)]
                hover:-translate-y-1
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                hover:bg-neutral-50
              `
          }
        `}
      >
        Packing Box Design
      </button>
    </div>
  );
}