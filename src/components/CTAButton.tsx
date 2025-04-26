
import React from 'react';
import { getAppStoreLink } from '@/utils/deviceDetection';
import { isAndroid, isIOS } from '@/utils/deviceDetection';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ className }) => {
  const handleClick = () => {
    window.location.href = getAppStoreLink();
  };
  
  const storeType = isIOS() ? "App Store" : "Google Play";

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <button 
        onClick={handleClick}
        className="bg-netflix-red text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 active:scale-95 animate-fade-in-up opacity-0 animate-pulse-glow"
        style={{ animationDelay: '0.8s' }}
      >
        Adquirir Agora por R$29,99 Vitalício
      </button>
      <p className="text-netflix-light text-sm mt-3 animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
        Disponível na {storeType}
      </p>
    </div>
  );
};

export default CTAButton;
