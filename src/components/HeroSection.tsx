import { Button } from "@/components/ui/button";
import GoldSeparator from "@/components/GoldSeparator";

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById("registro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <GoldSeparator variant="ornament" className="mb-12" />
        
        <p className="text-elegant text-sm mb-6 tracking-[0.3em]">
          Nos complace invitarle a celebrar nuestra boda
        </p>
        
        <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
          Daniel
        </h1>
        
        <p className="text-primary text-2xl sm:text-3xl font-serif italic mb-4">&</p>
        
        <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
          Flor
        </h1>
        
        <GoldSeparator className="my-10" />
        
        <p className="text-elegant text-base sm:text-lg tracking-widest mb-12">
          30 de mayo de 2026
          <span className="block text-sm mt-2 text-muted-foreground/70">
            Coatepec, Veracruz
          </span>
        </p>
        
        <Button 
          variant="gold" 
          size="lg"
          onClick={scrollToForm}
        >
          Registrar asistencia
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
