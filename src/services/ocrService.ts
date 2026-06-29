const BASE_URL = "http://localhost:8000/api";

export const ocrService = {
  processInvoice: async (fileId: string) => {
    const response = await fetch(`${BASE_URL}/ocr/process`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileId }),
    });
    if (!response.ok) throw new Error("OCR processing failed");
    return response.json();
  },

  getOCRResult: async (fileId: string) => {
    const response = await fetch(`${BASE_URL}/ocr/result/${fileId}`);
    if (!response.ok) throw new Error("Failed to get OCR result");
    return response.json();
  },

  getConfidence: async (fileId: string) => {
    const response = await fetch(`${BASE_URL}/ocr/confidence/${fileId}`);
    if (!response.ok) throw new Error("Failed to get confidence score");
    return response.json();
  },
};