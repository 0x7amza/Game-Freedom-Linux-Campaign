import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { HelpCircle, Lightbulb, TrendingUp, Shield } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Why don't more game companies support Linux?",
      answer: "Several factors contribute to this: smaller perceived market share, development costs, unfamiliarity with Linux development, and historical focus on Windows. However, with Steam Deck's success and Linux gaming growth of 200%+, these perceptions are outdated. The #GameFreedom movement aims to show companies the real demand and potential profit from Linux support."
    },
    {
      question: "Can't people already game on Linux?",
      answer: "Yes, but with significant limitations. While Proton/Wine compatibility layers work for many games, they're not perfect. Anti-cheat systems often block Linux users, performance can be suboptimal, and updates are frequently delayed or broken. Native Linux support would provide the same quality experience that Windows users enjoy."
    },
    {
      question: "What benefits do companies gain from supporting Linux?",
      answer: "Linux support offers multiple benefits: access to 50+ million potential customers, higher revenue per user from the Linux community, reduced dependency on Microsoft, lower platform fees, enhanced brand reputation in the tech community, and future-proofing as open-source gaming grows with devices like Steam Deck."
    },
    {
      question: "How is this different from previous Linux gaming efforts?",
      answer: "The #GameFreedom movement leverages unprecedented momentum: Steam Deck's mainstream success, Valve's Proton investment, growing enterprise Linux adoption, and a coordinated community campaign. We're not just asking for ports—we're demanding equality in gaming with concrete, achievable goals and massive community backing."
    },
    {
      question: "Will this actually make a difference?",
      answer: "Yes! Community movements have successfully influenced gaming companies before. Recent examples include cross-platform play adoption, accessibility improvements, and platform policy changes. With Linux gaming growing 200% in two years and millions of vocal users, companies are starting to listen. Your voice adds to this powerful momentum."
    },
    {
      question: "What about Steam Deck? Isn't that enough?",
      answer: "Steam Deck is fantastic and has accelerated Linux gaming adoption, but it's not enough. Many games still don't work properly, anti-cheat systems exclude Linux users, and desktop Linux gamers face the same limitations. We need systematic industry-wide change, not just compatibility layers for one device."
    },
    {
      question: "How can individual voices make an impact?",
      answer: "Individual voices create collective power. When thousands of people share #GameFreedom, contact companies, and demonstrate market demand, executives notice. Social media campaigns, coordinated messaging, and community solidarity have successfully changed industry practices before. Your participation amplifies our shared voice."
    },
    {
      question: "What's the timeline for seeing results?",
      answer: "Change takes time, but we're already seeing positive signs. Some companies are increasing Linux testing, Valve continues investing in Proton, and community awareness is growing rapidly. Expect gradual improvements over 6-18 months, with major announcements potentially happening sooner as pressure builds and market evidence accumulates."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about the Game Freedom movement and Linux gaming.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="border-2 border-blue-500/20 hover:border-blue-500/50 transition-colors">
            <CardHeader className="text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">New to Linux gaming? Learn about the ecosystem and available options.</p>
              <button 
                onClick={() => window.open('https://linux-gaming.kev009.com/index.php/Main_Page', '_blank')}
                className="text-blue-500 hover:text-blue-700 transition-colors underline"
              >
                Linux Gaming Wiki →
              </button>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/20 hover:border-green-500/50 transition-colors">
            <CardHeader className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <CardTitle>Market Data</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Explore statistics and trends showing Linux gaming growth.</p>
              <button 
                onClick={() => window.open('https://store.steampowered.com/hwsurvey/', '_blank')}
                className="text-green-500 hover:text-green-700 transition-colors underline"
              >
                Steam Hardware Survey →
              </button>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500/20 hover:border-purple-500/50 transition-colors">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <CardTitle>ProtonDB</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Check game compatibility and help improve Linux gaming support.</p>
              <button 
                onClick={() => window.open('https://www.protondb.com/', '_blank')}
                className="text-purple-500 hover:text-purple-700 transition-colors underline"
              >
                Visit ProtonDB →
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}