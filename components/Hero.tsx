import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Hero() {
  const handleCTAClick = () => {
    window.open('https://calendar.app.google/9ZSD7cqMXBgWkSvD8', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge variant="secondary" className="mb-6 px-4 py-2">
          🚀 Inscriptions Ouvertes Maintenant
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Construisons le Futur du Web3
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Rejoignez un programme immersif exclusif de 12 semaines où les esprits les plus brillants 
          de la blockchain se réunissent pour créer des applications Web3 révolutionnaires.  
          Codez, collaborez et créez la prochaine génération de technologie décentralisée.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="px-8 py-3 text-lg" onClick={handleCTAClick}>
            S'inscrire Maintenant
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg" onClick={handleCTAClick}>
            Découvrir Plus
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-semibold mb-1">12 Semaines</div>
            <div className="text-muted-foreground">Programme Intensif</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-semibold mb-1">50+ Builders</div>
            <div className="text-muted-foreground">Communauté Globale</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-semibold mb-1">$15K+</div>
            <div className="text-muted-foreground">Disponible en Pool Prize</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #000000 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}