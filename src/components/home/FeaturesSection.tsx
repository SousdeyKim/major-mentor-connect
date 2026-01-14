import {
  Shield,
  Share2,
  Video,
  Star,
  Clock,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Mentors",
    description:
      "All mentors are verified students from accredited universities studying your major of interest.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "All communications happen within our platform. No personal contact details are shared.",
  },
  {
    icon: Share2,
    title: "External Connection (Post-Session)",
    description:
      "Following session completion, mentors may optionally choose to share their social media or professional contact links with mentees for continued informal learning and networking.",
  },
  {
    icon: Video,
    title: "Video Discussions",
    description:
      "Engage in face-to-face video sessions for a more personal and interactive experience.",
  },
  {
    icon: Star,
    title: "Honest Reviews",
    description:
      "Read authentic reviews from other students to find the perfect mentor for you.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book sessions at times that work for you. 90-minute sessions designed for in-depth discussions.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">MajorConnect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to make an informed decision about your academic
            future.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
