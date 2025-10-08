import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/academy", label: "Digital Academy" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary">
              TBA<span className="text-accent">,</span> LLP
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                {item.label}
                {location === item.path && (
                  <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/academy">
              <Button variant="outline" size="default" data-testid="button-enroll-nav">
                Enroll Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover-elevate active-elevate-2" size="default" data-testid="button-consultation-nav">
                Book Consultation
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium px-2 py-1 ${
                    location === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Link href="/academy" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full" data-testid="button-enroll-mobile">
                    Enroll Now
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-accent text-accent-foreground hover-elevate active-elevate-2 w-full" data-testid="button-consultation-mobile">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
