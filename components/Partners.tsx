import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Partners() {
  const partners = [
    {
      name: "Polygon",
      logo: "polygon blockchain logo",
      description: "Layer 2 Scaling Solutions"
    },
    {
      name: "Uniswap", 
      logo: "uniswap defi logo",
      description: "Decentralized Exchange"
    },
    {
      name: "Aave",
      logo: "aave defi lending logo", 
      description: "Lending Protocol"
    },
    {
      name: "Chainlink",
      logo: "chainlink oracle logo",
      description: "Decentralized Oracles"
    },
    {
      name: "The Graph",
      logo: "the graph protocol logo",
      description: "Indexing Protocol"
    },
    {
      name: "OpenSea",
      logo: "opensea nft marketplace logo",
      description: "NFT Marketplace"
    },
    {
      name: "Compound",
      logo: "compound defi logo",
      description: "Autonomous Interest Rates"
    },
    {
      name: "1inch",
      logo: "1inch dex aggregator logo", 
      description: "DEX Aggregator"
    },
    {
      name: "Synthetix",
      logo: "synthetix derivatives logo",
      description: "Derivatives Trading"
    },
    {
      name: "MakerDAO",
      logo: "makerdao dai logo",
      description: "Decentralized Stablecoin"
    },
    {
      name: "Arbitrum",
      logo: "arbitrum layer2 logo",
      description: "Layer 2 Solution"
    },
    {
      name: "Optimism",
      logo: "optimism layer2 logo",
      description: "Optimistic Rollups"
    }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-accent/5 border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-2xl md:text-3xl mb-4">
            Our Partners & Collaborators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work closely with leading Web3 protocols and companies to provide real-world experience and job opportunities
          </p>
        </div>

        {/* Sliding Partners */}
        <div className="relative">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .partners-scroll {
              animation: scroll 30s linear infinite;
            }
            .partners-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex partners-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 px-8 mx-4"
              >
                <div className="flex flex-col items-center justify-center h-24 group hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-16 flex items-center justify-center mb-2 bg-background rounded-lg border border-border/20 group-hover:border-border/40 transition-colors shadow-sm">
                    <ImageWithFallback
                      src=""
                      alt={`${partner.name} logo`}
                      className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                      {partner.name}
                    </div>
                    <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {partner.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade gradients */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-accent/5 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Partnership stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Industry Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Job Placements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Want to partner with us?
          </p>
          <button className="text-primary hover:text-primary/80 transition-colors font-medium text-sm">
            Become a Partner →
          </button>
        </div>
      </div>
    </section>
  );
}