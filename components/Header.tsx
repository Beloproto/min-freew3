import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { useRouter } from "./Router";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateTo, currentPage } = useRouter();

  const navigationItems = [
    { name: "L'Équipe", page: "team" as const }
  ];

  const handleCTAClick = () => {
    window.open('https://calendar.app.google/9ZSD7cqMXBgWkSvD8', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button 
              onClick={() => navigateTo('home')} 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="text-2xl">🚀</div>
              <span className="text-lg font-semibold">Web3 Hacker House</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page 
                    ? 'text-foreground border-b-2 border-primary pb-1' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button size="sm" onClick={handleCTAClick}>
              S'inscrire Maintenant
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-xl">🚀</div>
                    <span className="font-semibold">Web3 Hacker House</span>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        navigateTo(item.page);
                        setIsOpen(false);
                      }}
                      className={`text-lg font-medium transition-colors py-2 text-left ${
                        currentPage === item.page 
                          ? 'text-foreground border-l-2 border-primary pl-3' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
                
                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      handleCTAClick();
                      setIsOpen(false);
                    }}
                  >
                    S'inscrire Maintenant
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}