import React from 'react'
import Navbar from './componenet/Navbar'
import Hero from './componenet/Hero'
import Service from './componenet/Service'
import Plan from './componenet/Plan'
import BlogSection from './componenet/Blog'
import Form from './componenet/Form'
import Footer from './componenet/Footer'
import Original from './componenet/Original'
import Launchbox from './componenet/launchbox'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Launchbox />
      <Service />
      <Original />
      <Plan />
      <BlogSection />
      <Form />
      <Footer />
    </div>
  )
}

export default page