export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">

      <div className="mx-auto max-w-7xl px-6 pt-10 sm:flex sm:items-center lg:px-8 lg:pt-12">
        <div className=":mt-0 mx-auto max-w-7xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="font-abhaya capitalize text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 lg:text-7xl">
            Premium, <br />
            Affordable <br />
            Clothing brand
          </h1>
          <p className="mt-2 sm:mt-6 text-sm sm:text-base lg:text-lg sm:leading-8 text-[#797979] sm:font-medium">
            Borcelle is the <span className='text-black'>#1</span> brand offering high-quality clothing at affordable prices.
          </p>
          <div className="mt-5 sm:mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="mx-auto flex lg:items-center max-w-lg mt-10 sm:mt-0 sm:ml-5 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
          <div className="max-w-3xl flex-1 sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 p-2 lg:-m-4 lg:p-4">
              <img
                alt="App screenshot"
                src="hero2.png"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
/*
style={{  
          backgroundImage: "url(" + "https://brixtonllc.myshopify.com/cdn/shop/files/HO24_Coors_fullmargin-section_DT.jpg?format=pjpg&v=1730918900&width=1512" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}

*/