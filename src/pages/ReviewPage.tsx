import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Send, AlertTriangle } from "lucide-react";
import InvoiceItemTable from "@/components/review/InvoiceItemTable";
import GSTSummary from "@/components/review/GSTSummary";
import { mockReviewInvoice } from "@/utils/mockReviewData";
import { toast } from "sonner";

function ReviewPage() {
  const [invoice, setInvoice] = useState(mockReviewInvoice);

  const confidenceColor =
    invoice.confidence >= 90
      ? "bg-green-100 text-green-700"
      : invoice.confidence >= 70
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Review Invoice</h1>
          <p className="text-sm text-gray-400">Verify extracted data before sending to Tally.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${confidenceColor}`}>
            AI Confidence: {invoice.confidence}%
          </span>
          {invoice.confidence < 90 && (
            <span className="flex items-center gap-1 text-xs text-yellow-600">
              <AlertTriangle size={14} />
              Review carefully
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left — Invoice Details */}
        <div className="col-span-2 flex flex-col gap-4">

          {/* Vendor Info */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Vendor Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Vendor Name</label>
                <Input
                  value={invoice.vendor}
                  onChange={(e) => setInvoice({ ...invoice, vendor: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">GSTIN</label>
                <Input
                  value={invoice.gstin}
                  onChange={(e) => setInvoice({ ...invoice, gstin: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <label className="text-xs text-gray-400">Address</label>
                <Input
                  value={invoice.vendorAddress}
                  onChange={(e) => setInvoice({ ...invoice, vendorAddress: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Invoice Details */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Invoice Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Invoice Number</label>
                <Input
                  value={invoice.invoiceNumber}
                  onChange={(e) => setInvoice({ ...invoice, invoiceNumber: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Invoice Date</label>
                <Input
                  value={invoice.invoiceDate}
                  onChange={(e) => setInvoice({ ...invoice, invoiceDate: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Due Date</label>
                <Input
                  value={invoice.dueDate}
                  onChange={(e) => setInvoice({ ...invoice, dueDate: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Line Items */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Line Items</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <InvoiceItemTable items={invoice.lineItems} />
              <GSTSummary
                subtotal={invoice.subtotal}
                gst={invoice.gst}
                total={invoice.total}
              />
            </CardContent>
          </Card>
        </div>

        {/* Right — Actions */}
        <div className="flex flex-col gap-4">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button
                onClick={() => toast.success("Invoice sent to Tally successfully!")}
                className="w-full bg-[#4A7FB5] hover:bg-[#3a6a9a] text-white flex items-center gap-2"
              >
                <Send size={16} />
                Send to Tally
              </Button>
              <Button
                onClick={() => toast.info("Invoice marked as reviewed.")}
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <CheckCircle size={16} />
                Mark as Reviewed
              </Button>
              <Button
                onClick={() => toast.error("Invoice rejected.")}
                variant="outline"
                className="w-full text-red-500 border-red-200 hover:bg-red-50"
              >
                Reject Invoice
              </Button>
            </CardContent>
          </Card>

          {/* Invoice Summary */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Summary</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Invoice ID</span>
                <span className="font-medium text-[#4A7FB5]">{invoice.id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Vendor</span>
                <span className="font-medium text-gray-700">{invoice.vendor}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Amount</span>
                <span className="font-bold text-gray-800">₹{invoice.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Status</span>
                <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending Review</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;