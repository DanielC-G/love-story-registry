import EventCard from "@/components/EventCard";
import GoldSeparator from "@/components/GoldSeparator";

const EventsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8">
          <EventCard
            title="Ceremonia religiosa"
            date="30 de mayo de 2026"
            time="12:00 h"
            venue="Iglesia de la Virgen de Guadalupe"
            address="5a Aldama, Centro, C.P. 91500, Coatepec, Veracruz"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=Iglesia+Virgen+de+Guadalupe+5a+Aldama+Centro+Coatepec+Veracruz"
          />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-full max-h-64 bg-primary/20" />
          </div>
          
          <div className="md:hidden">
            <GoldSeparator variant="wide" className="my-4" />
          </div>
          
          <EventCard
            title="Recepción"
            time="Al término de la ceremonia"
            venue="Salón Campestre Los Encinos"
            address="Camino a Micoxtla, pasando el panteón, Centro, C.P. 91240, Xico, Veracruz"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=Salon+Campestre+Los+Encinos+Xico+Veracruz"
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
