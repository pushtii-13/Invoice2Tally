import { create } from "zustand";
import type { Invoice } from "@/types/invoice";

interface InvoiceState {
  invoices: Invoice[];
  selectedInvoice: Invoice | null;
  setInvoices: (invoices: Invoice[]) => void;
  selectInvoice: (invoice: Invoice) => void;
  clearSelected: () => void;
}

export const useInvoiceStore = create<InvoiceState>((set) => ({
  invoices: [],
  selectedInvoice: null,
  setInvoices: (invoices) => set({ invoices }),
  selectInvoice: (invoice) => set({ selectedInvoice: invoice }),
  clearSelected: () => set({ selectedInvoice: null }),
}));