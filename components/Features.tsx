import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: "🏗️",
      title: "Construisez des projets concrets",
      description: "Travaillez sur des dApps, des protocoles DeFi et des plateformes NFT prêts à être mis en production qui résolvent des problèmes concrets."
    },
    {
      icon: "🤝",
      title: "Mentorat d'experts",
      description: "Apprenez auprès des leaders du secteur, de fondateurs à succès et de contributeurs clés aux principaux protocoles Web3."
    },
    {
      icon: "🌐",
      title: "Réseau & Communauté Web3",
      description: "Entrez en contact avec des créateurs, des investisseurs et des innovateurs issus des plus grandes entreprises Web3 au monde."
    },
    {
      icon: "💡",
      title: "Laboratoire d'Innovation",
      description: "Accédez à des outils, des ressources et des infrastructures de pointe pour donner vie à vos idées."
    },
    {
      icon: "🚀",
      title: "Demo Day",
      description: "Présentez vos projets aux entreprises Web3 afin d'obtenir des financements et des partenariats potentiels."
    },
    {
      icon: "🎯",
      title: "Opportunités de Carrière",
      description: "Accédez directement à des opportunités au sein des principales entreprises Web3 et start-ups de notre réseau."
    }
  ];

  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Pourquoi Rejoindre notre Hacker House ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous fournissons tout ce dont vous avez besoin pour accélérer
            votre transition vers le Web3 et développer
            des liens significatifs au sein de l'écosystème blockchain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-border transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}