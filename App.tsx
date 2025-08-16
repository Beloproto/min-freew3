import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Features } from "./components/Features";
import { ProgramDetails } from "./components/ProgramDetails";
import { Application } from "./components/Application";
import { Footer } from "./components/Footer";
import { RouterProvider, useRouter } from "./components/Router";
import { TeamPage } from "./components/pages/TeamPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <ProgramDetails />
      <Application />
    </>
  );
}

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'team':
        return <TeamPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}