"use client"

import { Check, Play } from "lucide-react"
import Image from "next/image"
import Background from "../images/Background.jpg"

export default function LaunchBoxHero() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 lg:py-12 mt-15 mb-15">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-12 lg:gap-0">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-6">
              <p className="text-emerald-500 font-bold text-sm tracking-wider uppercase">
                What is LaunchBox?
              </p>
              <h1 className="text-2xl lg:text-5xl xl:text-4xl font-bold text-slate-800 leading-tight">
                A Place for Freelancers, <br className="hidden sm:block" />
                Remote Workers & Startups
              </h1>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Budget friendly pricing plans",
                "Fully furnished office space",
                "Unlimited refreshments",
                "Cafe & Meeting rooms",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative w-full max-w-xl h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <Image
              src={Background}
              alt="LaunchBox Office Preview"
              fill
              className="object-cover"
              priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <a
                href="https://youtu.be/1sd5_8bKw2s?si=cFURzDT0OqeB118B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-slate-800 hover:bg-gray-100 shadow-lg rounded-full px-6 py-3 font-semibold flex items-center gap-2 transition duration-200">
                  <Play className="w-5 h-5" />
                  Watch the Video
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
