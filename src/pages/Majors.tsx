import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Code, Briefcase, Stethoscope, Scale, Palette, Calculator, BookOpen, Music, FlaskConical, Building2, Leaf, Globe, Camera, Cpu, Heart } from "lucide-react";

const allMajors = [
  { id: "computer-science", icon: Code, name: "Computer Science", category: "Technology", mentors: 45, description: "Software development, AI, and technology innovation" },
  { id: "business-administration", icon: Briefcase, name: "Business Administration", category: "Business", mentors: 38, description: "Management, entrepreneurship, and business strategy" },
  { id: "medicine", icon: Stethoscope, name: "Medicine", category: "Health Sciences", mentors: 28, description: "Healthcare, medical practice, and patient care" },
  { id: "law", icon: Scale, name: "Law", category: "Social Sciences", mentors: 22, description: "Legal studies, advocacy, and justice system" },
  { id: "design", icon: Palette, name: "Design", category: "Arts", mentors: 31, description: "Visual arts, UX/UI, and creative direction" },
  { id: "engineering", icon: Calculator, name: "Engineering", category: "Engineering", mentors: 35, description: "Civil, mechanical, and electrical engineering" },
  { id: "education", icon: BookOpen, name: "Education", category: "Education", mentors: 19, description: "Teaching, curriculum development, and pedagogy" },
  { id: "music", icon: Music, name: "Music", category: "Arts", mentors: 14, description: "Performance, composition, and music theory" },
  { id: "chemistry", icon: FlaskConical, name: "Chemistry", category: "Sciences", mentors: 16, description: "Chemical research, pharmaceuticals, and materials" },
  { id: "architecture", icon: Building2, name: "Architecture", category: "Engineering", mentors: 18, description: "Building design, urban planning, and sustainability" },
  { id: "environmental-science", icon: Leaf, name: "Environmental Science", category: "Sciences", mentors: 12, description: "Climate, conservation, and environmental policy" },
  { id: "international-relations", icon: Globe, name: "International Relations", category: "Social Sciences", mentors: 15, description: "Diplomacy, global politics, and foreign affairs" },
  { id: "film-media", icon: Camera, name: "Film & Media", category: "Arts", mentors: 11, description: "Filmmaking, broadcasting, and digital media" },
  { id: "data-science", icon: Cpu, name: "Data Science", category: "Technology", mentors: 27, description: "Analytics, machine learning, and big data" },
  { id: "psychology", icon: Heart, name: "Psychology", category: "Health Sciences", mentors: 24, description: "Mental health, behavior, and cognitive science" },
];

const categories = ["All", "Technology", "Business", "Health Sciences", "Social Sciences", "Arts", "Engineering", "Sciences", "Education"];

const Majors = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMajors = allMajors.filter((major) => {
    const matchesSearch = major.name.toLowerCase().includes(search.toLowerCase()) ||
      major.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || major.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gradient-hero py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore <span className="text-gradient">University Majors</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find your passion and connect with mentors who can guide you
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for a major..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-14 text-lg rounded-2xl border-2 focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-12">
        <p className="text-muted-foreground mb-6">
          Showing {filteredMajors.length} majors
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredMajors.map((major) => (
            <Link
              key={major.id}
              to={`/majors/${major.id}`}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <major.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {major.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors">
                    {major.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {major.description}
                  </p>
                  <p className="text-sm font-medium text-primary mt-3">
                    {major.mentors} mentors available
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredMajors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No majors found matching your search.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Majors;
