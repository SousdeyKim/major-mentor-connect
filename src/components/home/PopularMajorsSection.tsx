import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase, Stethoscope, Scale, Palette, Calculator } from "lucide-react";

const majors = [
  {
    id: "computer-science",
    icon: Code,
    name: "Computer Science",
    description: "Software development, AI, and technology innovation",
    mentors: 45,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "business-administration",
    icon: Briefcase,
    name: "Business Administration",
    description: "Management, entrepreneurship, and business strategy",
    mentors: 38,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    id: "medicine",
    icon: Stethoscope,
    name: "Medicine",
    description: "Healthcare, medical practice, and patient care",
    mentors: 28,
    color: "bg-red-500/10 text-red-600",
  },
  {
    id: "law",
    icon: Scale,
    name: "Law",
    description: "Legal studies, advocacy, and justice system",
    mentors: 22,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    id: "design",
    icon: Palette,
    name: "Design",
    description: "Visual arts, UX/UI, and creative direction",
    mentors: 31,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    id: "engineering",
    icon: Calculator,
    name: "Engineering",
    description: "Civil, mechanical, and electrical engineering",
    mentors: 35,
    color: "bg-teal-500/10 text-teal-600",
  },
];

const PopularMajorsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Popular Majors
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the most sought-after fields of study
            </p>
          </div>
          <Link to="/majors">
            <Button variant="outline">
              View All Majors
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {majors.map((major) => (
            <Link
              key={major.id}
              to={`/majors/${major.id}`}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${major.color} mb-4 group-hover:scale-110 transition-transform`}>
                <major.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {major.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {major.description}
              </p>
              <p className="text-sm font-medium text-primary">
                {major.mentors} mentors available
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMajorsSection;
