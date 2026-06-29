import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

function StatsCard({ title, value, icon: Icon, iconBg, iconColor }: StatsCardProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="flex items-center gap-4 pt-6">
        <div className={`p-3 ${iconBg} rounded-xl`}>
          <Icon size={20} className={iconColor} />
        </div>
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value.toLocaleString()}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;