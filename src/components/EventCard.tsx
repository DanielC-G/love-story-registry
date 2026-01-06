import { MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoldSeparator from "@/components/GoldSeparator";

interface EventCardProps {
  title: string;
  date?: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
}

const EventCard = ({ title, date, time, venue, address, mapsUrl }: EventCardProps) => {
  return (
    <div className="text-center">
      <h2 className="heading-formal text-2xl sm:text-3xl mb-6">
        {title}
      </h2>
      
      <GoldSeparator className="mb-8" />
      
      <div className="space-y-4 mb-8">
        {date && (
          <div className="flex items-center justify-center gap-3 text-elegant">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
        )}
        
        <div className="flex items-center justify-center gap-3 text-elegant">
          <Clock className="w-4 h-4 text-primary" />
          <span>{time}</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 text-elegant">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-medium text-foreground">{venue}</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            {address}
          </p>
        </div>
      </div>
      
      <Button 
        variant="gold-outline" 
        size="default"
        asChild
      >
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir en Google Maps
        </a>
      </Button>
    </div>
  );
};

export default EventCard;
