'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Share, X, Twitter, MessageSquare, Users, Copy, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function FloatingShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shareActions = [
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => {
        const text = "Gaming should be for everyone! Join the #GameFreedom movement for Linux gaming equality 🐧🎮";
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        setIsOpen(false);
      }
    },
    {
      name: "Reddit",
      icon: <MessageSquare className="w-4 h-4" />,
      color: "bg-orange-500 hover:bg-orange-600",
      action: () => {
        window.open('https://reddit.com/r/linux_gaming', '_blank');
        setIsOpen(false);
      }
    },
    {
      name: "Discord",
      icon: <Users className="w-4 h-4" />,
      color: "bg-indigo-500 hover:bg-indigo-600",
      action: () => {
        window.open('https://discord.gg/linuxgaming', '_blank');
        setIsOpen(false);
      }
    },
    {
      name: "Copy Link",
      icon: isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />,
      color: isCopied ? "bg-green-500" : "bg-gray-500 hover:bg-gray-600",
      action: async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy link');
        }
        setIsOpen(false);
      }
    }
  ];

  if (!isMobile) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Share Options */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 animate-in slide-in-from-bottom-5">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-4">
              <div className="flex flex-col gap-3 min-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Share #GameFreedom</h4>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                {shareActions.map((action, index) => (
                  <Button
                    key={index}
                    onClick={action.action}
                    className={`${action.color} text-white justify-start`}
                    size="sm"
                  >
                    {action.icon}
                    <span className="ml-2">{action.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-110"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Share className="w-6 h-6" />}
      </Button>
    </>
  );
}