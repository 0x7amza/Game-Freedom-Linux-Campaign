import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Twitter, ExternalLink } from 'lucide-react';

export function Targets() {
  const companies = [
    {
      name: "Electronic Arts",
      handle: "@EA",
      logo: "🎮",
      color: "from-blue-600 to-blue-700",
      message: "Hey @EA, Linux gamers want to play your amazing titles too! Join the #GameFreedom movement and support native Linux gaming. 50M+ potential customers are waiting! 🐧🎮"
    },
    {
      name: "Activision",
      handle: "@Activision",
      logo: "⚡",
      color: "from-orange-600 to-red-600",
      message: "Hi @Activision! The Linux gaming community is growing fast. Please consider native Linux support for Call of Duty and other titles. #GameFreedom means gaming for everyone! 🐧"
    },
    {
      name: "Epic Games",
      handle: "@EpicGames",
      logo: "🚀",
      color: "from-purple-600 to-pink-600",
      message: "Hello @EpicGames! Your support for cross-platform gaming is amazing. How about extending that to Linux with native Unreal Engine games? #GameFreedom #LinuxGaming 🐧"
    },
    {
      name: "Rockstar Games",
      handle: "@RockstarGames",
      logo: "⭐",
      color: "from-yellow-600 to-orange-600",
      message: "Dear @RockstarGames, GTA and Red Dead on Linux would be incredible! Linux users deserve to experience your world-class games too. #GameFreedom #LinuxGaming 🐧🎮"
    },
    {
      name: "Riot Games",
      handle: "@riotgames",
      logo: "🎯",
      color: "from-red-600 to-pink-600",
      message: "Hey @riotgames! League of Legends on Linux would bring millions of new players. Please consider native Linux support and make gaming truly accessible! #GameFreedom 🐧"
    },
    {
      name: "Ubisoft",
      handle: "@Ubisoft",
      logo: "🎪",
      color: "from-blue-600 to-purple-600",
      message: "Hi @Ubisoft! Assassin's Creed, Far Cry, and more on Linux would be amazing. Join the #GameFreedom movement and support all gamers! 🐧⚔️"
    }
  ];

  const tweetToCompany = (company: typeof companies[0]) => {
    const text = company.message;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="targets" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-purple-500">Targets</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's make our voices heard! Contact these major gaming companies and ask them to support Linux gaming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {companies.map((company, index) => (
            <Card key={index} className="border-2 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${company.color} flex items-center justify-center text-2xl`}>
                  {company.logo}
                </div>
                <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                <p className="text-muted-foreground mb-4">{company.handle}</p>
                <Button 
                  onClick={() => tweetToCompany(company)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Tweet to Them Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-green-500/50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center text-2xl">
                📺
              </div>
              <h3 className="text-xl font-bold mb-2">Gaming Press</h3>
              <p className="text-muted-foreground mb-4">Share your story with gaming journalists and content creators</p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Contact Gaming Media
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500/50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl">
                🏛️
              </div>
              <h3 className="text-xl font-bold mb-2">Government & EU</h3>
              <p className="text-muted-foreground mb-4">Support open standards and fair competition in gaming</p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Contact Representatives
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}