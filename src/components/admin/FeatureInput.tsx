//src/components/admin/FeatureInput.tsx

"use client";

interface Props {
  features: string[];
  setFeatures: (features: string[]) => void;
}

export default function FeatureInput({
  features,
  setFeatures,
}: Props) {
  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const updateFeature = (
    index: number,
    value: string
  ) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const removeFeature = (
    index: number
  ) => {
    setFeatures(
      features.filter(
        (_, i) => i !== index
      )
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="font-medium">
          Features
        </label>

        <button
          type="button"
          onClick={addFeature}
          className="bg-[#7A1C1C] text-white px-4 py-2 rounded-lg"
        >
          + Add Feature
        </button>
      </div>

      <div className="space-y-3">
        {features.map(
          (feature, index) => (
            <div
              key={index}
              className="flex gap-2"
            >
              <input
                value={feature}
                onChange={(e) =>
                  updateFeature(
                    index,
                    e.target.value
                  )
                }
                placeholder="Enter feature"
                className="flex-1 border rounded-lg px-4 py-3"
              />

              <button
                type="button"
                onClick={() =>
                  removeFeature(index)
                }
                className="bg-red-500 text-white px-4 rounded-lg"
              >
                X
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}