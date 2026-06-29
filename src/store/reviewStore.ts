import { create } from "zustand";
import type { ReviewInvoice } from "@/types/review";

interface ReviewState {
  currentInvoice: ReviewInvoice | null;
  isEdited: boolean;
  setInvoice: (invoice: ReviewInvoice) => void;
  updateInvoice: (invoice: ReviewInvoice) => void;
  clearInvoice: () => void;
}

export const useReviewStore = create<ReviewState>((set) => ({
  currentInvoice: null,
  isEdited: false,
  setInvoice: (invoice) => set({ currentInvoice: invoice, isEdited: false }),
  updateInvoice: (invoice) => set({ currentInvoice: invoice, isEdited: true }),
  clearInvoice: () => set({ currentInvoice: null, isEdited: false }),
}));
