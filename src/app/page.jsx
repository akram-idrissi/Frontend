import Hero from '@/components/home/hero'
import Categories from '@/components/home/categories'
import BestSellers from '@/components/home/best-sellers'
import Whyus from '@/components/home/why-us'
import Testimonials from '@/components/home/testimonials'
import NewsLetter from '@/components/home/newsLetter'

export const dynamic = "force-static";

export default function Home() {

  return (
    <div className="bg-white">
      <main className="isolate">
        <Hero />
        <Categories />
        <BestSellers />
        <Whyus />
        <Testimonials />
        <NewsLetter />
      </main>
    </div>
  )
}
