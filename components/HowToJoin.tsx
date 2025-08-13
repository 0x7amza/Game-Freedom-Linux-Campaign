import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Twitter, MessageSquare, Users, Share, Send, Heart } from 'lucide-react';

export function HowToJoin() {
  const steps = [
    {
      step: 1,
      icon: <Share className="w-8 h-8 text-blue-500" />,
      title: "Share the Movement",
      description: "Spread the word on social media using #GameFreedom",
      action: "Share Now",
      onClick: () => {
        const text = "Gaming should be for everyone! Join the #GameFreedom movement and help bring equality to Linux gaming 🐧🎮";
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=GameFreedom,LinuxGaming`, '_blank');
      }
    },
    {
      step: 2,
      icon: <Send className="w-8 h-8 text-purple-500" />,
      title: "Contact Companies",
      description: "Send respectful messages to game companies requesting Linux support",
      action: "Start Messaging",
      onClick: () => {
        document.getElementById('targets')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      step: 3,
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Join the Community",
      description: "Connect with other Linux gamers and stay updated on campaign progress",
      action: "Join Discord",
      onClick: () => {
        window.open('https://discord.gg/linuxgaming', '_blank');
      }
    }
  ];

  const socialActions = [
    {
      platform: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => {
        const text = "I support #GameFreedom! Linux gamers deserve equal access to all games. It's time for the gaming industry to embrace open platforms! 🐧🎮";
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
      }
    },
    {
      platform: "Reddit",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "bg-orange-500 hover:bg-orange-600",
      onClick: () => {
        window.open('https://reddit.com/r/linux_gaming', '_blank');
      }
    },
    {
      platform: "Discord",
      icon: <Users className="w-5 h-5" />,
      color: "bg-indigo-500 hover:bg-indigo-600",
      onClick: () => {
        window.open('https://discord.gg/linuxgaming', '_blank');
      }
    }
  ];

  return (
    <section id="join" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How to <span className="text-blue-500">Join</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to make your voice heard and support Linux gaming equality.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {step.description}
                </p>
                <Button 
                  onClick={step.onClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {step.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Social Actions */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Quick Actions</CardTitle>
            <p className="text-muted-foreground">Take immediate action across social platforms</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {socialActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  className={`${action.color} text-white px-6 py-3 flex-1 sm:flex-initial`}
                >
                  {action.icon}
                  <span className="ml-2">Share on {action.platform}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-2 border-green-500/50">
            <CardContent className="p-8">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-muted-foreground mb-6">
                Every voice matters. Every share counts. Every message brings us closer to gaming equality.
              </p>
              <Button 
                size="lg"
                onClick={() => {
                  const text = "I just joined the #GameFreedom movement! Gaming should be for everyone, including Linux users. Let's make the gaming industry more inclusive! 🐧🎮";
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
              >
                <Heart className="w-5 h-5 mr-2" />
                Join the Movement Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}