import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Twitter, MessageSquare, Users, Youtube, Share, FileText, Mail, Globe } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/GameFreedomLinux",
      color: "hover:text-blue-500"
    },
    {
      name: "Mastodon",
      icon: <Globe className="w-5 h-5" />,
      url: "https://mastodon.social/@GameFreedom",
      color: "hover:text-purple-500"
    },
    {
      name: "Reddit",
      icon: <MessageSquare className="w-5 h-5" />,
      url: "https://reddit.com/r/GameFreedom",
      color: "hover:text-orange-500"
    },
    {
      name: "Discord",
      icon: <Users className="w-5 h-5" />,
      url: "https://discord.gg/GameFreedom",
      color: "hover:text-indigo-500"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://youtube.com/@GameFreedomLinux",
      color: "hover:text-red-500"
    }
  ];

  const quickActions = [
    {
      name: "Share Campaign",
      icon: <Share className="w-4 h-4" />,
      action: () => {
        const text = "Gaming should be for everyone! Join the #GameFreedom movement for Linux gaming equality 🐧🎮";
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
      }
    },
    {
      name: "Press Kit",
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        // In a real implementation, this would download or link to press materials
        alert("Press kit with logos, descriptions, and media assets would be available here. Contact: press@gamefreedom.org");
      }
    },
    {
      name: "Contact Press",
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        window.location.href = "mailto:press@gamefreedom.org?subject=Game Freedom Press Inquiry";
      }
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🐧</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Game Freedom
                </h3>
                <p className="text-sm text-muted-foreground">Linux First</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Fighting for gaming equality across all platforms. Every gamer deserves the freedom to choose their operating system without sacrificing their gaming experience.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 Game Freedom – Linux First</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                The Problem
              </button>
              <button 
                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Solution
              </button>
              <button 
                onClick={() => document.getElementById('targets')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Target Companies
              </button>
              <button 
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                How to Join
              </button>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <div className="space-y-2">
              <button 
                onClick={() => window.open('https://linux-gaming.kev009.com/', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Linux Gaming Wiki
              </button>
              <button 
                onClick={() => window.open('https://www.protondb.com/', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                ProtonDB
              </button>
              <button 
                onClick={() => window.open('https://store.steampowered.com/hwsurvey/', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Steam Hardware Survey
              </button>
              <button 
                onClick={() => window.open('https://github.com/ValveSoftware/Proton', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Proton on GitHub
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="font-bold mb-4 text-center lg:text-left">Follow the Movement</h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(link.url, '_blank')}
                  className={`${link.color} transition-colors`}
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-center lg:text-right">Quick Actions</h4>
            <div className="flex flex-wrap justify-center lg:justify-end gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {action.icon}
                  <span className="ml-2">{action.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Press and Community Note */}
        <Card className="bg-muted/50 border-2 border-blue-500/20">
          <CardContent className="p-6 text-center">
            <h4 className="font-bold mb-2">Community-Led Initiative</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Game Freedom – Linux First is an independent, community-driven campaign led by Linux gamers worldwide. 
              We are not affiliated with any specific company or organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Press: press@gamefreedom.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Community: community@gamefreedom.org</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Notice */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>
            Made with ❤️ by the Linux gaming community • {" "}
            <button 
              onClick={() => {
                const text = "Built with #GameFreedom in mind! Join the movement for Linux gaming equality 🐧🎮";
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="underline hover:text-foreground transition-colors"
            >
              Share this site
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}