import Hero from '@/components/hero'
import About from '@/components/about'
import Products from '@/components/products'
import Craftsmanship from '@/components/craftsmanship'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Craftsmanship />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}