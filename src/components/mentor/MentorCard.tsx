import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, GraduationCap, MapPin } from "lucide-react";
import SatisfactionBadge from "./SatisfactionBadge";

interface MentorCardProps {
  mentor: {
    id: string;
    name: string;
    university: string;
    major: string;
    yearOfStudy: string;
    satisfaction: "enjoys" | "neutral" | "not-enjoying";
    rating: number;
    reviewCount: number;
    bio: string;
  };
  majorId: string;
}

const MentorCard = ({ mentor, majorId }: MentorCardProps) => {
  // Generate initials from name
  const initials = mentor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Avatar placeholder with initials (no photo per requirements) */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary text-xl font-bold shrink-0">
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="text-lg font-semibold">{mentor.name}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <GraduationCap className="h-4 w-4" />
                <span>{mentor.major}</span>
                <span className="mx-1">•</span>
                <span>{mentor.yearOfStudy}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-semibold">{mentor.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({mentor.reviewCount})</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
            <MapPin className="h-4 w-4" />
            <span>{mentor.university}</span>
          </div>

          <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
            {mentor.bio}
          </p>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <SatisfactionBadge level={mentor.satisfaction} showLabel={false} />
            <Link to={`/majors/${majorId}/mentors/${mentor.id}`}>
              <Button size="sm">View Profile</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
