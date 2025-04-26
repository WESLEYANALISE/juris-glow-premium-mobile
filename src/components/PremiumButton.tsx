
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAppStoreLink } from '@/utils/deviceDetection';

interface PremiumButtonProps {
  className?: string;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ className }) => {
  const handleClick = () => {
    window.location.href = getAppStoreLink();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "bg-netflix-red relative overflow-hidden group px-6 py-3 rounded-xl",
        "transform transition-all duration-300 hover:scale-105 active:scale-95",
        "animate-fade-in-up opacity-0 shadow-[0_0_15px_rgba(229,9,20,0.5)]",
        "flex items-center gap-2",
        className
      )}
      style={{ animationDelay: '0.5s' }}
    >
      <Star className="w-5 h-5" />
      <span className="font-semibold">Ser Premium</span>
      <div className="absolute inset-0 bg-white/20 transition-transform duration-300 transform translate-x-[-100%] group-hover:translate-x-0" />
    </button>
  );
};

export default PremiumButton;
