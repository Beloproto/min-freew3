export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl mb-4">Web3 Hacker House</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Donner les moyens à la prochaine génération de développeurs Web3 une expérience pratique, 
              grâce à une formation immersive, et un mentorat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Program</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mentors</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Alumni</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>webhackerhouse@gmail.com</li>
              <li>Abidjan, Riviera</li>
              <li>+225 0758473042</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Web3 Hacker House. All rights reserved. Built by Abidjan Builders 🇨🇮</p>
        </div>
      </div>
    </footer>
  );
}