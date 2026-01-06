import HeroSection from "@/components/HeroSection";
import RegistrationSection from "@/components/RegistrationSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <RegistrationSection />
      <EventsSection />
      <Footer />
    </main>
  );
};

export default Index;
