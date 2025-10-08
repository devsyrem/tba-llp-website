import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, RefreshCw } from "lucide-react";
import SEO from "@/components/SEO";

export default function Legal() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Legal & Disclosures - TBA, LLP | Transparency You Can Trust"
        description="TBA, LLP legal disclosures, privacy policy, refund policy, and client agreement. Operating as a financial education firm with full transparency."
        keywords="legal disclosures, privacy policy, financial education, client agreement"
        pathname="/legal"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-legal-headline">
            Transparency You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Our commitment to clarity extends to every aspect of our business
          </p>
        </div>
      </section>

      {/* Disclosures */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-accent" />
                <CardTitle className="text-2xl">Legal Disclosures</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none space-y-4">
              <p className="text-base leading-relaxed" data-testid="text-disclosure-1">
                TBA, LLP operates as a financial education and wealth strategy firm.
              </p>
              <p className="text-base leading-relaxed" data-testid="text-disclosure-2">
                Until full Series 65 registration is complete, TBA, LLP does not provide regulated investment advisory services.
              </p>
              <p className="text-base leading-relaxed" data-testid="text-disclosure-3">
                All digital products are designed for educational purposes only.
              </p>
              <p className="text-base leading-relaxed" data-testid="text-disclosure-4">
                Any simulation or modeling provided is for demonstration and learning purposes.
              </p>
              <p className="text-base leading-relaxed" data-testid="text-disclosure-5">
                Clients who engage TBA, LLP understand that educational purchases are non-refundable once delivered.
              </p>
            </CardContent>
          </Card>

          <Card id="privacy">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-accent" />
                <CardTitle className="text-2xl">Privacy Policy</CardTitle>
              </div>
              <CardDescription>Last updated: January 2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Information We Collect</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, including name, email address, phone number, and any other information you choose to provide when using our services or contacting us.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How We Use Your Information</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you about our programs, and send you educational content and updates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Information Security</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card id="refund">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <RefreshCw className="w-6 h-6 text-accent" />
                <CardTitle className="text-2xl">Refund Policy</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                All digital educational programs and materials provided by TBA, LLP are considered delivered upon purchase and access grant. Due to the nature of digital educational content, all sales are final and non-refundable once access has been provided.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We encourage prospective clients to schedule a consultation to ensure our programs align with their educational goals before making a purchase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Client Agreement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                By engaging with TBA, LLP's educational services, you acknowledge and agree to the following:
              </p>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>All programs are educational in nature and do not constitute investment advice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You are responsible for your own financial decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Past performance does not guarantee future results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You should consult with qualified professionals before making financial decisions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
