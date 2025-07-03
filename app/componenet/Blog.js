import Image from "next/image"
import { ChevronDown } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "8 Compelling Reasons to Join a Coworking Space:  Top Tips and Essential Tools",
    date: "Apr 1 2024",
    image: "https://cdn.prod.website-files.com/66bb8659dbb6331afb5bb8a9/66d0b3cf070d6fa79ece58b1_5.avif",
    category: "BLOGS",
  },
  {
    id: 2,
    title: "The Benefits of Networking in Coworking Spaces: Why Connections Matter",
    date: "Mar 5 2024",
    image: "https://cdn.prod.website-files.com/66bb8659dbb6331afb5bb8a9/66d0b3d017d7f63134f88bdf_6.avif",
    category: "BLOGS",
  },
  {
    id: 3,
    title: "How to Choose the Perfect Coworking Space for Your Business",
    date: "Feb 15 2024",
    image: "https://cdn.prod.website-files.com/66bb8659dbb6331afb5bb8a9/66d0b3cf9b1ef63d357da60a_2.avif",
    category: "BLOGS",
  },
  {
    id: 4,
    title: "Remote Work vs Coworking: Finding Your Ideal Work Environment",
    date: "Jan 28 2024",
    image: "https://cdn.prod.website-files.com/66bb8659dbb6331afb5bb8a9/66d0b3cf63dc93ae58e5c236_3.avif",
    category: "BLOGS",
  },
]

const faqs = [
  {
    question: "What amenities are included at Launchbox Coworking?",
    answer:
      "Our coworking space includes high-speed WiFi, printing facilities, meeting rooms, kitchen area, coffee and tea, comfortable seating areas, and 24/7 access for members.",
  },
  {
    question: "How can I book a tour of Launchbox Coworking?",
    answer:
      "You can book a tour by calling us, sending a WhatsApp message, or filling out our online contact form. We offer tours Monday through Friday from 9 AM to 6 PM.",
  },
  {
    question: "Are there networking opportunities available at Launchbox Coworking?",
    answer:
      "Yes! We host regular networking events, workshops, and community gatherings. Members also naturally connect through our shared spaces and collaborative environment.",
  },
  {
    question: "Are there any community guidelines or rules at Launchbox Coworking?",
    answer:
      "We have simple guidelines to ensure everyone has a productive experience: respect shared spaces, keep noise levels considerate, clean up after yourself, and be professional in your interactions.",
  },
]

export default function BlogPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-lg font-bold text-green-500 rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Key Answers to Your Questions</h2>
          <div className="bg-green-400 rounded-2xl p-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-white hover:text-white/90 font-medium py-3 list-none">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="text-white/90 pb-4 pr-6">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
