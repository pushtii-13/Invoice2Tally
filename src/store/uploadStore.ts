import { create } from "zustand";
import type { UploadedFile } from "@/types/invoice";

interface UploadState {
  files: UploadedFile[];
  addFiles: (files: UploadedFile[]) => void;
  updateFileStatus: (index: number, status: UploadedFile["status"]) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  files: [],
  addFiles: (files) => set((state) => ({ files: [...state.files, ...files] })),
  updateFileStatus: (index, status) =>
    set((state) => ({
      files: state.files.map((f, i) => (i === index ? { ...f, status } : f)),
    })),
  removeFile: (index) =>
    set((state) => ({
      files: state.files.filter((_, i) => i !== index),
    })),
  clearFiles: () => set({ files: [] }),
}));