
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
    <div className={cn("glass p-4 rounded-xl space-y-2 animate-fade-in-up opacity-0", className)} style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-2 text-netflix-light">
        <Users size={16} className="text-netflix-red" />
        <span className="text-sm">{viewerCount} pessoas visualizando agora</span>
      </div>
      <div className="text-sm">
        <span className="text-netflix-red font-semibold">{purchaseCount}</span>
        <span className="text-netflix-light"> pessoas adquiriram hoje</span>
      </div>
    </div>
  );
};

export default LiveCounter;
