import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Twitter, Users } from 'lucide-react';

export function Hero() {
  const shareOnTwitter = () => {
    const text = "Gaming should be for everyone! Join the #GameFreedom movement and help bring equality to Linux gaming 🐧🎮";
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=GameFreedom,LinuxGaming`, '_blank');
  };

  const joinCampaign = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&crop=center"
          alt="Linux Gaming Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        {/* Gaming pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-32 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-40 w-5 h-5 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Linux Penguin Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 animate-bounce">
              <span className="text-4xl">🐧</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Gaming should be for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              everyone
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join the <strong className="text-blue-400">#GameFreedom</strong> movement. 
            Millions of Linux gamers are being left out while the platform grows exponentially.
          </p>

          {/* Statistics */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Linux Gaming +200% in 2 years</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-purple-400" />
              <span>70% of games lack Linux support</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={joinCampaign}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Join the Campaign
            </Button>
            <Button 
              onClick={shareOnTwitter}
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Share on Twitter
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}