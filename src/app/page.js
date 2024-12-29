import Navbar from '@/components/navbar'
import Hero from '@/components/home/hero'
import Categories from '@/components/home/categories'
import BestSellers from '@/components/home/best-sellers'
import Whyus from '@/components/home/why-us'
import Testimonials from '@/components/home/testimonials'
import NewsLetter from '@/components/home/newsLetter'
import Footer from '@/components/footer'


export default function Home() {

  return (
    <div className="bg-white">
      {/*<Tape sticky={true} />*/}
      <Navbar sticky={true} />

      <main className="isolate">
        <Hero />
        <Categories />
        <BestSellers />
        <Whyus />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </main>
    </div>
  )
}
