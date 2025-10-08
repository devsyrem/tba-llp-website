import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Shield, Award, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";

export default function About() {
  const values = [
    {
      icon: BookOpen,
      title: "Transparency",
      description: "Every strategy explained. Every decision understood."
    },
    {
      icon: Shield,
      title: "Education",
      description: "Financial clarity before financial action."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Doing what's right, even when it's not easy."
    },
    {
      icon: TrendingUp,
      title: "Legacy",
      description: "Building beyond today — for generations to come."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - TBA, LLP | Empowering Financial Independence Through Knowledge"
        description="TBA, LLP was founded by Shane McDonald on a simple belief: an educated investor is an empowered investor. Learn about our mission to transform financial uncertainty into clarity."
        keywords="financial education, Shane McDonald, wealth strategy, investment education, TBA LLP"
        pathname="/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-about-headline">
            Empowering Financial Independence Through Knowledge
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            An educated investor is an empowered investor
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-6" data-testid="text-about-story">
              TBA, LLP was founded on a simple yet powerful belief: <span className="font-semibold text-primary">an educated investor is an empowered investor</span>.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Our firm was created by Shane McDonald, a lifelong student of markets, purpose, and legacy. After decades observing how financial decisions shape families across generations, Shane recognized the need for a model that prioritizes education first — and advisory second.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Today, TBA, LLP operates as a hybrid educational and wealth strategy firm, offering tools, digital programs, and personalized guidance designed to transform financial uncertainty into clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
            <Card className="text-center hover-elevate transition-all">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">We don't sell</div>
                <div className="text-lg text-muted-foreground">confusion</div>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate transition-all">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">We teach</div>
                <div className="text-lg text-muted-foreground">comprehension</div>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate transition-all">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">We deliver</div>
                <div className="text-lg text-muted-foreground">understanding</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12 md:mb-16" data-testid="text-values-heading">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-8" data-testid="text-vision-heading">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground" data-testid="text-vision">
            To redefine how individuals and families experience wealth — not as a number, but as a <span className="font-semibold text-primary">tool for impact, freedom, and peace of mind</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
