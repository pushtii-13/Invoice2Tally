const BASE_URL = "http://localhost:8000/api";

export const settingsService = {
  getSettings: async () => {
    const response = await fetch(`${BASE_URL}/settings`);
    if (!response.ok) throw new Error("Failed to fetch settings");
    return response.json();
  },

  updateSettings: async (data: unknown) => {
    const response = await fetch(`${BASE_URL}/settings`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update settings");
    return response.json();
  },

  getLedgerMappings: async () => {
    const response = await fetch(`${BASE_URL}/settings/ledger-mappings`);
    if (!response.ok) throw new Error("Failed to fetch ledger mappings");
    return response.json();
  },

  updateLedgerMappings: async (data: unknown) => {
    const response = await fetch(`${BASE_URL}/settings/ledger-mappings`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update ledger mappings");
    return response.json();
  },
};