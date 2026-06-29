const BASE_URL = "http://localhost:8000/api";

export const tallyService = {
  sendInvoice: async (invoiceId: string) => {
    const response = await fetch(`${BASE_URL}/tally/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ invoiceId }),
    });
    if (!response.ok) throw new Error("Failed to send to Tally");
    return response.json();
  },

  getStatus: async (invoiceId: string) => {
    const response = await fetch(`${BASE_URL}/tally/status/${invoiceId}`);
    if (!response.ok) throw new Error("Failed to get Tally status");
    return response.json();
  },

  testConnection: async () => {
    const response = await fetch(`${BASE_URL}/tally/test`);
    if (!response.ok) throw new Error("Tally connection failed");
    return response.json();
  },

  getLedgers: async () => {
    const response = await fetch(`${BASE_URL}/tally/ledgers`);
    if (!response.ok) throw new Error("Failed to fetch ledgers");
    return response.json();
  },
};