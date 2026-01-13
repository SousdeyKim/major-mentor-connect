import { cn } from "@/lib/utils";
import { Check, UserCheck, Calendar, CreditCard, Video, CheckCircle, MessageSquare } from "lucide-react";

type SessionStatus = 
  | "mentor-selected" 
  | "session-booked" 
  | "payment-confirmed" 
  | "in-progress" 
  | "completed" 
  | "feedback-submitted";

interface SessionTrackerProps {
  currentStatus: SessionStatus;
  className?: string;
}

const steps = [
  { id: "mentor-selected", label: "Mentor Selected", icon: UserCheck },
  { id: "session-booked", label: "Session Booked", icon: Calendar },
  { id: "payment-confirmed", label: "Payment Confirmed", icon: CreditCard },
  { id: "in-progress", label: "Session In Progress", icon: Video },
  { id: "completed", label: "Session Completed", icon: CheckCircle },
  { id: "feedback-submitted", label: "Feedback Submitted", icon: MessageSquare },
];

const statusOrder: SessionStatus[] = [
  "mentor-selected",
  "session-booked",
  "payment-confirmed",
  "in-progress",
  "completed",
  "feedback-submitted",
];

const SessionTracker = ({ currentStatus, className }: SessionTrackerProps) => {
  const currentIndex = statusOrder.indexOf(currentStatus);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const Icon = step.icon;

          return (
            <div key={step.id} className="relative flex flex-col items-center">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 z-10",
                  isCompleted && "bg-primary border-primary text-primary-foreground",
                  isCurrent && "bg-primary/10 border-primary text-primary animate-pulse",
                  !isCompleted && !isCurrent && "bg-background border-muted text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium text-center max-w-[80px] hidden sm:block",
                  (isCompleted || isCurrent) && "text-foreground",
                  !isCompleted && !isCurrent && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile current step label */}
      <div className="sm:hidden mt-4 text-center">
        <span className="text-sm font-medium text-primary">
          {steps[currentIndex].label}
        </span>
      </div>
    </div>
  );
};

export default SessionTracker;
