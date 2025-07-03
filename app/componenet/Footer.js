import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import footerlogo from "../images/footerlogo.png";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo & Links */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image src={footerlogo} alt="Launchbox Logo" width={30} height={30} />
                <span className="font-bold text-base text-slate-800 tracking-wide whitespace-nowrap">
                  LAUNCHBOX
                </span>
              </div>

              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Links
              </h3>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
                <Link href="/blog" className="block text-gray-700 hover:text-gray-900 transition-colors">Blog</Link>
                <Link href="/contact" className="block text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
              </div>
            </div>

            {/* Plans */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Plans
              </h3>
              <div className="space-y-3">
                <Link href="/flexible-desks" className="block text-gray-700 hover:text-gray-900 transition-colors">Flexible Desks</Link>
                <Link href="/dedicated-seats" className="block text-gray-700 hover:text-gray-900 transition-colors">Dedicated Seats</Link>
                <Link href="/private-cabins" className="block text-gray-700 hover:text-gray-900 transition-colors">Private Cabins</Link>
                <Link href="/custom-offices" className="block text-gray-700 hover:text-gray-900 transition-colors">Custom Offices</Link>
                <Link href="/events" className="block text-gray-700 hover:text-gray-900 transition-colors">Events</Link>
                <Link href="/meeting-rooms" className="block text-gray-700 hover:text-gray-900 transition-colors">Meeting Rooms</Link>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Locations
              </h3>
              <div className="space-y-3 mb-6">
                <Link href="/dha-phase-5" className="block text-gray-700 hover:text-gray-900 transition-colors">DHA Phase 5</Link>
                <Link href="/dha-phase-4" className="block text-gray-700 hover:text-gray-900 transition-colors">DHA Phase 4</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full shadow-lg px-5 py-3 flex items-center gap-2 hover:bg-green-600 transition"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>

        {/* Call Button */}
        <a
          href="tel:+923001234567"
          className="bg-blue-600 text-white rounded-full shadow-lg px-5 py-3 flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>
    </>
  );
}
