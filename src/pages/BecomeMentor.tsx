import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Users, Heart, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Money",
    description: "Get paid for sharing your knowledge and experience with aspiring students.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Set your own availability and mentor when it works for you.",
  },
  {
    icon: Users,
    title: "Build Your Network",
    description: "Connect with motivated students and fellow mentors in your field.",
  },
  {
    icon: Heart,
    title: "Make an Impact",
    description: "Help students make informed decisions about their academic future.",
  },
];

const requirements = [
  "Currently enrolled in or graduated from a recognized university",
  "At least one year of experience in your major",
  "Passion for helping others and good communication skills",
  "Ability to conduct video sessions professionally",
  "Honest and transparent about your experience with your major",
];

const BecomeMentor = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-hero py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <GraduationCap className="h-4 w-4" />
              <span>Join Our Mentor Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Share Your Experience,
              <span className="block text-gradient">Shape Future Students</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Become a MajorConnect mentor and help high school students discover their passion while earning money on your own schedule.
            </p>
            <Link to="/register?role=mentor">
              <Button variant="hero" size="xl">
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Become a Mentor?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-border bg-card text-center hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-4">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Mentoring Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Create Your Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Share your academic background, experience, and honest satisfaction level with your major.
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Get Verified</h3>
                <p className="text-sm text-muted-foreground">
                  Our team verifies your university enrollment and major to ensure quality for students.
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Start Mentoring</h3>
                <p className="text-sm text-muted-foreground">
                  Accept bookings, conduct sessions, and earn money while helping students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Requirements</h2>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h3 className="font-semibold mb-2">💡 Honesty is Key</h3>
              <p className="text-sm text-muted-foreground">
                We encourage mentors to share their genuine experience, including challenges. Your honest perspective helps students make better decisions, even if you're neutral about or don't enjoy your major.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join our growing community of mentors and help shape the future of education in Cambodia.
          </p>
          <Link to="/register?role=mentor">
            <Button variant="accent" size="xl">
              Apply to Become a Mentor
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BecomeMentor;
