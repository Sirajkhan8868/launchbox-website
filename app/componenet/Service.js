"use client"
import { Diamond, Coffee, Target, Car, Zap, DollarSign } from "lucide-react"

const services = [
  {
    title: "Rapid Internet",
    description: "Internet that takes you into the future.",
    icon: Diamond,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Unlimited Drinks",
    description: "Unlimited Tea & Coffee to recharge you",
    icon: Coffee,
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "Exclusive Discounts",
    description: "Get 20% off exclusive brands in DHA",
    icon: Target,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Free Parking",
    description: "Wave goodbye to the hassle of finding a spot",
    icon: Car,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Backup Power",
    description: "Keep your work flowing when the unexpected happens.",
    icon: Zap,
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "Flexible Plans",
    description: "One size does not fit all. Contact us for our plans",
    icon: DollarSign,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
]

const Service = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-700">Our Services</h2>
        <h1 className="mb-12 text-center text-5xl font-bold text-blue-950">We've Got You Covered
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center font-bold text-gray-100"
              >

                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-9 h-9 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Service
