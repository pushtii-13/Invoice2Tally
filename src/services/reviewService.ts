const BASE_URL = "http://localhost:8000/api";

export const reviewService = {
  getReviewInvoice: async (id: string) => {
    const response = await fetch(`${BASE_URL}/review/${id}`);
    if (!response.ok) throw new Error("Failed to fetch review invoice");
    return response.json();
  },

  saveReview: async (id: string, data: unknown) => {
    const response = await fetch(`${BASE_URL}/review/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save review");
    return response.json();
  },

  approveInvoice: async (id: string) => {
    const response = await fetch(`${BASE_URL}/review/${id}/approve`, {
      method: "POST",
    });
    if (!response.ok) throw new Error("Failed to approve invoice");
    return response.json();
  },

  rejectInvoice: async (id: string) => {
    const response = await fetch(`${BASE_URL}/review/${id}/reject`, {
      method: "POST",
    });
    if (!response.ok) throw new Error("Failed to reject invoice");
    return response.json();
  },
};