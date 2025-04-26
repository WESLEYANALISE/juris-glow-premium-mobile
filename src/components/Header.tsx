
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn("pt-12 px-6 text-center", className)}>
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up opacity-0 text-gradient" style={{ animationDelay: '0.1s' }}>
        Direito Premium
      </h1>
      <p className="text-gray-300 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
        Sua plataforma jurídica completa
      </p>
      
      <div className="w-16 h-1 bg-gradient-to-r from-juridico-purple to-juridico-bright-blue mx-auto my-4 rounded-full animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}></div>
    </div>
  );
};

export default Header;
