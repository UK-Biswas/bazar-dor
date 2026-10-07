const ProductCard = ({ product }) => {
  const {
    nameBn,
    categoryNameBn,
    unit,
    image,
    today,
    change,
  } = product;

  const isUp = change.dir === "up";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-2xl">
          {image}
        </div>

        <div>
          <h3 className="font-semibold">
            {nameBn}
          </h3>

          <p className="text-xs text-gray-500">
            {unit === "kg" ? "প্রতি কেজি" : unit}
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-gray-500">
            বর্তমান মূল্য
          </p>

          <p className="font-bold">
            {today} টাকা
          </p>
        </div>

        <span
          className={`rounded-full px-2 py-1 text-xs ${
            isUp
              ? "bg-red-50 text-red-500"
              : "bg-green-50 text-green-600"
          }`}
        >
          {isUp ? "▲" : "▼"} {Math.abs(change.pct)}%
        </span>
      </div>
    </div>
  );
};

export default ProductCard;