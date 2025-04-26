
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PriceTag from '../components/PriceTag';
import Features from '../components/Features';
import CTAButton from '../components/CTAButton';
import { getAppStoreLink } from '../utils/deviceDetection';

const Index: React.FC = () => {
  useEffect(() => {
    // Preload potential redirect
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = getAppStoreLink();
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-dark text-white pb-20">
      <div className="max-w-md mx-auto relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-juridico-purple/20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-juridico-bright-blue/20 blur-3xl"></div>
        
        {/* Main content */}
        <Header />
        <PriceTag />
        <Features />
        
        {/* Final CTA */}
        <div className="mt-12 mb-8 px-5">
          <h2 className="text-xl font-semibold text-center mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
            Domine o Direito com um Único Investimento
          </h2>
          <CTAButton />
        </div>
        
        {/* Extra trust indicators */}
        <div className="text-center px-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="text-gray-400 text-xs">
            ✓ Pagamento único | ✓ Sem mensalidades | ✓ Acesso vitalício
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
