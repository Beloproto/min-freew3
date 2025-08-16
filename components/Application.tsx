import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Application() {
  const requirements = [
    "Bonne compréhension de l'écosystème Web3",
    "Expérience avec Développement Web & Mobile",
    "Compréhension de base des concepts de la blockchain",
    "Passion pour les technologies décentralisées",
    "Capacité à s'engager à temps plein pendant 12 semaines",
    "Solides compétences en communication et en collaboration"
  ];

  const process = [
    {
      step: "01",
      title: "Soumettez votre candidature",
      description: "Remplissez notre formulaire de candidature en indiquant votre parcours, vos projets et votre motivation."
    },
    {
      step: "02", 
      title: "Entretien Préalable ",
      description: "Présentez votre projet et votre intérêt à nous rejoindre dans un entretien."
    },
    {
      step: "03",
      title: "Décision finale",
      description: "Recevez une notification pour vous faire part du statut de votre requête."
    },
    {
      step: "04",
      title: "Finalisez votre Inscription",
      description: "Finalisez la procédure de participation et notifiez nous pour la suite des étapes."
    }
  ];

  const handleCTAClick = () => {
    window.open('https://calendar.app.google/9ZSD7cqMXBgWkSvD8', '_blank');
  };

  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Prêt à Postuler ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez la prochaine cohorte de Builders Web3. Les candidatures sont ouvertes et les places sont rapidement prises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl mb-6">Requirements</h3>
            <div className="space-y-3">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{requirement}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-card border border-border rounded-lg">
              <h4 className="text-lg mb-3">Détails du Programme</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><strong>Duration:</strong> 12 Semaines (Full-time & Remote)</div>
                <div><strong>Lieu:</strong> Abidjan, Riviera</div>
                <div><strong>Date de Début:</strong> 01 Septembre, 2025</div>
                <div><strong>Taille Cohort 1:</strong> 50 builders</div>
                <div><strong>Date limite d'inscription:</strong> 31 Août, 2025</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6">Processus de Candidature</h3>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="w-10 h-10 rounded-full flex items-center justify-center p-0">
                      {item.step}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-12 py-4 text-lg" onClick={handleCTAClick}>
            Soumettez votre Candidature
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Des Questions? Contactez-nous: webhackerhouse@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}