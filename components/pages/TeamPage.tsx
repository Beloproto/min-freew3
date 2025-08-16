import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useRouter } from "../Router";
import { ArrowLeft, Linkedin, Twitter, Github } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function TeamPage() {
  const { navigateTo } = useRouter();

  const handleCTAClick = () => {
    window.open('https://calendar.app.google/9ZSD7cqMXBgWkSvD8', '_blank');
  };

  const founders = [
    {
      name: "Ayémou Loïc-Yvan",
      role: "Fondateur & PDG",
      bio: "Chef de Projet Blockchain. +10 ans en Communication & Développement des Marques",
      image: "team founder blockchain",
      achievements: ["Responsable Opérations chez Binance", "Country Manager Izichange", "Développeur Smart Contract RUST"],
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Marie Rodriguez",
      role: "Co-Fondatrice & Directrice Technique",
      bio: "Anciennement Ingénieure Principale chez Polygon. Experte en solutions de mise à l'échelle Layer 2 et preuves ZK. Doctorat MIT en Cryptographie.",
      image: "team woman engineer blockchain",
      achievements: ["Équipe principale Polygon", "20+ publications de recherche", "Pionnière ZK-SNARK"],
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "James Park",
      role: "Co-Fondateur & Directeur des Programmes",
      bio: "Ancien Partenaire Y Combinator. A mentoré 50+ startups Web3. MBA Berkeley avec un réseau approfondi dans l'écosystème crypto VC.",
      image: "team mentor business",
      achievements: ["Partenaire Y Combinator", "50+ startups mentorées", "$500M+ levés"],
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  const mentors = [
    {
      name: "Vitalik Buterin",
      role: "Conseiller Spécial",
      company: "Ethereum Foundation",
      expertise: ["Conception de Protocoles", "Mécanismes de Consensus"],
      image: "vitalik buterin ethereum"
    },
    {
      name: "Stani Kulechov",
      role: "Mentor DeFi",
      company: "Aave",
      expertise: ["Protocoles de Prêt", "Gouvernance"],
      image: "team defi expert"
    },
    {
      name: "Sandeep Nailwal",
      role: "Mentor Infrastructure",
      company: "Polygon",
      expertise: ["Layer 2", "Solutions de Mise à l'Échelle"],
      image: "team infrastructure expert"
    },
    {
      name: "Linda Xie",
      role: "Mentor Investissement",
      company: "Scalar Capital",
      expertise: ["Tokenomics", "Stratégie VC"],
      image: "team investment expert"
    },
    {
      name: "Balaji Srinivasan",
      role: "Conseiller Stratégie",
      company: "Ancien CTO Coinbase",
      expertise: ["Stratégie Produit", "États-Réseaux"],
      image: "team strategy advisor"
    },
    {
      name: "Meltem Demirors",
      role: "Conseillère Industrie",
      company: "CoinShares",
      expertise: ["Actifs Numériques", "Réglementaire"],
      image: "team regulatory expert"
    }
  ];

  const team = [
    {
      name: "Sarah Kim",
      role: "Instructrice Principale - DeFi",
      bio: "Ancienne développeuse principale chez Compound. A construit des teneurs de marché automatisés et des protocoles de prêt.",
      image: "team instructor defi",
      expertise: ["Smart Contracts", "Conception AMM", "Gestion des Risques"]
    },
    {
      name: "Marcus Thompson",
      role: "Instructeur Principal - Gaming",
      bio: "Ex-responsable blockchain Unity. A livré 10+ jeux Web3 avec des millions de joueurs.",
      image: "team instructor gaming",
      expertise: ["Développement de Jeux", "Intégration NFT", "Économie des Joueurs"]
    },
    {
      name: "Priya Patel",
      role: "Instructrice Principale - Infrastructure",
      bio: "Ancienne ingénieure Google Cloud. Spécialisée en infrastructure blockchain et DevOps.",
      image: "team instructor infrastructure",
      expertise: ["Opérations de Nœuds", "Architecture Cloud", "CI/CD"]
    },
    {
      name: "David Martinez",
      role: "Directeur des Services Carrière",
      bio: "15 ans dans le recrutement tech. A placé 200+ ingénieurs dans les meilleures entreprises Web3.",
      image: "team career services",
      expertise: ["Recrutement Technique", "Négociation Salariale", "Préparation Entretiens"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-background via-background to-accent/20">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => navigateTo('home')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'Accueil
          </Button>
          
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              👥 Rencontrez l'Équipe
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              L'Équipe Derrière Votre Succès
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Apprenez auprès des pionniers de l'industrie, des créateurs de protocoles et des entrepreneurs à succès 
              qui ont construit l'écosystème Web3 que vous allez rejoindre.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Fondateurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entrepreneurs en série et leaders techniques qui ont créé des protocoles de plusieurs milliards de dollars
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-accent">
                    <ImageWithFallback
                      src=""
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{founder.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {founder.role}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {founder.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Réalisations Clés :</h4>
                    {founder.achievements.map((achievement, achIndex) => (
                      <Badge key={achIndex} variant="secondary" className="text-xs mr-1 mb-1">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-3 pt-2">
                    {founder.social.twitter && (
                      <a href={founder.social.twitter} className="text-muted-foreground hover:text-primary">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {founder.social.linkedin && (
                      <a href={founder.social.linkedin} className="text-muted-foreground hover:text-primary">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {founder.social.github && (
                      <a href={founder.social.github} className="text-muted-foreground hover:text-primary">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Mentors de l'Industrie</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Obtenez des conseils des bâtisseurs des principaux protocoles et entreprises Web3
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mentors.map((mentor, index) => (
              <Card key={index} className="hover:border-primary/20 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-accent">
                    <ImageWithFallback
                      src=""
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {mentor.role} chez {mentor.company}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Équipe Principale</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instructeurs expérimentés et personnel de soutien dédiés à votre succès
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex-row space-y-0 space-x-4 pb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-accent flex-shrink-0">
                    <ImageWithFallback
                      src=""
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Vous Souhaitez Rejoindre Notre Équipe ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Nous recherchons toujours des personnes talentueuses pour aider à façonner la prochaine génération de bâtisseurs Web3.
          </p>
          <Button size="lg" onClick={handleCTAClick}>
            Découvrir Plus
          </Button>
        </div>
      </section>
    </div>
  );
}
