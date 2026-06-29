export type InvoiceStatus = "Processed" | "Pending" | "Failed";

export interface Invoice {
  id: string;
  vendor: string;
  amount: string;
  status: InvoiceStatus;
  date?: string;
}

export interface KPIData {
  total: number;
  processed: number;
  pending: number;
  failed: number;
}

export interface ChartData {
  month: string;
  invoices: number;
}

export interface PieData {
  name: string;
  value: number;
}

export type FileUploadStatus = "uploading" | "processing" | "done" | "error";

export interface UploadedFile {
  name: string;
  size: string;
  status: FileUploadStatus;
}

export interface HistoryInvoice {
  id: string;
  vendor: string;
  amount: string;
  date: string;
  status: InvoiceStatus;
  file: string;
}