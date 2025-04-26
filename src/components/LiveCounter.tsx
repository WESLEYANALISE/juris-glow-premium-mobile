
import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LiveCounterProps {
  className?: string;
}

const LiveCounter: React.FC<LiveCounterProps> = ({ className }) => {
  const [viewerCount, setViewerCount] = useState(0);
  const [purchaseCount, setPurchaseCount] = useState(0);

  useEffect(() => {
    // Initial random counts
    setViewerCount(Math.floor(Math.random() * (180 - 120) + 120));
    setPurchaseCount(Math.floor(Math.random() * (50 - 30) + 30));

    // Update viewers every 30 seconds
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.min(Math.max(prev + change, 120), 180);
      });
    }, 30000);

    // Update purchases every 45 seconds
    const purchaseInterval = setInterval(() => {
      setPurchaseCount(prev => Math.min(prev + 1, 99));
    }, 45000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(purchaseInterval);
    };
  }, []);

  return (
    <div 
      className={cn(
        "glass p-4 rounded-xl space-y-2 animate-fade-in-up opacity-0",
        "hover:shadow-[0_0_20px_rgba(229,9,20,0.2)] transition-all duration-300",
        className
      )} 
      style={{ animationDelay: '0.4s' }}
    >
      <div className="flex items-center gap-2 text-netflix-light group transition-all duration-300">
        <Users 
          size={16} 
          className="text-netflix-red animate-pulse" 
        />
        <span className="text-sm group-hover:text-white transition-colors">
          {viewerCount} pessoas visualizando agora
        </span>
      </div>
      <div className="text-sm relative overflow-hidden">
        <span className="text-netflix-red font-semibold animate-bounce inline-block">
          {purchaseCount}
        </span>
        <span className="text-netflix-light"> pessoas adquiriram hoje</span>
      </div>
    </div>
  );
};

export default LiveCounter;
