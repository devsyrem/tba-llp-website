import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Shield, TrendingUp, Globe2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Digital Wealth Education",
      subtitle: "Our Foundation Service",
      description: "A structured, tiered education platform that teaches you the principles of investing, planning, and financial psychology.",
      features: [
        "Understand markets and risk",
        "Simulate portfolios",
        "Learn how to structure wealth for efficiency",
        "Gain confidence before you invest"
      ],
      cta: "Explore Academy",
      link: "/academy"
    },
    {
      icon: Shield,
      title: "Insurance & Legacy Planning",
      subtitle: "Protect What Matters Most",
      description: "Through partnerships with top-rated carriers like North American, Allianz, National Life Group, and Mutual of Omaha, we design insurance-based strategies that secure long-term growth and intergenerational stability.",
      features: [
        "Indexed Universal Life (IULs)",
        "Annuities & lifetime income plans",
        "Asset protection frameworks",
        "Tax-advantaged wealth transfer"
      ],
      cta: "Learn More",
      link: "/contact"
    },
    {
      icon: TrendingUp,
      title: "Advisory Services",
      subtitle: "Post-Series 65 Registration",
      description: "Once licensed under the Registered Investment Adviser framework, TBA, LLP will provide fiduciary investment management services.",
      features: [
        "Personalized portfolio construction",
        "Risk-aligned investment strategies",
        "Ongoing fiduciary oversight",
        "Retirement income optimization"
      ],
      badge: "Coming Soon",
      cta: "Get Notified",
      link: "/contact"
    },
    {
      icon: Globe2,
      title: "Cross-Border Wealth",
      subtitle: "Future Offering",
      description: "With expansion planned into London, TBA, LLP will soon assist global clients navigating U.S.–U.K. wealth considerations.",
      features: [
        "Cross-border taxation and compliance",
        "Currency and portfolio diversification",
        "Estate planning across jurisdictions"
      ],
      badge: "Future",
      cta: "Express Interest",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Services - TBA, LLP | Comprehensive Wealth Strategy & Education"
        description="Digital wealth education, insurance & legacy planning, advisory services, and cross-border wealth solutions. TBA, LLP bridges the gap between education and execution."
        keywords="wealth education, insurance planning, IUL, annuities, investment advisory, cross-border wealth"
        pathname="/services"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-services-headline">
            Comprehensive Wealth, Simplified.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            At TBA, LLP, we bridge the gap between education and execution — helping clients make smart, informed choices at every stage of their financial journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover-elevate transition-all duration-300 ${index % 2 === 0 ? '' : 'bg-card'}`} data-testid={`card-service-${index}`}>
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {service.badge}
                    </span>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                  <div>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-accent mb-2">{service.subtitle}</div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">{service.title}</h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link href={service.link}>
                      <Button className="bg-accent text-accent-foreground hover-elevate active-elevate-2" data-testid={`button-service-${index}`}>
                        {service.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6" data-testid="text-cta-heading">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Schedule a consultation to discuss which services align with your financial goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover-elevate active-elevate-2" data-testid="button-cta-consultation">
              Book Your Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
