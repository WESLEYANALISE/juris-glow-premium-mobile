
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  index,
  className 
}) => {
  const delay = 0.1 + (index * 0.1);
  
  return (
    <div 
      className={cn(
        "glass rounded-xl p-4 flex items-start gap-3 animate-fade-in-up opacity-0",
        "transform transition-all duration-300 hover:scale-[1.02]",
        "hover:shadow-[0_0_30px_rgba(229,9,20,0.15)] hover:bg-white/10",
        className
      )} 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-netflix-dark/50 p-2 rounded-lg text-netflix-red ring-1 ring-white/10 transition-all duration-300 group-hover:text-white group-hover:bg-netflix-red/20">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1 group-hover:text-netflix-red transition-colors">{title}</h3>
        <p className="text-netflix-light/80 text-sm transition-colors group-hover:text-netflix-light">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
