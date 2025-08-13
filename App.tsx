import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Targets } from './components/Targets';
import { HowToJoin } from './components/HowToJoin';
import { CommunityVoices } from './components/CommunityVoices';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingShareButton } from './components/FloatingShareButton';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Problem Section */}
        <Problem />
        
        {/* Solution Section */}
        <Solution />
        
        {/* Targets Section */}
        <Targets />
        
        {/* How to Join Section */}
        <HowToJoin />
        
        {/* Community Voices Section */}
        <CommunityVoices />
        
        {/* FAQ Section */}
        <FAQ />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Share Button (Mobile Only) */}
      <FloatingShareButton />
    </div>
  );
}