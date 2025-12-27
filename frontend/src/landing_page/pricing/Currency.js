// Currency.js
export default function Currency() {
  return (
    <div className="container mx-auto px-2 md:px-4">
      {/* Scroll wrapper for mobile */}
      <div className="overflow-x-auto">
        <table className="min-w-[650px] w-full border border-gray-300 text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left"></th>
              <th className="px-3 py-2 text-left">Currency futures</th>
              <th className="px-3 py-2 text-left">Currency options</th>
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
              <td className="px-3 py-2">No STT</td>
              <td className="px-3 py-2">No STT</td>
            </tr>

            <tr>
              <td className="px-3 py-2 font-medium">Transaction charges</td>
              <td className="px-3 py-2">
                NSE: 0.00035% <br />
                BSE: 0.00045%
              </td>
              <td className="px-3 py-2">
                NSE: 0.0311% <br />
                BSE: 0.001%
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
              <td className="px-3 py-2">₹10 / crore</td>
              <td className="px-3 py-2">₹10 / crore</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-3 py-2 font-medium">Stamp charges</td>
              <td className="px-3 py-2">
                0.0001% or ₹10 / crore (buy side)
              </td>
              <td className="px-3 py-2">
                0.0001% or ₹10 / crore (buy side)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile hint */}
      <p className="text-xs text-gray-500 mt-2 block md:hidden">
        👉 Swipe left/right to view full table
      </p>
    </div>
  );
}