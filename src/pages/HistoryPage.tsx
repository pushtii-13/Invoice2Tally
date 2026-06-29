import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Download, RotateCcw, FileText } from "lucide-react";
import { mockHistory } from "@/utils/mockData";
import type { InvoiceStatus } from "@/types/invoice";

const statusColor: Record<InvoiceStatus, string> = {
  Processed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

function HistoryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | InvoiceStatus>("All");

  const filtered = mockHistory.filter((inv) => {
    const matchSearch =
      inv.vendor.toLowerCase().includes(search.toLowerCase()) ||
      inv.id.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || inv.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">History</h1>
        <p className="text-sm text-gray-400">View and manage all processed invoices.</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by vendor or invoice ID..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {(["All", "Processed", "Pending", "Failed"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${filter === s
                  ? "bg-[#4A7FB5] text-white"
                  : "bg-white text-gray-500 hover:bg-[#B8D4E8] hover:text-[#4A7FB5]"
                }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm text-gray-600">
            {filtered.length} invoice{filtered.length !== 1 ? "s" : ""} found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b">
                <th className="text-left py-2">Invoice ID</th>
                <th className="text-left py-2">Vendor</th>
                <th className="text-left py-2">File</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-gray-400">
                    No invoices found.
                  </td>
                </tr>
              ) : (
                filtered.map((inv) => (
                  <tr key={inv.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-3 text-[#4A7FB5] font-medium">{inv.id}</td>
                    <td className="py-3 text-gray-700">{inv.vendor}</td>
                    <td className="py-3 text-gray-400 text-xs flex items-center gap-1">
                      <FileText size={12} />
                      {inv.file}
                    </td>
                    <td className="py-3 text-gray-700">{inv.amount}</td>
                    <td className="py-3 text-gray-400 text-xs">{inv.date}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[inv.status]}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-[#4A7FB5] transition-colors">
                          <Download size={15} />
                        </button>
                        {inv.status === "Failed" && (
                          <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                            <RotateCcw size={15} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

export default HistoryPage;