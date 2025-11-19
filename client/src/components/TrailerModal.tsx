import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface TrailerModalProps {
  isOpen: boolean;
  trailerUrl: string;
  onClose: () => void;
}

export default function TrailerModal({ isOpen, trailerUrl, onClose }: TrailerModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 aspect-video rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* YouTube iframe */}
        <iframe
          width="100%"
          height="100%"
          src={`${trailerUrl}?autoplay=1`}
          title="Game Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
