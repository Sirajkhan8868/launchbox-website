"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const originalImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&auto=format" },
  { id: 2, src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop&auto=format" },
  { id: 3, src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop&auto=format" },
  { id: 4, src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&auto=format" },
  { id: 5, src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop&auto=format" },
  { id: 6, src: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop&auto=format" },
  { id: 7, src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format" },
  { id: 8, src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop&auto=format" },
  { id: 9, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&auto=format" },
  { id: 10, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&auto=format" },
];

// Shuffle function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ImageCarousel() {
  const [images, setImages] = useState(originalImages);

  useEffect(() => {
    const updateImages = () => {
      setImages(shuffleArray(originalImages));
    };
    updateImages();
    const interval = setInterval(updateImages, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-green-800 text-lg font-bold tracking-wide mb-2">
          BEHIND THE SCENES
        </h2>
        <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Everyday Life at <br /> Launchbox
        </h3>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        <div className="flex gap-6 animate-infinite-scroll">
          {[...images, ...images].map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative group w-80 h-60">
                <Image
                  src={image.src}
                  alt="Workspace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
