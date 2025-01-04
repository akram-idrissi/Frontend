import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CategoryWrapper from './category-wrapper';


export default function CategoryListing() {
  
  return (
    <div className="bg-white">
      <Navbar sticky={true} />
      <CategoryWrapper />
      <Footer />
    </div>
  )
}
