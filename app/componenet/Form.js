import { Check } from "lucide-react";

export default function Form() {
  return (
    <div className="bg-gradient-to-br from-green-400 to-green-500 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header text */}
        <p className="text-white text-lg font-medium text-center">What are you waiting for?</p>

        {/* Main heading */}
        <h1 className="text-white text-4xl font-bold text-center">Ready to Move In?</h1>

        {/* Contact form */}
        <div className="space-y-4">
          <div className="space-y-1 text-left">
            <label htmlFor="name" className="text-white font-bold">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full bg-white rounded-lg h-10 text-gray-900 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="space-y-1 text-left">
            <label htmlFor="phone" className="text-white font-bold">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full bg-white rounded-lg h-10 text-gray-900 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="space-y-1 text-left">
            <label htmlFor="email" className="text-white font-bold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-white rounded-lg h-10 text-gray-900 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button className="bg-white text-green-500 hover:bg-gray-100 font-medium px-7 py-2 rounded-lg transition-colors">
            Submit
          </button>
        </div>
      </div>

      {/* Features section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white">
        {[
          "Free Refreshments",
          "All Inclusive Pricing",
          "Vibrant Community",
          "High Speed Internet",
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1">
              <Check className="w-4 h-4 text-green-500" />
            </div>
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
