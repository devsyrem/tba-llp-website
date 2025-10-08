import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Resources() {
  const articles = [
    {
      title: "The Psychology of Financial Decisions",
      category: "Behavioral Finance",
      readTime: "8 min read",
      excerpt: "Understanding the cognitive biases that influence your investment choices and how to overcome them for better financial outcomes.",
      date: "March 2024"
    },
    {
      title: "Building Wealth That Outlives You",
      category: "Legacy Planning",
      readTime: "10 min read",
      excerpt: "A comprehensive guide to creating a multi-generational wealth strategy that protects and grows your family's financial future.",
      date: "February 2024"
    },
    {
      title: "Understanding Indexed Strategies",
      category: "Investment Education",
      readTime: "12 min read",
      excerpt: "Deep dive into indexed universal life insurance and how market-linked strategies can provide both protection and growth potential.",
      date: "February 2024"
    },
    {
      title: "The Hidden Power of Compounding and Time",
      category: "Wealth Building",
      readTime: "6 min read",
      excerpt: "Discover how the mathematical miracle of compound interest can transform modest investments into significant wealth over time.",
      date: "January 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Resources - TBA, LLP | The Mind of Money Blog & Financial Insights"
        description="Financial wisdom without the noise. Explore insights on behavioral finance, legacy planning, indexed strategies, and the power of compounding. Educational articles for informed investors."
        keywords="financial insights, investment education, behavioral finance, legacy planning, wealth building strategies"
        pathname="/resources"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">The Mind of Money</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-resources-headline">
            Financial Wisdom, Without the Noise.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Our insights blend modern market understanding with timeless principles of purpose and stewardship. 
            Each article, guide, and video lesson is designed to expand your understanding and bring practical clarity to the complex world of money.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 flex flex-col" data-testid={`card-article-${index}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-accent">{article.category}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-serif">{article.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{article.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  {index === 0 ? (
                    <a 
                      href="https://www.financialplanningassociation.org/learning/publications/journal/JAN23-untangling-behavioral-finance-and-psychology-financial-planning-OPEN" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full" data-testid={`button-read-${index}`}>
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" className="w-full" data-testid={`button-read-${index}`}>
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16" data-testid="text-topics-heading">
            Explore by Topic
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Investment Basics", "Risk Management", "Tax Strategies", "Retirement Planning", "Estate Planning", "Market Analysis", "Behavioral Finance", "Legacy Building"].map((topic, index) => (
              <Card key={index} className="hover-elevate active-elevate-2 cursor-pointer transition-all" data-testid={`card-topic-${index}`}>
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium">{topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6" data-testid="text-cta-heading">
            Want Personalized Guidance?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Move beyond articles and get tailored financial education through our Digital Wealth Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy">
              <Button size="lg" className="bg-accent text-accent-foreground hover-elevate active-elevate-2" data-testid="button-cta-academy">
                View Academy Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" data-testid="button-cta-consultation">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
