import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Invoice, InvoiceStatus } from "@/types/invoice";

const statusColor: Record<InvoiceStatus, string> = {
  Processed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

interface RecentActivityProps {
  data: Invoice[];
}

function RecentActivity({ data }: RecentActivityProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-sm text-gray-600">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b">
              <th className="text-left py-2">Invoice ID</th>
              <th className="text-left py-2">Vendor</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-3 text-[#4A7FB5] font-medium">{item.id}</td>
                <td className="py-3 text-gray-700">{item.vendor}</td>
                <td className="py-3 text-gray-700">{item.amount}</td>
                <td className="py-3 text-gray-400 text-xs">{item.date}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[item.status]}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export default RecentActivity;