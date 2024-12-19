import { StarIcon } from '@heroicons/react/24/solid'


export default function Stars({numbers}) {
    return (
        <>
            {numbers.map((number) => (
                <StarIcon key={number} aria-hidden="true" className="h-5 w-5" style={{"color": "#F28833"}} />
            ))}
        </>
    )
}
