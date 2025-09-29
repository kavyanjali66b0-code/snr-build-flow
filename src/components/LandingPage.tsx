import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, Building2, Shield, HeartHandshake, CheckCircle, Home, Users, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';
import { LeadForm } from './LeadForm';

const LandingPage = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const highlights = [
    {
      icon: TrendingUp,
      title: "High Rental Yield",
      description: "Maximize your returns"
    },
    {
      icon: Building2,
      title: "Maximum Units",
      description: "Optimal space utilization"
    },
    {
      icon: Shield,
      title: "100% Money Safety",
      description: "Secure investments"
    },
    {
      icon: HeartHandshake,
      title: "End-to-End Assistance",
      description: "Complete project support"
    }
  ];

  const whyChooseUs = [
    "Professional Expertise",
    "Transparent Reporting", 
    "Cost & Time Efficiency"
  ];

  if (showLeadForm) {
    return <LeadForm onClose={() => setShowLeadForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Logo/Brand */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              SNR Infra BuildTech
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Built on Trust, Rooted in Quality
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-slide-up">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center hover:bg-white/20 transition-all duration-300 animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <item.icon className="w-8 h-8 mx-auto mb-2 text-white" />
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-white/80 text-xs">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Services Teaser */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-white text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span>End-to-End Project Management</span>
                <span className="text-white/60">•</span>
                <CheckCircle className="w-5 h-5 text-trust" />
                <span>Civil Supervision</span>
                <span className="text-white/60">•</span>
                <CheckCircle className="w-5 h-5 text-trust" />
                <span>Vendor Coordination</span>
              </div>
              <p className="text-white/70 text-xs mt-2 text-center">View services →</p>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-trust" />
                  <span className="font-medium">{item}</span>
                  {index < whyChooseUs.length - 1 && (
                    <span className="hidden md:inline text-white/60 ml-4">—</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-bounce-in" style={{ animationDelay: "1s" }}>
            <Button 
              onClick={() => setShowLeadForm(true)}
              className="bg-cta hover:bg-cta-hover text-cta-foreground font-bold text-xl px-12 py-6 rounded-lg shadow-cta transform hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">SNR Infra BuildTech</h3>
            <p className="text-white/80">Built on Trust, Rooted in Quality</p>
          </div>
          <div className="text-white/60 text-sm">
            © SNR Infra BuildTech — All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;