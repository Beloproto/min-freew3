import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export function ProgramDetails() {
  const tracks = [
    {
      title: "Digital 60",
      description:
        "Plongez au cœur des sessions du Digital afin d’enrichir vos connaissances autour des nouveaux outils du web.",
      technologies: [
        "Marketing Digital",
        "SEO",
        "Google Analytics",
        "Stratégie Digitale",
        "Paid Ads",
      ],
      color: "bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Ideate, Build & Ship",
      description:
        "Construisez la prochaine génération d'applications financières décentralisées.",
      technologies: [
        "Ideate to MVP",
        "Smart Contract (RUST, Solidity)",
        "Concept Blockchain",
        "Sécurité & Audit",
        "Hackathon",
      ],
      color: "bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Trading House",
      description:
        "Prenons plaisir à faire du Trading des cryptos.",
      technologies: [
        "Marché Centralisé",
        "Marché Décentralisé",
        "Airdrop",
        "Solutions DeFi",
        "Staking",
      ],
      color: "bg-green-500/10 border-green-500/20",
    },
  ];

  const included = [
    "🏠 Accès à un espace de travail convivial",
    "🍽️ Travaillez en tout aisance avec un service repas inclus",
    "💻 Accès à des outils de développement haut de gamme",
    "🔗 Accès direct aux API et outils Web3 de pointe",
    "🎓 Ateliers hebdomadaires et sessions techniques",
    "🤝 Sessions de mentorat individuelles avec des experts du secteur",
    "🌍 Événements de réseautage avec des investisseurs et des fondateurs",
    "💰 Jusqu'à 50 000 $ de subventions et de prix disponibles",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Nos Programmes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez votre domaine de spécialisation et plongez-vous
            dans un accompagnement pratique avec des développeurs
            partageant les mêmes idées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${track.color}`}
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2">
                  {track.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {track.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {track.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl mb-6 text-center">
            Ce qui est inclus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3"
              >
                <span className="text-lg">
                  {item.split(" ")[0]}
                </span>
                <span>
                  {item.split(" ").slice(1).join(" ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}