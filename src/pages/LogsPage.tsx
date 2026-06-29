import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type LogLevel = "INFO" | "SUCCESS" | "WARNING" | "ERROR";

interface LogEntry {
  id: number;
  timestamp: string;
  level: LogLevel;
  message: string;
}

const mockLogs: LogEntry[] = [
  { id: 1, timestamp: "2026-06-12 10:45:01", level: "INFO", message: "Application started successfully." },
  { id: 2, timestamp: "2026-06-12 10:45:12", level: "INFO", message: "User logged in: admin@invoice2tally.com" },
  { id: 3, timestamp: "2026-06-12 10:46:03", level: "SUCCESS", message: "Invoice INV-008 processed and sent to Tally." },
  { id: 4, timestamp: "2026-06-12 10:47:15", level: "INFO", message: "OCR processing started for tata_invoice_006.pdf" },
  { id: 5, timestamp: "2026-06-12 10:47:45", level: "SUCCESS", message: "OCR completed for tata_invoice_006.pdf with 94% confidence." },
  { id: 6, timestamp: "2026-06-12 10:48:20", level: "WARNING", message: "Low confidence (67%) detected for reliance_inv_june.pdf. Manual review required." },
  { id: 7, timestamp: "2026-06-12 10:49:10", level: "ERROR", message: "Failed to connect to Tally server. Retrying in 30 seconds." },
  { id: 8, timestamp: "2026-06-12 10:49:40", level: "SUCCESS", message: "Tally server connection restored." },
  { id: 9, timestamp: "2026-06-12 10:50:05", level: "INFO", message: "Ledger mapping updated for Wipro Ltd." },
  { id: 10, timestamp: "2026-06-12 10:51:22", level: "ERROR", message: "Invoice INV-004 rejected: Invalid GSTIN format." },
  { id: 11, timestamp: "2026-06-12 10:52:00", level: "INFO", message: "Scheduled backup completed successfully." },
  { id: 12, timestamp: "2026-06-12 10:53:15", level: "SUCCESS", message: "Invoice INV-005 sent to Tally successfully." },
];

const levelStyle: Record<LogLevel, string> = {
  INFO: "bg-blue-100 text-blue-700",
  SUCCESS: "bg-green-100 text-green-700",
  WARNING: "bg-yellow-100 text-yellow-700",
  ERROR: "bg-red-100 text-red-700",
};

function LogsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | LogLevel>("All");

  const filtered = mockLogs.filter((log) => {
    const matchSearch = log.message.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || log.level === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Logs</h1>
        <p className="text-sm text-gray-400">System activity and error logs.</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search logs..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {(["All", "INFO", "SUCCESS", "WARNING", "ERROR"] as const).map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${filter === level
                  ? "bg-[#4A7FB5] text-white"
                  : "bg-white text-gray-500 hover:bg-[#B8D4E8] hover:text-[#4A7FB5]"
                }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Logs */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm text-gray-600">{filtered.length} log entries</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-10">No logs found.</p>
          ) : (
            filtered.map((log) => (
              <div key={log.id} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">{log.timestamp}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap ${levelStyle[log.level]}`}>
                  {log.level}
                </span>
                <span className="text-sm text-gray-700">{log.message}</span>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default LogsPage;