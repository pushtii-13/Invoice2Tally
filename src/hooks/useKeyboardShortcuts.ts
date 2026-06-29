import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useKeyboardShortcuts() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("Key pressed:", e.key, "Meta:", e.metaKey, "Ctrl:", e.ctrlKey);
      
      const ctrl = e.metaKey || e.ctrlKey;

      if (ctrl) {
        switch (e.key.toLowerCase()) {
          case "u":
            e.preventDefault();
            navigate("/upload");
            toast.info("Upload page opened.");
            break;
          case "h":
            e.preventDefault();
            navigate("/history");
            toast.info("History page opened.");
            break;
          case ",":
            e.preventDefault();
            navigate("/settings");
            toast.info("Settings page opened.");
            break;
          case "f":
            e.preventDefault();
            toast.info("Use the search bar to filter.");
            break;
          case "s":
            e.preventDefault();
            toast.success("Saved successfully.");
            break;
          case "enter":
            e.preventDefault();
            toast.success("Sending to Tally...");
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);
}