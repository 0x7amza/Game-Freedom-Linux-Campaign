import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Zap, RefreshCw, Calendar } from 'lucide-react';

export function Solution() {
  const demands = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Native Linux Versions",
      description: "Release native Linux builds for all new major game releases",
      details: "Commit to day-one Linux support for AAA titles and provide native builds that take advantage of Linux's performance benefits.",
      priority: "High"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Improve Proton/Vulkan Support",
      description: "Enhance compatibility layers and graphics API support",
      details: "Work with Valve and open-source communities to improve Proton compatibility and prioritize Vulkan API implementations.",
      priority: "Medium"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-500" />,
      title: "Equal Update Schedules",
      description: "Commit to simultaneous updates across all platforms",
      details: "Ensure Linux users receive patches, content updates, and new features at the same time as Windows users.",
      priority: "High"
    }
  ];

  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-green-500">Solution</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple demands that will unlock the Linux gaming market and create equality for all gamers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {demands.map((demand, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {demand.icon}
                </div>
                <div className="flex justify-center mb-2">
                  <Badge variant={demand.priority === 'High' ? 'destructive' : 'secondary'}>
                    {demand.priority} Priority
                  </Badge>
                </div>
                <CardTitle className="text-xl">{demand.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center">
                  {demand.description}
                </p>
                <p className="text-sm leading-relaxed">
                  {demand.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Why This Benefits Everyone</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-3 text-blue-500">For Game Companies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Access to 50+ million new potential customers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Higher revenue per user from Linux community
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Reduced platform dependency and costs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Enhanced brand reputation in tech community
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3 text-purple-500">For Gamers</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Freedom to choose your operating system
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Better performance with optimized Linux builds
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Enhanced privacy and security
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Equal access to all gaming content
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}