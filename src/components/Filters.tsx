"use client";

import { CategoryType } from "@/types/product";
import React, { useEffect } from "react";

type FiltersProps = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">
        <label htmlFor="category" className="font-medium text-gray-700">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
