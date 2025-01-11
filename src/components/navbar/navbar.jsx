import useCookies from '../hooks';
import NavbarWrapper from './navbar-wrapper'

const navigation = [
    { name: 'Pants', href: '/categories/pants' },
    { name: 'T-shirts', href: '/categories/t-shirts' },
    { name: 'Hats', href: '/categories/hats' },
    { name: 'Jackets', href: '/categories/jackets' },
]


const getCookies = () => {
    const cookieKeys = ["user", "products-counter"]; 
    const cookies = useCookies(cookieKeys);
    return cookies;
}

export default function Navbar({ sticky = false }) {
    const cookies = getCookies();
    const isAuth = cookies["user"];
    const cartCount = cookies["products-counter"];

    return (
        <header className={`${sticky && "sticky"} top-0 z-50 bg-white/60 backdrop-blur-lg`}>
            <NavbarWrapper  isAuth={isAuth} cartCount={cartCount} navigation={navigation} />
        </header>
    )
}
