import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MentorCard from "@/components/mentor/MentorCard";
import {
  ArrowLeft,
  Code,
  Users,
  Briefcase,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

// Mock data - in production this would come from the API
const majorData = {
  "computer-science": {
    id: "computer-science",
    name: "Computer Science",
    icon: Code,
    category: "Technology",
    description:
      "Computer Science is the study of computation, information processing, and the design of computer systems. It encompasses both theoretical foundations and practical applications, preparing students for careers in software development, data science, artificial intelligence, and more.",
    overview: [
      "Learn programming languages like Python, Java, and C++",
      "Study algorithms, data structures, and computational theory",
      "Explore areas like AI, machine learning, cybersecurity, and web development",
      "Develop problem-solving and analytical thinking skills",
      "Work on hands-on projects and collaborative coding",
    ],
    misconceptions: [
      {
        myth: "You need to be good at math",
        reality:
          "While math is helpful, many CS careers focus more on logic and problem-solving than advanced mathematics.",
      },
      {
        myth: "It's just about coding",
        reality:
          "CS includes system design, user experience, project management, and understanding how technology impacts society.",
      },
      {
        myth: "You need prior programming experience",
        reality:
          "Many successful CS students start with no coding background. Universities teach from fundamentals.",
      },
      {
        myth: "It's only for introverts",
        reality:
          "Modern tech work is highly collaborative. Communication and teamwork are essential skills.",
      },
    ],
    careers: [
      {
        title: "Software Engineer",
        salary: "$80,000 - $150,000",
        growth: "High",
      },
      {
        title: "Data Scientist",
        salary: "$90,000 - $160,000",
        growth: "Very High",
      },
      {
        title: "Product Manager",
        salary: "$100,000 - $180,000",
        growth: "High",
      },
      {
        title: "Cybersecurity Analyst",
        salary: "$75,000 - $130,000",
        growth: "Very High",
      },
      { title: "UX Designer", salary: "$70,000 - $120,000", growth: "High" },
    ],
    mentors: [
      {
        id: "mentor-1",
        name: "Dara Sok",
        university: "Royal University of Phnom Penh",
        major: "Computer Science",
        yearOfStudy: "4th Year",
        satisfaction: "enjoys" as const,
        rating: 4.9,
        reviewCount: 23,
        bio: "Passionate about AI and machine learning. I love helping students discover the exciting world of tech.",
      },
      {
        id: "mentor-2",
        name: "Sokha Chan",
        university: "Institute of Technology of Cambodia",
        major: "Computer Science",
        yearOfStudy: "3rd Year",
        satisfaction: "enjoys" as const,
        rating: 4.8,
        reviewCount: 15,
        bio: "Full-stack developer focused on web technologies. Happy to share my journey from complete beginner to confident coder.",
      },
      {
        id: "mentor-3",
        name: "Visal Meng",
        university: "Norton University",
        major: "Computer Science",
        yearOfStudy: "Graduate",
        satisfaction: "neutral" as const,
        rating: 4.6,
        reviewCount: 8,
        bio: "Working as a software engineer while completing my studies. Can provide real-world industry insights.",
      },
    ],
  },
};

const MajorDetail = () => {
  const { majorId } = useParams();
  const major = majorData[majorId as keyof typeof majorData];

  if (!major) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {" "}
            No mentors available yet. Please check back later!
          </h1>
          <Link to="/majors">
            <Button>Browse other majors</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = major.icon;

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-hero py-12">
        <div className="container">
          <Link
            to="/majors"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Majors
          </Link>

          <div className="flex items-start gap-6">
            <div className="hidden sm:flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-10 w-10" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {major.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-3">
                {major.name}
              </h1>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                {major.description}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">
                  {major.mentors.length} mentors available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="container py-10">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="misconceptions">Misconceptions</TabsTrigger>
            <TabsTrigger value="careers">Career Paths</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
              <ul className="space-y-3">
                {major.overview.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="misconceptions" className="space-y-4">
            {major.misconceptions.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Myth: "{item.myth}"
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground ml-8">
                  <span className="font-medium text-success">Reality:</span>{" "}
                  {item.reality}
                </p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="careers" className="space-y-4">
            {major.careers.map((career, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card flex items-center justify-between flex-wrap gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{career.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {career.salary}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium text-success">
                    {career.growth} demand
                  </span>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Mentors Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Available Mentors</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {major.mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} majorId={major.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MajorDetail;
