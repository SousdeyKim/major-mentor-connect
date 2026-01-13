import { Search, UserCheck, Calendar, Video, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Majors",
    description: "Explore our comprehensive list of university majors and find the ones that interest you.",
  },
  {
    icon: UserCheck,
    title: "Choose a Mentor",
    description: "View mentor profiles with their satisfaction levels, reviews, and academic background.",
  },
  {
    icon: Calendar,
    title: "Book a Session",
    description: "Select a convenient time and complete your booking for just $5.99 per 90-minute session.",
  },
  {
    icon: Video,
    title: "Connect & Learn",
    description: "Join your video session and get real insights about the major from someone who's living it.",
  },
  {
    icon: Star,
    title: "Leave Feedback",
    description: "Help future students by sharing your experience and rating your mentor.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Five simple steps to get the guidance you need for your academic journey.
          </p>
        </div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                {/* Step number with icon */}
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
