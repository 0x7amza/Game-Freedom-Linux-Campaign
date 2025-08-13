import { Card, CardContent } from './ui/card';
import { Quote, Heart, Star } from 'lucide-react';

export function CommunityVoices() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Software Developer",
      avatar: "👨‍💻",
      location: "San Francisco, CA",
      quote: "I've been using Linux for 10 years and I'm tired of missing out on the latest games. The #GameFreedom movement gives me hope that we'll finally get the respect we deserve as paying customers.",
      favorite_game: "Counter-Strike"
    },
    {
      name: "Maria Rodriguez",
      role: "Game Streamer",
      avatar: "🎮",
      location: "Madrid, Spain",
      quote: "Streaming from Linux would be a game-changer for content creators. We need native support, not workarounds. My viewers deserve the best experience possible.",
      favorite_game: "Apex Legends"
    },
    {
      name: "Sam Kim",
      role: "University Student",
      avatar: "👩‍🎓",
      location: "Seoul, South Korea",
      quote: "As a computer science student, I want to learn and game on the same platform. It's frustrating to boot into Windows just to play with friends. #GameFreedom represents our future.",
      favorite_game: "League of Legends"
    },
    {
      name: "David Thompson",
      role: "System Administrator",
      avatar: "🛠️",
      location: "London, UK",
      quote: "Linux is my daily driver for work and everything else. I shouldn't have to compromise on security and privacy just to play games. The industry needs to catch up.",
      favorite_game: "Cyberpunk 2077"
    },
    {
      name: "Nina Petrov",
      role: "Security Researcher",
      avatar: "🔒",
      location: "Berlin, Germany",
      quote: "Gaming on Linux isn't just about preference - it's about freedom, security, and having control over our computing experience. Every gamer deserves this choice.",
      favorite_game: "The Witcher 3"
    },
    {
      name: "Carlos Santos",
      role: "Indie Developer",
      avatar: "🎨",
      location: "São Paulo, Brazil",
      quote: "I develop games for all platforms, including Linux. It's heartbreaking to see major publishers ignore such a passionate and growing community. We're here, we're ready to pay.",
      favorite_game: "Hollow Knight"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Community <span className="text-green-500">Voices</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from Linux gamers around the world. This is why #GameFreedom matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <Quote className="w-6 h-6 text-green-500/30" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <blockquote className="text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span>Plays: {testimonial.favorite_game}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-500" />
                    <span>#GameFreedom</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 border-2 border-blue-500/20">
            <CardContent>
              <div className="text-3xl font-bold text-blue-500 mb-2">2.5M+</div>
              <div className="text-sm text-muted-foreground">Active r/linux_gaming members</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-2 border-green-500/20">
            <CardContent>
              <div className="text-3xl font-bold text-green-500 mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Campaign supporters so far</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-2 border-purple-500/20">
            <CardContent>
              <div className="text-3xl font-bold text-purple-500 mb-2">15M+</div>
              <div className="text-sm text-muted-foreground">Steam Deck users worldwide</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-2 border-yellow-500/20">
            <CardContent>
              <div className="text-3xl font-bold text-yellow-500 mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Countries represented</div>
            </CardContent>
          </Card>
        </div>

        {/* Share Your Story */}
        <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your voice matters! Share your Linux gaming experience and join thousands of others fighting for gaming equality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const text = "My #LinuxGaming story: [Share your experience here] We need #GameFreedom for all gamers! 🐧🎮";
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Share on Twitter
              </button>
              <button 
                onClick={() => window.open('https://reddit.com/r/linux_gaming', '_blank')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Post on Reddit
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}