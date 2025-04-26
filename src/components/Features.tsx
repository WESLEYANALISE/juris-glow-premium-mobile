
import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, BookUser, SmartphoneIcon, Star, Users, FileText, Clock, Book, ListCheck, CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features = [
    {
      icon: <BookOpen size={20} />,
      title: "600+ Flashcards",
      description: "Memorize conceitos jurídicos de forma eficiente."
    },
    {
      icon: <Book size={20} />,
      title: "400 Livros Jurídicos",
      description: "Biblioteca completa sempre à sua disposição."
    },
    {
      icon: <BookUser size={20} />,
      title: "Assistente Jurídico IA",
      description: "Tire dúvidas em tempo real com nossa inteligência artificial."
    },
    {
      icon: <FileText size={20} />,
      title: "+10.000 Petições e Contratos",
      description: "Modelos prontos para personalizar e utilizar."
    },
    {
      icon: <ListCheck size={20} />,
      title: "Dicionários Jurídicos",
      description: "Consulte termos técnicos completos e atualizados."
    },
    {
      icon: <CalendarCheck size={20} />,
      title: "400+ Cursos Jurídicos",
      description: "Atualize seus conhecimentos com cursos especializados."
    },
    {
      icon: <Users size={20} />,
      title: "Videoaulas com Especialistas",
      description: "Aprenda com os melhores professores do mercado."
    },
    {
      icon: <FileText size={20} />,
      title: "Banco de Questões",
      description: "Pratique com milhares de questões comentadas."
    },
    {
      icon: <Star size={20} />,
      title: "Resumos e Mapas Mentais",
      description: "Estude de forma eficiente com conteúdo otimizado."
    },
    {
      icon: <SmartphoneIcon size={20} />,
      title: "Multiplataforma",
      description: "Acesse pelo celular ou computador sem limitações."
    },
  ];

  return (
    <div className={cn("px-5 py-4", className)}>
      <div className="grid grid-cols-1 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
