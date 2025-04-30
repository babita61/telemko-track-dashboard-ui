
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: LucideIcon;
  iconColor?: string;
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  icon: Icon,
  iconColor,
  className
}) => {
  return (
    <Card className={cn("metric-card", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <div className="mt-1 flex items-baseline">
              <p className="text-2xl font-semibold">{value}</p>
              {subtitle && (
                <p className="ml-1 text-sm text-gray-500">{subtitle}</p>
              )}
            </div>
            {trend && (
              <div className="mt-1">
                <span className={cn(
                  "text-xs font-medium inline-flex items-center",
                  trend.isPositive ? "text-green-600" : "text-red-600"
                )}>
                  {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                </span>
                <span className="text-xs text-gray-500 ml-1">vs. last week</span>
              </div>
            )}
          </div>
          {Icon && (
            <div className={cn(
              "p-2 rounded-lg",
              iconColor ? iconColor : "bg-primary/10"
            )}>
              <Icon className={cn(
                "h-6 w-6",
                iconColor ? "text-white" : "text-primary"
              )} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
