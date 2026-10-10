

const MarketTable = ({ markets = [], unit }) => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">

      <h2 className="mb-3 text-sm font-bold text-gray-800">
        বাজারভিত্তিক দাম
      </h2>

      {markets.length > 0 ? (
        <div className="overflow-x-auto">

          <table className="w-full min-w-162.5 border-collapse text-left">

            <thead>
              <tr className="border-y border-gray-200 text-[11px] text-gray-500">
                <th className="px-3 py-2 font-medium">
                  বাজার
                </th>

                <th className="px-3 py-2 font-medium">
                  বিভাগ
                </th>

                <th className="px-3 py-2 font-medium">
                  সর্বনিম্ন
                </th>

                <th className="px-3 py-2 font-medium">
                  সর্বোচ্চ
                </th>

                <th className="px-3 py-2 text-right font-medium">
                  গড় দাম
                </th>
              </tr>
            </thead>

            <tbody>
              {markets.map((market, index) => {
                const average =
                  (Number(market.min) + Number(market.max)) / 2;

                return (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-b border-gray-200 last:border-b-0"
                  >

                    <td className="px-3 py-2 text-xs font-medium text-gray-700">
                      {market.market}
                    </td>

                    <td className="px-3 py-2 text-xs text-gray-600">
                      {market.division}
                    </td>

                    <td className="px-3 py-2 text-xs text-gray-700">
                      {market.min} টাকা
                    </td>

                    <td className="px-3 py-2 text-xs text-gray-700">
                      {market.max} টাকা
                    </td>

                    <td className="px-3 py-2 text-right text-xs font-medium text-gray-800">
                      {average.toFixed(0)} টাকা
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>

        </div>
      ) : (
        <div className="py-10 text-center text-sm text-gray-500">
          কোনো বাজারের তথ্য পাওয়া যায়নি।
        </div>
      )}

    </div>
  );
};

export default MarketTable;