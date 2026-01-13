import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SatisfactionBadge from "@/components/mentor/SatisfactionBadge";
import { ArrowLeft, Star, GraduationCap, MapPin, Calendar, Clock, DollarSign } from "lucide-react";

// Mock data
const mentorData = {
  "mentor-1": {
    id: "mentor-1",
    name: "Dara Sok",
    university: "Royal University of Phnom Penh",
    major: "Computer Science",
    yearOfStudy: "4th Year",
    satisfaction: "enjoys" as const,
    rating: 4.9,
    reviewCount: 23,
    bio: "Passionate about AI and machine learning. I love helping students discover the exciting world of tech.",
    fullBio: "Hello! I'm Dara, a 4th year Computer Science student at RUPP. I've been coding since high school and have interned at two local tech startups. My passion lies in artificial intelligence and machine learning, and I'm currently working on my thesis about natural language processing for Khmer language. I chose CS because I love problem-solving and building things that can help people. I'm excited to share my experience with aspiring tech students!",
    academicBackground: [
      "High School: Sisowath High School, Phnom Penh (2019)",
      "Current GPA: 3.8/4.0",
      "Dean's List: 2020, 2021, 2022",
      "Specialization: Artificial Intelligence",
    ],
    reviews: [
      { id: 1, author: "Sophal K.", rating: 5, date: "2024-01-15", text: "Dara was incredibly helpful! He explained everything about the CS major clearly and honestly. Highly recommend!" },
      { id: 2, author: "Mony T.", rating: 5, date: "2024-01-10", text: "Great session! Dara gave me practical advice about what to expect in university and how to prepare." },
      { id: 3, author: "Chenda L.", rating: 4, date: "2023-12-28", text: "Very knowledgeable mentor. Answered all my questions about career paths in tech." },
    ],
  },
};

const MentorProfile = () => {
  const { majorId, mentorId } = useParams();
  const mentor = mentorData[mentorId as keyof typeof mentorData];

  if (!mentor) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Mentor not found</h1>
          <Link to="/majors">
            <Button>Browse all majors</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const initials = mentor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Layout>
      <div className="container py-10">
        <Link to={`/majors/${majorId}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to {mentor.major}
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-start gap-6 flex-wrap">
                {/* Avatar with initials */}
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary text-3xl font-bold shrink-0">
                  {initials}
                </div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl font-bold">{mentor.name}</h1>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{mentor.major} • {mentor.yearOfStudy}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{mentor.university}</span>
                  </div>

                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    <SatisfactionBadge level={mentor.satisfaction} />
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-accent text-accent" />
                      <span className="font-semibold">{mentor.rating.toFixed(1)}</span>
                      <span className="text-muted-foreground">({mentor.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                {mentor.fullBio}
              </p>
            </div>

            {/* Academic Background */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold mb-4">Academic Background</h2>
              <ul className="space-y-3">
                {mentor.academicBackground.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-6">
                {mentor.reviews.map((review) => (
                  <div key={review.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{review.author}</span>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "fill-accent text-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-2xl border-2 border-primary bg-card">
              <h3 className="text-lg font-semibold mb-4">Book a Session</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span><strong className="text-foreground">$5.99</strong> per session</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span><strong className="text-foreground">90 minutes</strong> duration</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Flexible scheduling</span>
                </div>
              </div>

              <Link to={`/booking/${mentorId}`}>
                <Button className="w-full" size="lg">
                  Book Session
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                You will not be charged until you confirm your booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorProfile;
