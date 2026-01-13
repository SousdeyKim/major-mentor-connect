import { cn } from "@/lib/utils";
import { Smile, Meh, Frown } from "lucide-react";

type SatisfactionLevel = "enjoys" | "neutral" | "not-enjoying";

interface SatisfactionBadgeProps {
  level: SatisfactionLevel;
  className?: string;
  showLabel?: boolean;
}

const satisfactionConfig = {
  enjoys: {
    icon: Smile,
    label: "Enjoys the major",
    className: "bg-success/10 text-success border-success/20",
  },
  neutral: {
    icon: Meh,
    label: "Neutral about the major",
    className: "bg-warning/10 text-warning border-warning/20",
  },
  "not-enjoying": {
    icon: Frown,
    label: "Does not enjoy the major",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

const SatisfactionBadge = ({ level, className, showLabel = true }: SatisfactionBadgeProps) => {
  const config = satisfactionConfig[level];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium",
        config.className,
        className
      )}
    >
      <Icon className="h-4 w-4" />
      {showLabel && <span>{config.label}</span>}
    </div>
  );
};

export default SatisfactionBadge;
