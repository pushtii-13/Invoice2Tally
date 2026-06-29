import type { InvoiceLineItem } from "@/types/review";

interface InvoiceItemTableProps {
  items: InvoiceLineItem[];
}

function InvoiceItemTable({ items }: InvoiceItemTableProps) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-[#F5F7FA] text-gray-500">
          <th className="text-left px-4 py-2 rounded-l-lg">Description</th>
          <th className="text-right px-4 py-2">Qty</th>
          <th className="text-right px-4 py-2">Rate (₹)</th>
          <th className="text-right px-4 py-2 rounded-r-lg">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className="border-b last:border-0">
            <td className="px-4 py-3 text-gray-700">{item.description}</td>
            <td className="px-4 py-3 text-right text-gray-700">{item.quantity}</td>
            <td className="px-4 py-3 text-right text-gray-700">{item.rate.toLocaleString()}</td>
            <td className="px-4 py-3 text-right font-medium text-gray-800">{item.amount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvoiceItemTable;