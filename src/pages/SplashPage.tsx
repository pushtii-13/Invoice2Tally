import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#F5F7FA]">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#4A7FB5] mb-6 shadow-lg">
        <span className="text-white text-3xl font-bold">I2T</span>
      </div>
      <h1 className="text-3xl font-bold text-[#4A7FB5] mb-2">Invoice2Tally</h1>
      <p className="text-sm text-gray-400 mb-8">AI Powered Invoice Processing</p>
      <div className="flex gap-2">
        <span className="w-2 h-2 rounded-full bg-[#4A7FB5] animate-bounce [animation-delay:0ms]"></span>
        <span className="w-2 h-2 rounded-full bg-[#4A7FB5] animate-bounce [animation-delay:150ms]"></span>
        <span className="w-2 h-2 rounded-full bg-[#4A7FB5] animate-bounce [animation-delay:300ms]"></span>
      </div>
      <p className="text-xs text-gray-300 absolute bottom-8">v1.0.0</p>
    </div>
  );
}

export default SplashPage;