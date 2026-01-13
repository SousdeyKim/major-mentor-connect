import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span>1-on-1 Mentorship Sessions</span>
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Find Your Perfect
            <span className="block text-gradient">University Major</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-slide-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10" style={{ animationDelay: "0.1s" }}>
            Connect with real university students who've been in your shoes. Get honest insights about majors, career paths, and campus life through personalized mentorship sessions.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.2s" }}>
            <Link to="/majors">
              <Button variant="hero" size="xl">
                Explore Majors
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="hero-outline" size="xl">
                How It Works
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Active Mentors</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-2">
                <BookOpen className="h-6 w-6" />
              </div>
              <p className="text-2xl font-bold text-foreground">120+</p>
              <p className="text-sm text-muted-foreground">Majors Covered</p>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success mb-2">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="text-2xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
