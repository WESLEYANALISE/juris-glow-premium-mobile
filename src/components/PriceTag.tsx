
import React from 'react';
import { cn } from '@/lib/utils';

interface PriceTagProps {
  className?: string;
}

const PriceTag: React.FC<PriceTagProps> = ({ className }) => {
  return (
    <div className={cn("relative my-8 animate-fade-in-up opacity-0", className)} style={{ animationDelay: '0.2s' }}>
      <div className="glass rounded-xl p-6 flex flex-col items-center">
        <div className="text-sm uppercase tracking-wider text-gray-300 mb-2">Acesso Vitalício</div>
        <div className="flex items-center gap-2">
          <span className="text-5xl font-bold text-gradient">R$29,99</span>
        </div>
        <div className="text-sm text-gray-300 mt-1">Pagamento único</div>
        <div className="absolute -top-3 right-4 bg-juridico-vivid-purple text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse-glow">
          Oferta Limitada
        </div>
      </div>
    </div>
  );
};

export default PriceTag;
