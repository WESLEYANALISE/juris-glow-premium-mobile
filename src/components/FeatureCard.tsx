
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
  // Calculate animation delay based on index
  const delay = 0.1 + (index * 0.1);
  
  return (
    <div 
      className={cn(
        "glass rounded-xl p-4 flex items-start gap-3 animate-fade-in-up opacity-0", 
        className
      )} 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-juridico-dark-purple/50 p-2 rounded-lg text-juridico-light-purple">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
