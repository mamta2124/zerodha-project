// Commodity.js
export default function Commodity() {
  return (
    <div className="container mx-auto px-2 md:px-4">
      {/* Scroll wrapper for mobile */}
      <div className="overflow-x-auto">
        <table className="min-w-[650px] w-full border border-gray-300 text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left"></th>
              <th className="px-3 py-2 text-left">Commodity futures</th>
              <th className="px-3 py-2 text-left">Commodity options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-3 py-2 font-medium">Brokerage</td>
              <td className="px-3 py-2">
                0.03% or ₹20 / executed order (whichever lower)
              </td>
              <td className="px-3 py-2">₹20 / executed order</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-3 py-2 font-medium">STT / CTT</td>
              <td className="px-3 py-2">
                0.01% on sell side (Non-Agri)
              </td>
              <td className="px-3 py-2">
                0.05% on sell side
              </td>
            </tr>

            <tr>
              <td className="px-3 py-2 font-medium">Transaction charges</td>
              <td className="px-3 py-2">
                MCX: 0.0021% <br />
                NSE: 0.0001%
              </td>
              <td className="px-3 py-2">
                MCX: 0.0418% <br />
                NSE: 0.001%
              </td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-3 py-2 font-medium">GST</td>
              <td className="px-3 py-2">
                18% on (brokerage + SEBI + transaction charges)
              </td>
              <td className="px-3 py-2">
                18% on (brokerage + SEBI + transaction charges)
              </td>
            </tr>

            <tr>
              <td className="px-3 py-2 font-medium">SEBI charges</td>
              <td className="px-3 py-2">
                Agri: ₹1 / crore <br />
                Non-Agri: ₹10 / crore
              </td>
              <td className="px-3 py-2">
                ₹10 / crore
              </td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-3 py-2 font-medium">Stamp charges</td>
              <td className="px-3 py-2">
                0.002% or ₹200 / crore (buy side)
              </td>
              <td className="px-3 py-2">
                0.003% or ₹300 / crore (buy side)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile scroll hint */}
      <p className="text-xs text-gray-500 mt-2 block md:hidden">
        👉 Swipe left/right to view full table
      </p>
    </div>
  );
}