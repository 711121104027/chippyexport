//src/components/admin/ColorVariantManager.tsx

"use client";

import { Plus, Trash2, Palette } from "lucide-react";
import { ColorVariant } from "@/types/product";

interface ColorVariantManagerProps {
  colors: ColorVariant[];
  setColors: (colors: ColorVariant[]) => void;
}

const PRESET_COLORS = [
  { name: "Black", hex: "#111827" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Navy", hex: "#1E3A8A" },
  { name: "Maroon", hex: "#7A1C1C" },
  { name: "Charcoal", hex: "#374151" },
  { name: "Olive", hex: "#4D7C0F" },
  { name: "Wine", hex: "#831843" },
  { name: "Sky Blue", hex: "#0284C7" },
  { name: "Beige", hex: "#D6D3D1" },
  { name: "Pine Green", hex: "#065F46" },
  { name: "Royal Blue", hex: "#2563EB" },
  { name: "Crimson Red", hex: "#DC2626" },
  { name: "Pastel Pink", hex: "#F472B6" },
  { name: "Heather Grey", hex: "#9CA3AF" },
  { name: "Mustard Yellow", hex: "#EAB308" },
];

export default function ColorVariantManager({
  colors,
  setColors,
}: ColorVariantManagerProps) {
  const addColorVariant = () => {
    setColors([
      ...colors,
      {
        name: "",
        hex: "#1E3A8A",
      },
    ]);
  };

  const removeColorVariant = (index: number) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const updateColorField = (
    index: number,
    field: keyof ColorVariant,
    value: any
  ) => {
    const updated = [...colors];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setColors(updated);
  };

  return (
    <div className="space-y-4 pt-4 border-t border-neutral-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#7A1C1C]" />
            Available Colors
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Add the available color shades for this product. Use the color picker or preset buttons.
          </p>
        </div>

        <button
          type="button"
          onClick={addColorVariant}
          className="
            inline-flex items-center gap-1.5
            bg-[#7A1C1C] text-white
            px-4 py-2 rounded-xl
            text-sm font-medium
            hover:bg-[#641515] transition
            shadow-sm cursor-pointer
          "
        >
          <Plus size={16} />
          Add Color
        </button>
      </div>

      {colors.length === 0 ? (
        <div className="p-6 border-2 border-dashed border-neutral-200 rounded-2xl text-center bg-[#FAF7F2]/50">
          <p className="text-sm text-neutral-500">
            No colors added yet. Click <strong>&quot;Add Color&quot;</strong> to add colors (e.g. Black, Navy, Maroon, Olive).
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {colors.map((color, colorIdx) => (
            <div
              key={colorIdx}
              className="p-4 border border-neutral-200 rounded-2xl bg-white shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between gap-3">
                {/* Color preview circle */}
                <div
                  className="w-8 h-8 rounded-full border border-neutral-300 shadow-inner shrink-0"
                  style={{ backgroundColor: color.hex || "#1E3A8A" }}
                />

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Color Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                      Color Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Navy Blue, Jet Black"
                      value={color.name}
                      onChange={(e) =>
                        updateColorField(colorIdx, "name", e.target.value)
                      }
                      className="w-full border border-neutral-300 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
                      required
                    />
                  </div>

                  {/* Color Picker / Hex */}
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                      Color Picker & Hex
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={color.hex || "#1E3A8A"}
                        onChange={(e) =>
                          updateColorField(colorIdx, "hex", e.target.value)
                        }
                        className="w-8 h-8 rounded-lg cursor-pointer border border-neutral-300 p-0.5 shrink-0"
                      />
                      <input
                        type="text"
                        placeholder="#1E3A8A"
                        value={color.hex || ""}
                        onChange={(e) =>
                          updateColorField(colorIdx, "hex", e.target.value)
                        }
                        className="w-full border border-neutral-300 rounded-xl px-3 py-1.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
                      />
                    </div>
                  </div>
                </div>

                {/* Delete button */}
                <button
                  type="button"
                  onClick={() => removeColorVariant(colorIdx)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition cursor-pointer self-center"
                  title="Remove this color"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Quick Preset Colors */}
              <div className="pt-2 border-t border-neutral-100">
                <span className="text-[11px] text-neutral-400 block mb-1">
                  Quick Presets:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_COLORS.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => {
                        updateColorField(colorIdx, "hex", preset.hex);
                        if (!color.name) {
                          updateColorField(colorIdx, "name", preset.name);
                        }
                      }}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg border border-neutral-200 text-xs hover:bg-neutral-50 transition cursor-pointer"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                        style={{ backgroundColor: preset.hex }}
                      />
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
