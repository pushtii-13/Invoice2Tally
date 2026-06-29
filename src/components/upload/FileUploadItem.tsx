import React from "react";
import { FileText, CheckCircle, Loader2, X, AlertCircle } from "lucide-react";
import type { UploadedFile, FileUploadStatus } from "@/types/invoice";

const statusIcon: Record<FileUploadStatus, React.ReactElement> = {
  uploading: <Loader2 size={16} className="animate-spin text-[#4A7FB5]" />,
  processing: <Loader2 size={16} className="animate-spin text-yellow-500" />,
  done: <CheckCircle size={16} className="text-green-500" />,
  error: <AlertCircle size={16} className="text-red-500" />,
};

const statusText: Record<FileUploadStatus, string> = {
  uploading: "Uploading...",
  processing: "OCR Processing...",
  done: "Complete",
  error: "Error",
};

const statusColor: Record<FileUploadStatus, string> = {
  uploading: "text-[#4A7FB5]",
  processing: "text-yellow-500",
  done: "text-green-500",
  error: "text-red-500",
};

interface FileUploadItemProps {
  file: UploadedFile;
  onRemove: () => void;
}

function FileUploadItem({ file, onRemove }: FileUploadItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <FileText size={18} className="text-[#4A7FB5]" />
        <div>
          <p className="text-sm font-medium text-gray-700">{file.name}</p>
          <p className="text-xs text-gray-400">{file.size}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {statusIcon[file.status]}
        <span className={`text-xs font-medium ${statusColor[file.status]}`}>
          {statusText[file.status]}
        </span>
        {file.status !== "uploading" && file.status !== "processing" && (
          <button onClick={onRemove}>
            <X size={16} className="text-gray-400 hover:text-red-400 transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
}

export default FileUploadItem;