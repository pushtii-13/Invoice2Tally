import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import FileUploadItem from "@/components/upload/FileUploadItem";
import { useUploadStore } from "@/store/uploadStore";

function UploadPage() {
  const { files, addFiles, updateFileStatus, removeFile } = useUploadStore();

  const onDrop = useCallback((accepted: File[]) => {
    const newFiles = accepted.map((f) => ({
      name: f.name,
      size: (f.size / 1024).toFixed(1) + " KB",
      status: "uploading" as const,
    }));

    const startIndex = files.length;
    addFiles(newFiles);

    newFiles.forEach((_, i) => {
      const index = startIndex + i;
      setTimeout(() => updateFileStatus(index, "processing"), 1000);
      setTimeout(() => updateFileStatus(index, "done"), 2500);
    });
  }, [files, addFiles, updateFileStatus]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    multiple: true,
  });

  const doneCount = files.filter((f) => f.status === "done").length;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Upload Invoices</h1>
        <p className="text-sm text-gray-400">Upload PDF or image invoices for AI processing.</p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6">
          <div
            {...getRootProps()}
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-16 cursor-pointer transition-colors
              ${isDragActive
                ? "border-[#4A7FB5] bg-[#B8D4E8]/20"
                : "border-gray-200 hover:border-[#4A7FB5] hover:bg-[#B8D4E8]/10"
              }`}
          >
            <input {...getInputProps()} />
            <div className="p-4 bg-[#B8D4E8] rounded-full mb-4">
              <Upload size={28} className="text-[#4A7FB5]" />
            </div>
            {isDragActive ? (
              <p className="text-[#4A7FB5] font-medium">Drop files here...</p>
            ) : (
              <>
                <p className="text-gray-600 font-medium text-lg">Drag & drop invoices here</p>
                <p className="text-sm text-gray-400 mt-1">or click to browse files</p>
                <p className="text-xs text-gray-300 mt-3">Supports PDF, PNG, JPG</p>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-gray-600">
              Uploaded Files ({doneCount}/{files.length} complete)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {files.map((file, index) => (
              <FileUploadItem
                key={index}
                file={file}
                onRemove={() => removeFile(index)}
              />
            ))}
            <Button
              className="w-full mt-2 bg-[#4A7FB5] hover:bg-[#3a6a9a] text-white"
              disabled={doneCount === 0}
            >
              Process All ({doneCount} ready)
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default UploadPage;