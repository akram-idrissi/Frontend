import NavbarWrapper from './navbar-wrapper'

const navigation = [
    { name: 'Pants', href: '/categories/pants' },
    { name: 'T-shirts', href: '/categories/t-shirts' },
    { name: 'Hats', href: '/categories/hats' },
    { name: 'Jackets', href: '/categories/jackets' },
]


export default function Navbar({ sticky = false }) {

    return (
        <header className={`${sticky && "sticky"} top-0 z-50 bg-white/60 backdrop-blur-lg`}>
            <NavbarWrapper navigation={navigation} />
        </header>
    )
}
