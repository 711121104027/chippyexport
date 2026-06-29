//src/components/designs/DesignGrid.tsx

import { Design } from "@/types/design";
import DesignCard from "./DesignCard";

interface Props {
  designs: Design[];
}

export default function DesignGrid({
  designs,
}: Props) {
  if (!designs.length) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-semibold">
          No Designs Found
        </h3>

        <p className="text-neutral-500 mt-3">
          Designs will appear here soon.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
      "
    >
      {designs.map((design) => (
        <DesignCard
          key={design.id}
          design={design}
        />
      ))}
    </div>
  );
}