"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const original = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&auto=format",
    alt: "Modern Coworking Space",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop&auto=format",
    alt: "Business Meeting Room",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop&auto=format",
    alt: "Creative Workspace",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&auto=format",
    alt: "Office Networking Event",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop&auto=format",
    alt: "Startup Team Working",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop&auto=format",
    alt: "Conference Room Setup",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format",
    alt: "Freelancer Workspace",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop&auto=format",
    alt: "Office Kitchen Area",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&auto=format",
    alt: "Collaborative Work Zone",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&auto=format",
    alt: "Private Office Space",
  },
]

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function ImageCarousel() {
  const [randomizedImages, setRandomizedImages] = useState(original)

  useEffect(() => {
    const randomizeImages = () => {
      setRandomizedImages(shuffleArray(original))
    }

    randomizeImages()
    const interval = setInterval(randomizeImages, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">BEHIND THE SCENES
        </h2>
        <p className="text-gray-600 text-lg"></p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent z-10"></div>

        <div className="flex animate-infinite-scroll">
          {[...randomizedImages, ...randomizedImages, ...randomizedImages].map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 mx-4 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:animate-none"
            >
              <div className="relative group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-80 h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
