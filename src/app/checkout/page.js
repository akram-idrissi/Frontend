import Form from './form'
import Navbar from '@/components/navbar'
import OrderSummary from './orderSummary'
import MobileOrderSummary from './mobileOrderSummary'


export default function Checkout() {


  return (
    <>
      <Navbar sticky={true} />
      <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">


        <h1 className="sr-only">Checkout</h1>

        {/* Mobile order summary */}
        <MobileOrderSummary />


        {/* Order summary */}
        <OrderSummary />

        {/* Checkout form */}
        <Form />
      </main>
    </>
  )
}
