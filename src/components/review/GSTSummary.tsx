interface GSTSummaryProps {
  subtotal: number;
  gst: number;
  total: number;
}

function GSTSummary({ subtotal, gst, total }: GSTSummaryProps) {
  return (
    <div className="flex flex-col gap-2 w-64 ml-auto">
      <div className="flex justify-between text-sm text-gray-500">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>GST (18%)</span>
        <span>₹{gst.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-sm font-bold text-gray-800 border-t pt-2">
        <span>Total</span>
        <span>₹{total.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default GSTSummary;