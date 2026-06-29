import { create } from "zustand";

interface GeneralSettings {
  companyName: string;
  email: string;
  gstin: string;
}

interface TallySettings {
  host: string;
  port: string;
  company: string;
}

interface OCRSettings {
  confidence: string;
  autoSend: boolean;
  autoReview: boolean;
}

interface SettingsState {
  general: GeneralSettings;
  tally: TallySettings;
  ocr: OCRSettings;
  updateGeneral: (general: GeneralSettings) => void;
  updateTally: (tally: TallySettings) => void;
  updateOCR: (ocr: OCRSettings) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  general: {
    companyName: "Invoice2Tally Pvt Ltd",
    email: "admin@invoice2tally.com",
    gstin: "27AABCI1681G1ZK",
  },
  tally: {
    host: "localhost",
    port: "9000",
    company: "My Company",
  },
  ocr: {
    confidence: "80",
    autoSend: false,
    autoReview: true,
  },
  updateGeneral: (general) => set({ general }),
  updateTally: (tally) => set({ tally }),
  updateOCR: (ocr) => set({ ocr }),
}));