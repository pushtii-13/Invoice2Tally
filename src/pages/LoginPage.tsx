import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

const login = useAuthStore((state) => state.login);

const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  login(email);
  navigate("/dashboard");
};

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#F5F7FA]">
      <div className="w-full max-w-md px-4">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4A7FB5] mb-4 shadow-md">
            <span className="text-white text-xl font-bold">I2T</span>
          </div>
          <h1 className="text-2xl font-bold text-[#4A7FB5]">Invoice2Tally</h1>
          <p className="text-sm text-gray-400">AI Powered Invoice Processing</p>
        </div>

        {/* Card */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl text-center text-gray-700">Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 accent-[#4A7FB5]"
                />
                <Label htmlFor="remember" className="text-sm text-gray-500 cursor-pointer">
                  Remember me
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#4A7FB5] hover:bg-[#3a6a9a] text-white mt-2"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;