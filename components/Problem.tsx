import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { TrendingUp, GamepadIcon, Users, AlertTriangle } from 'lucide-react';

export function Problem() {
  return (
    <section id="problem" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-destructive">Problem</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Linux gaming is exploding, but major game companies are ignoring millions of potential customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stat Cards */}
          <Card className="text-center p-6 border-2 hover:border-blue-500/50 transition-colors">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold text-blue-500 mb-2">200%+</h3>
              <p className="text-muted-foreground">Linux gaming growth in 2 years</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-purple-500/50 transition-colors">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-2xl font-bold text-purple-500 mb-2">50M+</h3>
              <p className="text-muted-foreground">Active Linux desktop users</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-destructive/50 transition-colors">
            <CardContent className="pt-6">
              <GamepadIcon className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h3 className="text-2xl font-bold text-destructive mb-2">70%</h3>
              <p className="text-muted-foreground">Of top games lack Linux support</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-yellow-500/50 transition-colors">
            <CardContent className="pt-6">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">$2B+</h3>
              <p className="text-muted-foreground">Lost revenue potential annually</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bars */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-6">Linux Gaming Support by Major Publishers</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Steam Deck Verified Games</span>
                    <span className="text-green-500">85%</span>
                  </div>
                  <Progress value={85} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Native Linux Support</span>
                    <span className="text-blue-500">30%</span>
                  </div>
                  <Progress value={30} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>EA Games Linux Support</span>
                    <span className="text-destructive">5%</span>
                  </div>
                  <Progress value={5} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Activision Games Linux Support</span>
                    <span className="text-destructive">8%</span>
                  </div>
                  <Progress value={8} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Rockstar Games Linux Support</span>
                    <span className="text-destructive">0%</span>
                  </div>
                  <Progress value={0} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent>
                <h4 className="text-lg font-bold mb-4 text-destructive">What Linux Gamers Face</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Forced to use Windows or dual-boot systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Missing out on latest AAA game releases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Delayed or broken compatibility layers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Anti-cheat systems blocking Linux users
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h4 className="text-lg font-bold mb-4 text-blue-500">The Market Reality</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Linux users spend more on games per capita
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Steam Deck driving massive Linux adoption
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Growing enterprise and developer markets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Lower platform fees and open ecosystem
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}