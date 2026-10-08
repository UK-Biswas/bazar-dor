"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const CategoryProductSection = ({
  title,
  products = [],
}) => {
  const [sort, setSort] = useState("default");

  const categoryIcon =
    products[0]?.categoryIcon || products[0]?.image || "🛒";

  const sortedProducts = [...products].sort((a, b) => {
    const priceA = Number(a.today);
    const priceB = Number(b.today);

    if (sort === "low") {
      return priceA - priceB;
    }

    if (sort === "high") {
      return priceB - priceA;
    }

    return 0;
  });

  return (
    <section className="min-h-screen bg-[#f3f8f3] py-6">
      <div className="mx-auto max-w-6xl px-4">

        {/* Category Header */}
        <div className="mb-4 rounded-xl bg-white px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3">

            {/* Category Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8e8eb] text-2xl">
              {categoryIcon}
            </div>

            {/* Category Name */}
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                {title}
              </h1>

              <p className="mt-0.5 text-xs text-gray-500">
                {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>

          </div>
        </div>

        {/* Sort Bar */}
        <div className="mb-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">

          <p className="text-xs text-gray-500">
            মোট {sortedProducts.length} টি পণ্য
          </p>

          <div className="flex items-center gap-2">

            <span className="text-xs text-gray-500">
              সাজান:
            </span>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-8 cursor-pointer rounded-md border border-gray-300 bg-white px-2 text-xs text-gray-700 outline-none transition focus:border-green-600"
            >
              <option value="default">
                ডিফল্ট
              </option>

              <option value="low">
                দাম: কম থেকে বেশি
              </option>

              <option value="high">
                দাম: বেশি থেকে কম
              </option>
            </select>

          </div>

        </div>

        {/* Products */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="rounded-xl bg-white py-16 text-center shadow-sm">

            <div className="mb-3 text-5xl">
              😔
            </div>

            <h2 className="text-lg font-semibold text-gray-700">
              কোনো পণ্য পাওয়া যায়নি
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
            </p>

          </div>
        )}

      </div>
    </section>
  );
};

export default CategoryProductSection;