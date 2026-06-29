const BASE_URL = "http://localhost:8000/api";

export const invoiceService = {
  getAllInvoices: async () => {
    const response = await fetch(`${BASE_URL}/invoices`);
    if (!response.ok) throw new Error("Failed to fetch invoices");
    return response.json();
  },

  getInvoiceById: async (id: string) => {
    const response = await fetch(`${BASE_URL}/invoices/${id}`);
    if (!response.ok) throw new Error("Failed to fetch invoice");
    return response.json();
  },

  updateInvoice: async (id: string, data: unknown) => {
    const response = await fetch(`${BASE_URL}/invoices/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update invoice");
    return response.json();
  },

  deleteInvoice: async (id: string) => {
    const response = await fetch(`${BASE_URL}/invoices/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete invoice");
    return response.json();
  },

  retryInvoice: async (id: string) => {
    const response = await fetch(`${BASE_URL}/invoices/${id}/retry`, {
      method: "POST",
    });
    if (!response.ok) throw new Error("Failed to retry invoice");
    return response.json();
  },
};