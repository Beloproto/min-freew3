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
      role: "Founder & CEO",
      bio: "Blockchain Project Manager. +10 Ans en Communication & Développement des Marques",
      image: "team founder blockchain",
      achievements: ["Operations Manager at Binance", "Country Manager Izichange", "Développeur Smart Contract RUST"],
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Marie Rodriguez",
      role: "Co-Founder & CTO",
      bio: "Previously Principal Engineer at Polygon. Expert in Layer 2 scaling solutions and ZK proofs. MIT PhD in Cryptography.",
      image: "team woman engineer blockchain",
      achievements: ["Polygon core team", "20+ research papers", "ZK-SNARK pioneer"],
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "James Park",
      role: "Co-Founder & Head of Programs",
      bio: "Former Y Combinator Partner. Mentored 50+ Web3 startups. Berkeley MBA with deep network in crypto VC ecosystem.",
      image: "team mentor business",
      achievements: ["Y Combinator Partner", "50+ startups mentored", "$500M+ raised"],
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  const mentors = [
    {
      name: "Vitalik Buterin",
      role: "Special Advisor",
      company: "Ethereum Foundation",
      expertise: ["Protocol Design", "Consensus Mechanisms"],
      image: "vitalik buterin ethereum"
    },
    {
      name: "Stani Kulechov",
      role: "DeFi Mentor",
      company: "Aave",
      expertise: ["Lending Protocols", "Governance"],
      image: "team defi expert"
    },
    {
      name: "Sandeep Nailwal",
      role: "Infrastructure Mentor",
      company: "Polygon",
      expertise: ["Layer 2", "Scaling Solutions"],
      image: "team infrastructure expert"
    },
    {
      name: "Linda Xie",
      role: "Investment Mentor",
      company: "Scalar Capital",
      expertise: ["Tokenomics", "VC Strategy"],
      image: "team investment expert"
    },
    {
      name: "Balaji Srinivasan",
      role: "Strategy Advisor",
      company: "Former CTO Coinbase",
      expertise: ["Product Strategy", "Network States"],
      image: "team strategy advisor"
    },
    {
      name: "Meltem Demirors",
      role: "Industry Advisor",
      company: "CoinShares",
      expertise: ["Digital Assets", "Regulatory"],
      image: "team regulatory expert"
    }
  ];

  const team = [
    {
      name: "Sarah Kim",
      role: "Lead Instructor - DeFi",
      bio: "Former Compound core developer. Built automated market makers and lending protocols.",
      image: "team instructor defi",
      expertise: ["Smart Contracts", "AMM Design", "Risk Management"]
    },
    {
      name: "Marcus Thompson",
      role: "Lead Instructor - Gaming",
      bio: "Ex-Unity blockchain lead. Shipped 10+ Web3 games with millions of players.",
      image: "team instructor gaming",
      expertise: ["Game Development", "NFT Integration", "Player Economics"]
    },
    {
      name: "Priya Patel",
      role: "Lead Instructor - Infrastructure",
      bio: "Former Google Cloud engineer. Specialized in blockchain infrastructure and DevOps.",
      image: "team instructor infrastructure",
      expertise: ["Node Operations", "Cloud Architecture", "CI/CD"]
    },
    {
      name: "David Martinez",
      role: "Career Services Director",
      bio: "15 years in tech recruiting. Placed 200+ engineers at top Web3 companies.",
      image: "team career services",
      expertise: ["Technical Recruiting", "Salary Negotiation", "Interview Prep"]
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
            Back to Home
          </Button>
          
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              👥 Meet the Team
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              L'Équipe Behind Your Success
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Learn from industry pioneers, protocol creators, and successful entrepreneurs 
              who've built the Web3 ecosystem you'll be joining.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Founders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serial entrepreneurs and technical leaders who've built billion-dollar protocols
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
                    <h4 className="font-medium text-sm">Key Achievements:</h4>
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
            <h2 className="text-3xl md:text-4xl mb-4">Industry Mentors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get guidance from the builders of major Web3 protocols and companies
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
                    {mentor.role} at {mentor.company}
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
            <h2 className="text-3xl md:text-4xl mb-4">Core Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced instructors and support staff dedicated to your success
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
          <h2 className="text-3xl md:text-4xl mb-4">Want to Join Our Team?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to help shape the next generation of Web3 builders.
          </p>
          <Button size="lg" onClick={handleCTAClick}>
            Découvrir Plus
          </Button>
        </div>
      </section>
    </div>
  );
}