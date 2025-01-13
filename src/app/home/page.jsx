import BestSellers from "@/components/home/best-sellers";
import Categories from "@/components/home/categories";
import Hero from "@/components/home/hero";
import NewsLetter from "@/components/home/newsLetter";
import Testimonials from "@/components/home/testimonials";
import Whyus from "@/components/home/why-us";

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
