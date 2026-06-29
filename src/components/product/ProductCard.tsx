import Image from "next/image";

export default function ProductCard({
  product,
}: any) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow
      hover:shadow-xl
      transition
    "
    >
      <Image
        src={product.images[0]}
        alt={product.productName}
        width={500}
        height={500}
        className="
          w-full
          h-[320px]
          object-cover
        "
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">
          {product.productName}
        </h3>

        <p className="text-gray-500 mt-2">
          {product.type}
        </p>
      </div>
    </div>
  );
}