import { ProductType } from "@/types/product";
import Image from "next/image";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition space-y-3">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={200}
        className="rounded-md object-cover w-full h-[200px]"
      />

      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-700 font-bold">${product.price}</p>

        {product.category && (
          <p className="text-sm text-gray-500">Category: {product.category}</p>
        )}

        {product.brand && (
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>
        )}

        {product.rating !== undefined && (
          <p className="text-sm text-yellow-600">Rating: ⭐ {product.rating}</p>
        )}

        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
        )}

        {product.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
