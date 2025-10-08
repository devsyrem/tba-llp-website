import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              TBA<span className="text-accent">,</span> LLP
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Empowering financial independence through knowledge and intelligent strategy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-services">
                  Digital Wealth Education
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-insurance">
                  Insurance & Legacy Planning
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-academy">
                  Digital Academy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-resources">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <a href="mailto:info@tballp.com" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-email">
                  info@tballp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} TBA, LLP. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/legal" className="text-primary-foreground/60 hover:text-accent transition-colors" data-testid="link-footer-legal">
                Legal & Disclosures
              </Link>
              <Link href="/legal#privacy" className="text-primary-foreground/60 hover:text-accent transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
