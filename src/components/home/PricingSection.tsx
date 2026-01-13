import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Clock, Video, MessageSquare } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            One affordable price for quality mentorship sessions
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative p-8 rounded-3xl border-2 border-primary bg-card shadow-xl shadow-primary/10">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                Per Session
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pt-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold text-foreground">$5.99</span>
              </div>
              <p className="text-muted-foreground mt-2">per mentorship session</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-foreground">90-minute session duration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Video className="h-4 w-4" />
                </div>
                <span className="text-foreground">1-on-1 video discussion</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span className="text-foreground">Pre-session messaging</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-foreground">Verified university mentors</span>
              </div>
            </div>

            {/* CTA */}
            <Link to="/majors">
              <Button className="w-full" size="lg">
                Find a Mentor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
