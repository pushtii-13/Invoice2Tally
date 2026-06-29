const BASE_URL = "http://localhost:8000/api";

export const uploadService = {
  uploadFile: async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${BASE_URL}/upload`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Upload failed");
    return response.json();
  },

  getUploadStatus: async (fileId: string) => {
    const response = await fetch(`${BASE_URL}/upload/status/${fileId}`);
    if (!response.ok) throw new Error("Failed to get upload status");
    return response.json();
  },

  deleteUpload: async (fileId: string) => {
    const response = await fetch(`${BASE_URL}/upload/${fileId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete upload");
    return response.json();
  },
};