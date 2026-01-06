import GoldSeparator from "@/components/GoldSeparator";

const FORM_EMBED_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

const RegistrationSection = () => {
  return (
    <section id="registro" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading-formal text-2xl sm:text-3xl mb-6">
          Registro
        </h2>
        
        <GoldSeparator className="mb-8" />
        
        <p className="text-elegant text-base mb-4">
          Para una mejor organización, confirma tu asistencia mediante el siguiente formulario.
        </p>
        
        <p className="text-muted-foreground/60 text-sm mb-10 italic">
          La información se utilizará únicamente para la organización del evento.
        </p>
        
        <div className="w-full bg-background rounded-lg shadow-sm border border-border overflow-hidden">
          <iframe
            src={FORM_EMBED_URL}
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulario de registro"
            className="w-full min-h-[500px] sm:min-h-[600px]"
          >
            Cargando formulario...
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
