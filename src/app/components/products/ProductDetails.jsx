import Link from "next/link";
import MarketTable from "./MarketTable";

const ProductDetails = ({ product }) => {
  const {
    nameBn,
    category,
    categoryNameBn,
    categoryIcon,
    image,
    unit,
    today,
    yesterday,
    lastWeek,
    lastMonth,
    change,
    markets = [],
  } = product;

  const isUp = change?.dir === "up";

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">

      {/* Breadcrumb */}
      <div className="mb-5 flex items-center gap-2 text-xs text-gray-500">
        <Link
          href="/"
          className="hover:text-green-600"
        >
          হোম
        </Link>

        <span>›</span>

        <Link
          href={`/category/${category}`}
          className="hover:text-green-600"
        >
          {categoryNameBn}
        </Link>

        <span>›</span>

        <span className="text-gray-700">
          {nameBn}
        </span>
      </div>

      {/* Product Header */}
      <div className="mb-4 rounded-xl bg-white p-5 shadow-sm">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Product Info */}
          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f3f6f3] text-3xl">
              {image || categoryIcon || "🛒"}
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-800">
                {nameBn}
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                {categoryNameBn} • প্রতি {unit === "kg" ? "কেজি" : unit}
              </p>

              <p className="mt-1 text-[11px] text-gray-500">
                বাজারভেদে দামের পার্থক্য রয়েছে
              </p>
            </div>

          </div>

          {/* Current Price */}
          <div className="rounded-lg bg-[#f3f8f3] px-5 py-3 text-right">

            <p className="text-[10px] text-gray-500">
              বর্তমান মূল্য
            </p>

            <p className="text-2xl font-bold text-gray-800">
              {today} টাকা
            </p>

            <p className="text-[10px] text-gray-500">
              প্রতি {unit === "kg" ? "কেজি" : unit}
            </p>

            <span
              className={`mt-1 inline-block rounded-full px-2 py-1 text-[10px] ${
                isUp
                  ? "bg-red-50 text-red-500"
                  : "bg-green-50 text-green-600"
              }`}
            >
              {isUp ? "▲" : "▼"} {Math.abs(change?.pct || 0)}%
            </span>

          </div>

        </div>

      </div>

      {/* Price History */}
      <div className="mb-4 rounded-xl bg-white p-5 shadow-sm">

        <h2 className="mb-3 text-sm font-bold text-gray-800">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

          <div className="rounded-lg border border-gray-200 p-3">
            <p className="text-[10px] text-gray-500">
              গতকাল
            </p>

            <p className="mt-1 text-lg font-bold text-gray-800">
              {yesterday} টাকা
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-3">
            <p className="text-[10px] text-gray-500">
              গত সপ্তাহ
            </p>

            <p className="mt-1 text-lg font-bold text-gray-800">
              {lastWeek} টাকা
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-3">
            <p className="text-[10px] text-gray-500">
              গত মাস
            </p>

            <p className="mt-1 text-lg font-bold text-gray-800">
              {lastMonth} টাকা
            </p>
          </div>

        </div>

      </div>

      {/* Market Prices */}
      <MarketTable
        markets={markets}
        unit={unit}
      />

    </div>
  );
};

export default ProductDetails;