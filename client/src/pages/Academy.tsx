import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Academy() {
  const tiers = [
    {
      name: "Foundations Package",
      price: "$1,250",
      tier: "TIER 1",
      description: "Core digital wealth fundamentals",
      features: [
        "Core digital wealth fundamentals",
        "Planning and budgeting frameworks",
        "Lifetime access to starter tools",
        "Self-paced learning modules",
        "Financial literacy foundations"
      ]
    },
    {
      name: "Momentum Package",
      price: "$1,850",
      tier: "TIER 2",
      description: "Build on the basics",
      features: [
        "Everything in Foundations",
        "Portfolio simulation access",
        "1 personalized strategy session",
        "Interactive financial tools",
        "Market fundamentals training"
      ]
    },
    {
      name: "Growth Package",
      price: "$2,450",
      tier: "TIER 3",
      description: "Advanced market training",
      features: [
        "Everything in Momentum",
        "Advanced market training",
        "Weekly insights + real-world applications",
        "Guided wealth-building modules",
        "Risk management strategies"
      ]
    },
    {
      name: "Legacy Circle",
      price: "$3,050",
      tier: "TIER 4",
      description: "Premium membership",
      features: [
        "Everything in Growth",
        "Lifetime membership access",
        "One-on-one quarterly reviews",
        "Priority transition to advisory services once licensed",
        "Exclusive insights and updates",
        "Direct access to wealth strategists"
      ],
      featured: true
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Digital Wealth Academy - TBA, LLP | Financial Education Programs"
        description="Choose from four comprehensive education programs: Foundations ($1,250), Momentum ($1,850), Growth ($2,450), or Legacy Circle ($3,050). Your education determines your outcome."
        keywords="digital wealth academy, financial education programs, investment training, portfolio simulation, wealth building"
        pathname="/academy"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-academy-headline">
            Your Education Determines Your Outcome.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Our digital education packages are built for individuals who want more than advice — they want understanding. 
            Every program includes structured training, strategy tools, and optional portfolio simulations that help you practice real-world financial decision-making without the risk.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative flex flex-col hover-elevate transition-all duration-300 ${
                  tier.featured ? 'border-accent border-2 shadow-lg' : ''
                }`}
                data-testid={`card-tier-${index}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-semibold px-4 py-1 rounded-full bg-accent text-accent-foreground flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="text-xs font-semibold text-accent mb-2">{tier.tier}</div>
                  <CardTitle className="text-2xl font-serif">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4">{tier.price}</div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button 
                      className={`w-full ${
                        tier.featured 
                          ? 'bg-accent text-accent-foreground hover-elevate active-elevate-2' 
                          : ''
                      }`}
                      variant={tier.featured ? 'default' : 'outline'}
                      data-testid={`button-enroll-${index}`}
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-12 md:py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-lg">Important Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-disclosure">
                All programs are educational in nature. No investment advice or fiduciary service is offered until TBA, LLP is fully licensed under Series 65 registration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6" data-testid="text-cta-heading">
            Not Sure Which Program is Right for You?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Schedule a consultation to discuss your financial education goals and find the perfect fit.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover-elevate active-elevate-2" data-testid="button-cta-consultation">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
