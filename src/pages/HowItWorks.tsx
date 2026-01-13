import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, UserCheck, Calendar, CreditCard, Video, Star, ArrowRight, Shield, MessageSquare, Clock } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Browse & Search Majors",
    description: "Explore our comprehensive database of university majors. Read overviews, understand common misconceptions, and discover potential career paths for each field of study.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Choose Your Mentor",
    description: "View detailed mentor profiles including their university, year of study, satisfaction level, and reviews from other students. Find someone who matches your interests and learning style.",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Book a Session",
    description: "Select a convenient date and time for your 90-minute session. Our flexible scheduling system works around your availability.",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Secure Payment",
    description: "Complete your booking with our secure payment system. Each session costs just $5.99, with transparent pricing and no hidden fees.",
  },
  {
    icon: Video,
    number: "05",
    title: "Join Your Session",
    description: "Connect with your mentor via our built-in video platform. Have an in-depth conversation about the major, campus life, career prospects, and anything else on your mind.",
  },
  {
    icon: Star,
    number: "06",
    title: "Share Your Experience",
    description: "After your session, leave feedback and a rating to help future students find the right mentors. Your review makes a difference!",
  },
];

const features = [
  {
    icon: Shield,
    title: "Safe & Secure Platform",
    description: "All communications happen within MajorConnect. We never share personal contact details between users.",
  },
  {
    icon: MessageSquare,
    title: "Pre-Session Messaging",
    description: "Chat with your mentor before the session to share questions and set expectations for your discussion.",
  },
  {
    icon: Clock,
    title: "Session Completion Tracking",
    description: "After scheduled sessions, confirm completion. If no response within 3 days, sessions are automatically marked complete.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-hero py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">MajorConnect</span> Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance from university students in 6 simple steps
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-12 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex gap-6 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Find your perfect mentor and start your journey to discovering your ideal university major.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/majors">
              <Button size="lg">
                Explore Majors
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
