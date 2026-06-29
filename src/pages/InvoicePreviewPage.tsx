import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockReviewInvoice } from "@/utils/mockReviewData";
import { toast } from "sonner";

function InvoicePreviewPage() {
  const navigate = useNavigate();
  const invoice = mockReviewInvoice;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-[#4A7FB5] transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Invoice Preview</h1>
            <p className="text-sm text-gray-400">PDF view and extracted data side by side.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => toast.info("Downloading invoice...")}
            className="flex items-center gap-2"
          >
            <Download size={16} />
            Download PDF
          </Button>
          <Button
            onClick={() => toast.success("Invoice sent to Tally successfully!")}
            className="bg-[#4A7FB5] hover:bg-[#3a6a9a] text-white flex items-center gap-2"
          >
            <Send size={16} />
            Send to Tally
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left — PDF Preview */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">PDF Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-xl h-[600px] flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
              <div className="w-16 h-16 bg-[#B8D4E8] rounded-full flex items-center justify-center mb-4">
                <Download size={28} className="text-[#4A7FB5]" />
              </div>
              <p className="text-gray-500 font-medium">tata_invoice_006.pdf</p>
              <p className="text-xs text-gray-400 mt-1">PDF viewer will render here</p>
              <p className="text-xs text-gray-300 mt-1">when backend is connected</p>
            </div>
          </CardContent>
        </Card>

        {/* Right — Extracted Data */}
        <div className="flex flex-col gap-4">
          {/* Status */}
          <Card className="border-0 shadow-sm">
            <CardContent className="flex items-center justify-between pt-6">
              <div>
                <p className="text-sm text-gray-400">Invoice ID</p>
                <p className="text-lg font-bold text-[#4A7FB5]">{invoice.id}</p>
              </div>
              <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                Pending Review
              </Badge>
            </CardContent>
          </Card>

          {/* Vendor */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Vendor Details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Name</span>
                <span className="font-medium text-gray-700">{invoice.vendor}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">GSTIN</span>
                <span className="font-medium text-gray-700">{invoice.gstin}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Address</span>
                <span className="font-medium text-gray-700 text-right max-w-xs">{invoice.vendorAddress}</span>
              </div>
            </CardContent>
          </Card>

          {/* Invoice Info */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Invoice Info</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Invoice Number</span>
                <span className="font-medium text-gray-700">{invoice.invoiceNumber}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Invoice Date</span>
                <span className="font-medium text-gray-700">{invoice.invoiceDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Due Date</span>
                <span className="font-medium text-gray-700">{invoice.dueDate}</span>
              </div>
            </CardContent>
          </Card>

          {/* Amount */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Amount Summary</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-gray-700">₹{invoice.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">GST (18%)</span>
                <span className="text-gray-700">₹{invoice.gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-bold border-t pt-2">
                <span className="text-gray-800">Total</span>
                <span className="text-gray-800">₹{invoice.total.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* AI Confidence */}
          <Card className="border-0 shadow-sm">
            <CardContent className="flex items-center justify-between pt-6">
              <span className="text-sm text-gray-400">AI Confidence Score</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                {invoice.confidence}%
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default InvoicePreviewPage;