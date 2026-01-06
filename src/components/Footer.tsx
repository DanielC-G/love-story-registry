import GoldSeparator from "@/components/GoldSeparator";

const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center">
      <GoldSeparator variant="ornament" className="mb-8" />
      
      <p className="text-muted-foreground/70 text-sm tracking-widest">
        Gracias por acompañarnos.
      </p>
      
      <p className="text-primary font-serif text-xl mt-4 italic">
        D & F
      </p>
    </footer>
  );
};

export default Footer;
