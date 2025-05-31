"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import { ProductType } from "@/types/product";

const LIMIT = 12;

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async ({
    category,
    page,
  }: {
    category: string;
    page: number;
  }) => {
    try {
      const url = category
        ? `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${
            page * LIMIT
          }`
        : `https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}`;

      const res = await fetch(url);
      const data = await res.json();

      return {
        products: data.products,
        total: data.total,
      };
    } catch (err) {
      console.error("Error fetching products:", err);
      return {
        products: [],
        total: 0,
      };
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      const { products, total } = await fetchProducts({
        category: selectedCategory,
        page,
      });

      setProducts(products);
      setTotalPages(Math.ceil(total / LIMIT));
    };

    loadProducts();
  }, [page, selectedCategory]);

  return (
    <div>
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </div>
  );
}
