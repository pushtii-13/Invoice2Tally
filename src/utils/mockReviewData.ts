import type { ReviewInvoice } from "@/types/review";

export const mockReviewInvoice: ReviewInvoice = {
  id: "INV-006",
  vendor: "Tata Steel Ltd",
  vendorAddress: "Bombay House, 24 Homi Mody Street, Mumbai - 400001",
  invoiceNumber: "TS/2026/06/1234",
  invoiceDate: "10 Jun 2026",
  dueDate: "25 Jun 2026",
  gstin: "27AAACT2727Q1ZW",
  lineItems: [
    { description: "Hot Rolled Steel Sheets", quantity: 50, rate: 1200, amount: 60000 },
    { description: "Cold Rolled Steel Coils", quantity: 30, rate: 1800, amount: 54000 },
    { description: "Galvanized Steel Strips", quantity: 20, rate: 950, amount: 19000 },
  ],
  subtotal: 133000,
  gst: 23940,
  total: 156940,
  confidence: 94,
};