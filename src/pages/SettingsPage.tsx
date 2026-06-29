import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";

function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const [general, setGeneral] = useState({
    companyName: "Invoice2Tally Pvt Ltd",
    email: "admin@invoice2tally.com",
    gstin: "27AABCI1681G1ZK",
  });

  const [tally, setTally] = useState({
    host: "localhost",
    port: "9000",
    company: "My Company",
  });

  const [ocr, setOcr] = useState({
    confidence: "80",
    autoSend: false,
    autoReview: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-sm text-gray-400">Configure your Invoice2Tally preferences.</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-green-600 font-medium">✓ Settings saved</span>
          )}
          <Button
            onClick={handleSave}
            className="bg-[#4A7FB5] hover:bg-[#3a6a9a] text-white flex items-center gap-2"
          >
            <Save size={16} />
            Save Settings
          </Button>
        </div>
      </div>

      {/* General Settings */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm text-gray-600">General</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <Label>Company Name</Label>
            <Input
              value={general.companyName}
              onChange={(e) => setGeneral({ ...general, companyName: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Email</Label>
            <Input
              value={general.email}
              onChange={(e) => setGeneral({ ...general, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>GSTIN</Label>
            <Input
              value={general.gstin}
              onChange={(e) => setGeneral({ ...general, gstin: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tally Settings */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm text-gray-600">Tally Configuration</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <Label>Tally Host</Label>
            <Input
              value={tally.host}
              onChange={(e) => setTally({ ...tally, host: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Port</Label>
            <Input
              value={tally.port}
              onChange={(e) => setTally({ ...tally, port: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Company Name in Tally</Label>
            <Input
              value={tally.company}
              onChange={(e) => setTally({ ...tally, company: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      {/* OCR Settings */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm text-gray-600">OCR & AI Settings</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 max-w-xs">
            <Label>Minimum Confidence Threshold (%)</Label>
            <Input
              type="number"
              min="0"
              max="100"
              value={ocr.confidence}
              onChange={(e) => setOcr({ ...ocr, confidence: e.target.value })}
            />
            <p className="text-xs text-gray-400">Invoices below this threshold will require manual review.</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="autoSend"
                checked={ocr.autoSend}
                onChange={(e) => setOcr({ ...ocr, autoSend: e.target.checked })}
                className="w-4 h-4 accent-[#4A7FB5]"
              />
              <Label htmlFor="autoSend" className="cursor-pointer">
                Auto-send to Tally after processing
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="autoReview"
                checked={ocr.autoReview}
                onChange={(e) => setOcr({ ...ocr, autoReview: e.target.checked })}
                className="w-4 h-4 accent-[#4A7FB5]"
              />
              <Label htmlFor="autoReview" className="cursor-pointer">
                Auto-open review for low confidence invoices
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Keyboard Shortcuts */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm text-gray-600">Keyboard Shortcuts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {[
              { keys: "Ctrl + U", action: "Upload Invoice" },
              { keys: "Ctrl + S", action: "Save" },
              { keys: "Ctrl + Enter", action: "Send to Tally" },
              { keys: "Ctrl + H", action: "History" },
              { keys: "Ctrl + F", action: "Search" },
              { keys: "Ctrl + ,", action: "Settings" },
            ].map((shortcut) => (
              <div key={shortcut.keys} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">{shortcut.action}</span>
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-500 shadow-sm">
                  {shortcut.keys}
                </kbd>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SettingsPage;