

import Link from "next/link";

const ProductCard = ({ product }) => {
  const {
    nameBn,
    unit,
    image,
    today,
    change,
  } = product;

  const isUp = change.dir === "up";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block"
    >
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

        <div className="mb-3 flex items-center gap-2">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xl">
            {image}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {nameBn}
            </h3>

            <p className="text-[10px] text-gray-500">
              {unit === "kg" ? "প্রতি কেজি" : unit}
            </p>
          </div>

        </div>

        <div className="flex items-end justify-between">

          <div>
            <p className="text-[10px] text-gray-500">
              বর্তমান মূল্য
            </p>

            <p className="text-sm font-bold text-gray-800">
              {today} টাকা
            </p>
          </div>

          <span
            className={`rounded-full px-2 py-1 text-[10px] ${
              isUp
                ? "bg-red-50 text-red-500"
                : "bg-green-50 text-green-600"
            }`}
          >
            {isUp ? "▲" : "▼"} {Math.abs(change.pct)}%
          </span>

        </div>

      </div>
    </Link>
  );
};

export default ProductCard;