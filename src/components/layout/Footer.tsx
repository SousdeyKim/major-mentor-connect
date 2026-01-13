import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Major<span className="text-primary">Connect</span>
              </span>
            </Link>
            <p className="text-sm text-background/70 max-w-xs">
              Connecting high school students with university mentors to explore majors and make informed decisions about their future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/majors" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Explore Majors
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-background/70 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/become-mentor" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-sm text-background/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                <span>support@majorconnect.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4" />
                <span>+855 12 345 678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} MajorConnect. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-background/50">
              Made with ❤️ in Cambodia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
