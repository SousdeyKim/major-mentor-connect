import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SessionTracker from "@/components/booking/SessionTracker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CreditCard,
  Check,
  Shield,
} from "lucide-react";

type BookingStep = "date" | "time" | "payment" | "confirmation";

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "07:00 PM",
];

const Booking = () => {
  const { mentorId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<BookingStep>("date");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mentors array
  const mentors = [
    {
      id: "mentor-1",
      name: "Dara Sok",
      major: "Computer Science",
      university: "Royal University of Phnom Penh",
    },
    {
      id: "mentor-2",
      name: "Sokha Chan",
      major: "Computer Science",
      university: "Institute of Technology of Cambodia",
    },
    {
      id: "mentor-3",
      name: "Visal Meng",
      major: "Computer Science",
      university: "Norton University",
    },
  ];

  // Select the mentor based on mentorId
  const mentor = mentors.find((m) => m.id === mentorId);

  if (!mentor) {
    // Handle invalid mentorId
    return (
      <Layout>
        <div className="container py-10 text-center">
          <p className="text-lg font-medium">Mentor not found.</p>
          <Link
            to="/majors"
            className="text-blue-500 underline mt-4 inline-block"
          >
            Back to Majors
          </Link>
        </div>
      </Layout>
    );
  }

  // Compute initials for avatar
  const initials = mentor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("confirmation");
    }, 2000);
  };

  const getCurrentTrackerStatus = () => {
    switch (step) {
      case "date":
      case "time":
        return "mentor-selected" as const;
      case "payment":
        return "session-booked" as const;
      case "confirmation":
        return "payment-confirmed" as const;
      default:
        return "mentor-selected" as const;
    }
  };

  return (
    <Layout>
      <div className="container py-10">
        <Link
          to={`/majors/computer-science/mentors/${mentorId}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Profile
        </Link>

        {/* Session Tracker */}
        <div className="mb-10">
          <SessionTracker currentStatus={getCurrentTrackerStatus()} />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Mentor Summary */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-muted mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
              {initials}
            </div>
            <div>
              <p className="font-semibold">{mentor.name}</p>
              <p className="text-sm text-muted-foreground">
                {mentor.major} • {mentor.university}
              </p>
            </div>
          </div>

          {/* Step: Select Date */}
          {step === "date" && (
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold mb-6">Select a Date</h2>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border"
                />
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  onClick={() => setStep("time")}
                  disabled={!selectedDate}
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step: Select Time */}
          {step === "time" && (
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold mb-2">Select a Time</h2>
              <p className="text-muted-foreground mb-6">
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                      selectedTime === time
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Clock className="h-4 w-4 inline mr-2" />
                    {time}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => setStep("date")}>
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={() => setStep("payment")}
                  disabled={!selectedTime}
                >
                  Continue to Payment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step: Payment */}
          {step === "payment" && (
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold mb-6">Payment Details</h2>

              {/* Order Summary */}
              <div className="p-4 rounded-xl bg-muted mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">
                    Mentorship Session (90 min)
                  </span>
                  <span>$5.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Date</span>
                  <span>{selectedDate?.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Time</span>
                  <span>{selectedTime}</span>
                </div>
                <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$5.99</span>
                </div>
              </div>

              {/* Payment Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="mt-1" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Your payment information is encrypted and secure</span>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => setStep("time")}>
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handlePayment} disabled={isProcessing}>
                  {isProcessing ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4" />
                      Pay $5.99
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Step: Confirmation */}
          {step === "confirmation" && (
            <div className="p-8 rounded-2xl border border-border bg-card text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mx-auto mb-6">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-6">
                Your mentorship session with {mentor.name} has been scheduled.
              </p>

              <div className="p-4 rounded-xl bg-muted text-left mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">
                      {selectedDate?.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium">{selectedTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">90 minutes</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Amount Paid</p>
                    <p className="font-medium">$5.99</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                You'll receive a confirmation email with the video session link.
              </p>

              <div className="flex gap-4 justify-center">
                <Link to="/dashboard">
                  <Button>Go to Dashboard</Button>
                </Link>
                <Link to="">
                  <Button variant="outline">Chat with Mentor</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
