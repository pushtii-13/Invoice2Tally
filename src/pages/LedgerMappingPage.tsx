import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save, Plus, Trash2 } from "lucide-react";

interface LedgerEntry {
  vendor: string;
  ledger: string;
  gstin: string;
}

const initialMappings: LedgerEntry[] = [
  { vendor: "Tata Steel Ltd", ledger: "Purchase - Steel & Metals", gstin: "27AAACT2727Q1ZW" },
  { vendor: "Reliance Industries", ledger: "Purchase - Petroleum Products", gstin: "27AAACR5055K1Z5" },
  { vendor: "Infosys Ltd", ledger: "IT Services", gstin: "29AABCI1681G1ZK" },
  { vendor: "HDFC Bank", ledger: "Bank Charges", gstin: "24AAACD0474G1ZQ" },
  { vendor: "Wipro Ltd", ledger: "IT Services", gstin: "29AAACW0035G1ZM" },
];

function LedgerMappingPage() {
  const [mappings, setMappings] = useState<LedgerEntry[]>(initialMappings);
  const [saved, setSaved] = useState(false);

  const handleChange = (index: number, field: keyof LedgerEntry, value: string) => {
    setMappings((prev) =>
      prev.map((m, i) => (i === index ? { ...m, [field]: value } : m))
    );
    setSaved(false);
  };

  const handleAdd = () => {
    setMappings((prev) => [...prev, { vendor: "", ledger: "", gstin: "" }]);
    setSaved(false);
  };

  const handleDelete = (index: number) => {
    setMappings((prev) => prev.filter((_, i) => i !== index));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Ledger Mapping</h1>
          <p className="text-sm text-gray-400">Map vendors to their Tally ledger accounts.</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-green-600 font-medium">✓ Saved successfully</span>
          )}
          <Button
            onClick={handleSave}
            className="bg-[#4A7FB5] hover:bg-[#3a6a9a] text-white flex items-center gap-2"
          >
            <Save size={16} />
            Save Mappings
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm text-gray-600">{mappings.length} mappings configured</CardTitle>
          <Button
            variant="outline"
            onClick={handleAdd}
            className="flex items-center gap-2 text-[#4A7FB5] border-[#4A7FB5] hover:bg-[#B8D4E8]"
          >
            <Plus size={16} />
            Add Mapping
          </Button>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b">
                <th className="text-left py-2 w-1/3">Vendor Name</th>
                <th className="text-left py-2 w-1/3">Tally Ledger</th>
                <th className="text-left py-2 w-1/4">GSTIN</th>
                <th className="text-left py-2"></th>
              </tr>
            </thead>
            <tbody>
              {mappings.map((mapping, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-2 pr-3">
                    <Input
                      value={mapping.vendor}
                      onChange={(e) => handleChange(index, "vendor", e.target.value)}
                      placeholder="Vendor name"
                    />
                  </td>
                  <td className="py-2 pr-3">
                    <Input
                      value={mapping.ledger}
                      onChange={(e) => handleChange(index, "ledger", e.target.value)}
                      placeholder="Tally ledger name"
                    />
                  </td>
                  <td className="py-2 pr-3">
                    <Input
                      value={mapping.gstin}
                      onChange={(e) => handleChange(index, "gstin", e.target.value)}
                      placeholder="GSTIN"
                    />
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

export default LedgerMappingPage;