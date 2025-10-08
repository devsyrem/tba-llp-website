import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Shield, TrendingUp, Users, BookOpen, Award, ArrowRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

export default function Home() {
  const values = [
    {
      icon: BookOpen,
      title: "Education",
      description: "Financial clarity before financial action"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Doing what's right, even when it's not easy"
    },
    {
      icon: CheckCircle,
      title: "Transparency",
      description: "Every strategy explained. Every decision understood"
    },
    {
      icon: Award,
      title: "Legacy",
      description: "Building beyond today — for generations to come"
    }
  ];

  const services = [
    {
      icon: GraduationCap,
      title: "Digital Wealth Education",
      description: "Structured, tiered education platform teaching investment principles, planning, and financial psychology",
      link: "/academy"
    },
    {
      icon: Shield,
      title: "Insurance & Legacy Planning",
      description: "Protect what matters most with IULs, annuities, and tax-advantaged wealth transfer strategies",
      link: "/services"
    },
    {
      icon: TrendingUp,
      title: "Advisory Services",
      description: "Fiduciary investment management with personalized portfolio construction and ongoing oversight",
      link: "/services",
      badge: "Coming Soon"
    }
  ];

  const tiers = [
    {
      name: "Foundations",
      price: "$1,250",
      description: "Core digital wealth fundamentals",
      features: ["Planning & budgeting frameworks", "Lifetime access to starter tools", "Self-paced learning"]
    },
    {
      name: "Momentum",
      price: "$1,850",
      description: "Build on the basics",
      features: ["Everything in Foundations", "Portfolio simulation access", "1 personalized strategy session"]
    },
    {
      name: "Growth",
      price: "$2,450",
      description: "Advanced market training",
      features: ["Everything in Momentum", "Weekly insights & applications", "Guided wealth-building modules"]
    },
    {
      name: "Legacy Circle",
      price: "$3,050",
      description: "Premium membership",
      features: ["Everything in Growth", "Quarterly one-on-one reviews", "Priority advisory transition"],
      featured: true
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="TBA, LLP - Your Future Guided by Purpose | Financial Education & Wealth Strategy"
        description="Empowering financial independence through knowledge. TBA, LLP combines modern investment education, evidence-based strategy, and legacy-focused planning to help you create, protect, and preserve wealth."
        keywords="wealth education, financial independence, IUL, annuity planning, fiduciary education, investment literacy, RIA advisor Mississippi"
        pathname="/"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-headline">
              Your Future. Guided by Purpose. <span className="text-accent">Built with Understanding.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-subhead">
              Where financial education meets intelligent strategy. TBA, LLP empowers individuals and families to create, protect, and preserve wealth — one informed decision at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/academy">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover-elevate active-elevate-2 text-base md:text-lg px-8 py-6 min-h-12"
                  data-testid="button-hero-explore"
                >
                  Explore Our Digital Wealth Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base md:text-lg px-8 py-6 min-h-12 backdrop-blur-sm"
                  data-testid="button-hero-consultation"
                >
                  Schedule a Private Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-foreground" data-testid="text-mission">
            We believe the path to wealth begins not with products or markets, but with <span className="font-semibold text-primary">understanding</span>. 
            At TBA, LLP, we combine modern investment education, evidence-based strategy, and legacy-focused planning to help our clients take control of their financial future.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12 md:mb-16" data-testid="text-values-heading">
            Built on Timeless Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-services-heading">
              Comprehensive Wealth, Simplified.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We bridge the gap between education and execution — helping clients make smart, informed choices at every stage of their financial journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {service.badge}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <Link href={service.link}>
                    <Button variant="outline" className="w-full" data-testid={`button-service-${index}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-pricing-heading">
              Start Your Educational Journey
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the program that fits your financial goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative hover-elevate transition-all duration-300 ${
                  tier.featured ? 'border-accent border-2' : ''
                }`}
                data-testid={`card-tier-${index}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-semibold px-4 py-1 rounded-full bg-accent text-accent-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl md:text-4xl font-bold text-primary mt-2">{tier.price}</div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/academy">
              <Button size="lg" className="bg-accent text-accent-foreground hover-elevate active-elevate-2" data-testid="button-view-all-programs">
                View All Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6" data-testid="text-cta-heading">
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Whether you're preparing for retirement, protecting generational wealth, or simply learning how to make your money work intelligently — our approach begins with education and ends with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover-elevate active-elevate-2"
                data-testid="button-cta-consultation"
              >
                Book Your Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-cta-resources"
              >
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
