
import React from 'react';
import { getAppStoreLink } from '@/utils/deviceDetection';
import { isAndroid, isIOS } from '@/utils/deviceDetection';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

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
        className="group bg-netflix-red relative overflow-hidden text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up opacity-0 shadow-[0_0_20px_rgba(229,9,20,0.3)]"
        style={{ animationDelay: '0.8s' }}
      >
        <div className="flex items-center gap-2">
          <span>Adquirir Agora por R$29,99 Vitalício</span>
          <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
        </div>
        <div className="absolute inset-0 bg-white/20 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0" />
      </button>
      <p className="text-netflix-light text-sm mt-3 animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
        Disponível na {storeType}
      </p>
    </div>
  );
};

export default CTAButton;
