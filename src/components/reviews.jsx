import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    rating: 5,
    content: 'Obsessed with these jeans! The high waist and stretch are just perfect, and they go with everything I own!',
    date: 'July 16, 2024',
    datetime: '2024-07-16',
    author: 'Ghazi Sofia',
    avatarSrc: '/testimonials/gs.jpg',
  },
  {
    id: 2,
    rating: 5,
    content: 'Loving my new sweater from this brand! It’s super cozy, fits perfectly, and the color is exactly as shown online!',
    date: 'July 12, 2024',
    datetime: '2024-07-12',
    author: 'Sofia Berbich',
    avatarSrc: '/testimonials/sb.jpg',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews() {
  return (
    <div className="bg-white">
      <div className='my-28 px-4 sm:px-0'>
        <h2 className="text-4xl sm:text-7xl sm:text-center font-abhaya font-bold mb-10">Customer Reviews</h2>

        <div className="-my-10">
          {reviews.map((review, reviewIdx) => (
            <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
              <div className="flex-none py-10">
                <img alt="" src={review.avatarSrc} className="h-10 w-10 rounded-full bg-gray-100" />
              </div>
              <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                <h3 className="font-medium text-gray-900">{review.author}</h3>
                <p>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  dangerouslySetInnerHTML={{ __html: review.content }}
                  className="prose prose-sm mt-4 max-w-none text-gray-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
