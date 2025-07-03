"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"

export default function PricingPage() {
    const plans = [
        {
            name: "FLEXIBLE",
            price: "19,500",
            period: "/Month",
            features: [
                "Access to Coworking",
                "Access to Events",
                "5 Meeting Room Hours",
                "Access to Cafe",
                "Limited Refreshments",
            ],
            highlighted: false,
        },
        {
            name: "DEDICATED",
            price: "22,500",
            period: "/Month",
            features: [
                "Dedicated Seat",
                "Access to Events",
                "15 Meeting Room Hours",
                "Access to Cafe & More",
                "Unlimited Refreshments",
            ],
            highlighted: true,
        },
        {
            name: "PRIVATE CABIN",
            price: "20,000",
            period: "/Person",
            features: [
                "Dedicated Private Room",
                "Capacity up to 8 Persons",
                "20 Meeting Room Hours",
                "Access to Cafe & More",
                "Unlimited Refreshments",
            ],
            highlighted: false,
        },
    ]

    const testimonials = [
        `"From my first day at Launchbox,\nit's clear it's more than a space;\nit's a community that fuels growth and connections,\nempowering us all."`,
        `"From my first day at Launchbox, it was clear it's more than a space; it's a community that fuels growth and connections, empowering us all."`,
        `"I'm absolutely blown away by the new Boost template. You have to try it!"`,
        `"Collaborating with others at Launchbox\nhas opened doors to projects I never imagined."`
    ]

    const authors = [
        "Saad Khan",
        "Co Founder at Planet Mist",
        "Aisha Amjad Fraction",
        "Hassan Malik"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-lg mb-4 font-bold text-green-700">SELECT A PLAN</h3>
                    <h1 className="text-5xl font-bold text-blue-950 mb-4">Pricing</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center">
                        Take as long as you need to get your site just right.
                        No trial, <br /> no fees, no risk. Only upgrade when you are ready to ship.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-lg border shadow-sm p-6 flex flex-col h-full 
                            ${plan.highlighted ? "bg-green-400 text-white border-green-400" : "bg-white border-gray-200"}`}
                        >
                            {/* Card Header */}
                            <div className="text-center pb-4">
                                <div className={`text-sm font-medium tracking-wide mb-4 
                                    ${plan.highlighted ? "text-white" : "text-gray-500"}`}>
                                    {plan.name}
                                </div>
                                <div className="flex items-baseline justify-center">
                                    <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-lg ml-1 ${plan.highlighted ? "text-white" : "text-gray-600"}`}>
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* Card Features */}
                            <div className="flex-1 flex flex-col">
                                <div className="space-y-4 flex-1">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center space-x-3">
                                            <div className={`h-6 w-6 flex items-center justify-center rounded-full 
                                                ${plan.highlighted ? "bg-white text-green-500" : "bg-green-100 text-green-500"}`}>
                                                <Check className="h-4 w-4" />
                                            </div>
                                            <span className={`${plan.highlighted ? "text-white" : "text-gray-700"}`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <div className="pt-6 mt-auto">
                                    <button
                                        className={`w-full py-2 px-4 rounded-md text-sm font-bold transition-colors shadow-sm border 
                                        ${plan.highlighted
                                            ? "bg-white text-green-400 border-gray-300 hover:bg-gray-100"
                                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                                        }`}
                                    >
                                        Try for free
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Section */}
                <div className="text-center mt-16 transition-all duration-500 ease-in-out">
                    <h5 className="font-bold text-lg max-w-2xl mx-auto text-gray-700 transition-opacity duration-700 opacity-100">
                        {testimonials[currentIndex].split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </h5>

                    <h2 className="mt-2 text-green-700 font-semibold text-md">
                        — {authors[currentIndex]}
                    </h2>
                </div>
            </div>
        </div>
    )
}
