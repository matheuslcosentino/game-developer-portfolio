import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import TrailerModal from "@/components/TrailerModal";
import { handlePlayClick, buildYouTubeEmbedUrl, openLink } from "@/functions";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  image: string;
  tags: string[];
  link?: string;
  trailerUrl?: string;
  status?: string;
}

export default function ProjectCard({
  title,
  description,
  role,
  image,
  tags,
  link,
  trailerUrl,
  status = "Concluído",
}: ProjectCardProps) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <>
      <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 overflow-hidden group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          {status && (
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-foreground border border-primary/30 shadow-lg">
              {status}
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-primary">Função:</span>
            <span className="text-foreground">{role}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/30 rounded-full text-primary hover:bg-primary/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 pt-2">
            {link && (
              <Button
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all"
                onClick={() => openLink(link)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Acessar
              </Button>
            )}
            {trailerUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="text-foreground border-border hover:bg-card/50 hover:border-primary/30"
                onClick={() => handlePlayClick(trailerUrl, () => setIsTrailerOpen(true))}
              >
                <Play className="w-4 h-4 mr-2" />
                Play
              </Button>
            )}
          </div>
        </div>
      </Card>

      {trailerUrl && trailerUrl.trim() !== '' && (
        <TrailerModal 
          isOpen={isTrailerOpen} 
          trailerUrl={buildYouTubeEmbedUrl(trailerUrl)} 
          onClose={() => setIsTrailerOpen(false)}
        />
      )}
    </>
  );
}
