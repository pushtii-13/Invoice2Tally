export interface InvoiceLineItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface ReviewInvoice {
  id: string;
  vendor: string;
  vendorAddress: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  gstin: string;
  lineItems: InvoiceLineItem[];
  subtotal: number;
  gst: number;
  total: number;
  confidence: number;
}