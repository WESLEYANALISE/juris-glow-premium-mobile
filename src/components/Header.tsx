
import React from 'react';
import { cn } from '@/lib/utils';
import PremiumButton from './PremiumButton';
import LiveCounter from './LiveCounter';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn("pt-12 px-6 text-center space-y-6", className)}>
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up opacity-0 text-gradient" style={{ animationDelay: '0.1s' }}>
        Direito Premium
      </h1>
      <p className="text-netflix-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
        Sua plataforma jurídica completa
      </p>
      
      <div className="w-16 h-1 bg-gradient-to-r from-netflix-red to-netflix-dark mx-auto rounded-full animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}></div>
      
      <PremiumButton className="mx-auto" />
      <LiveCounter className="max-w-sm mx-auto" />
    </div>
  );
};

export default Header;
