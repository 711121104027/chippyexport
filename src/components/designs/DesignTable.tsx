//src/components/designs/DesignTable.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";

interface Design {
  id: string;
  designName: string;
  category: string;
  image: string;
}

interface Props {
  designs: Design[];
}

export default function DesignTable({
  designs,
}: Props) {
  const router = useRouter();

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this design?"
    );

    if (!confirmed) return;

    try {
      await fetch(`/api/designs/${id}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete design");
    }
  }

  if (designs.length === 0) {
    return (
      <div className="bg-white rounded-2xl border p-12 text-center">
        <h3 className="text-xl font-semibold">
          No Designs Found
        </h3>

        <p className="text-neutral-500 mt-2">
          Add your first design.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border bg-white">
      <table className="w-full">
        <thead className="bg-neutral-50">
          <tr>
            <th className="p-4 text-left">
              Image
            </th>

            <th className="p-4 text-left">
              Design Name
            </th>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {designs.map((design) => (
            <tr
              key={design.id}
              className="border-t"
            >
              <td className="p-4">
                <Image
                  src={design.image}
                  alt={design.designName}
                  width={80}
                  height={80}
                  className="
                    rounded-xl
                    object-cover
                    w-20
                    h-20
                  "
                />
              </td>

              <td className="p-4 font-medium">
                {design.designName}
              </td>

              <td className="p-4">
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-[#7A1C1C]/10
                    text-[#7A1C1C]
                  "
                >
                  {design.category ===
                  "PACKING_BOX"
                    ? "Packing Box"
                    : "Packing Box Design"}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-3">
                  <Link
                    href={`/admin/designs/edit/${design.id}`}
                    className="
                      p-2
                      rounded-lg
                      border
                      hover:bg-neutral-100
                    "
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(design.id)
                    }
                    className="
                      p-2
                      rounded-lg
                      border
                      text-red-500
                      hover:bg-red-50
                    "
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}