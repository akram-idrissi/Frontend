'use client'


const details = {
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
}

export default function Details() {

  return (
    <>

      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Description</h2>

        <div
          dangerouslySetInnerHTML={{ __html: details.description }}
          className="prose prose-sm mt-4 text-gray-500"
        />
      </div>

      <div className="mt-8 border-t border-gray-200 pt-8">
        <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

        <div className="prose prose-sm mt-4 text-gray-500">
          <ul role="list">
            {details.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
