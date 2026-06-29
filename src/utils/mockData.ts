import type { Invoice, KPIData, ChartData, PieData } from "@/types/invoice";

export const mockKPI: KPIData = {
  total: 1284,
  processed: 1050,
  pending: 180,
  failed: 54,
};

export const mockBarData: ChartData[] = [
  { month: "Jan", invoices: 30 },
  { month: "Feb", invoices: 45 },
  { month: "Mar", invoices: 38 },
  { month: "Apr", invoices: 60 },
  { month: "May", invoices: 52 },
  { month: "Jun", invoices: 70 },
];

export const mockPieData: PieData[] = [
  { name: "Processed", value: 68 },
  { name: "Pending", value: 20 },
  { name: "Failed", value: 12 },
];

export const mockRecentActivity: Invoice[] = [
  { id: "INV-001", vendor: "Tata Steel Ltd", amount: "₹1,24,500", status: "Processed", date: "12 Jun 2026" },
  { id: "INV-002", vendor: "Reliance Industries", amount: "₹89,200", status: "Pending", date: "11 Jun 2026" },
  { id: "INV-003", vendor: "Infosys Ltd", amount: "₹2,10,000", status: "Processed", date: "11 Jun 2026" },
  { id: "INV-004", vendor: "HDFC Bank", amount: "₹45,800", status: "Failed", date: "10 Jun 2026" },
  { id: "INV-005", vendor: "Wipro Ltd", amount: "₹1,05,300", status: "Processed", date: "10 Jun 2026" },
];

import type { HistoryInvoice } from "@/types/invoice";

export const mockHistory: HistoryInvoice[] = [
  { id: "INV-001", vendor: "Tata Steel Ltd", amount: "₹1,24,500", date: "12 Jun 2026", status: "Processed", file: "tata_invoice_001.pdf" },
  { id: "INV-002", vendor: "Reliance Industries", amount: "₹89,200", date: "11 Jun 2026", status: "Pending", file: "reliance_inv_june.pdf" },
  { id: "INV-003", vendor: "Infosys Ltd", amount: "₹2,10,000", date: "11 Jun 2026", status: "Processed", file: "infosys_2026_06.pdf" },
  { id: "INV-004", vendor: "HDFC Bank", amount: "₹45,800", date: "10 Jun 2026", status: "Failed", file: "hdfc_invoice.pdf" },
  { id: "INV-005", vendor: "Wipro Ltd", amount: "₹1,05,300", date: "10 Jun 2026", status: "Processed", file: "wipro_inv_005.pdf" },
  { id: "INV-006", vendor: "Tata Steel Ltd", amount: "₹1,56,940", date: "09 Jun 2026", status: "Processed", file: "tata_invoice_006.pdf" },
  { id: "INV-007", vendor: "Mahindra Ltd", amount: "₹78,500", date: "08 Jun 2026", status: "Pending", file: "mahindra_inv.pdf" },
  { id: "INV-008", vendor: "Bajaj Finance", amount: "₹2,34,000", date: "07 Jun 2026", status: "Processed", file: "bajaj_fin_008.pdf" },
];