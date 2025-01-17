import { cookies } from 'next/headers';
import NavbarWrapper from './navbar-wrapper'

const navigation = [
    { name: 'Pants', href: '/categories/pants' },
    { name: 'T-shirts', href: '/categories/t-shirts' },
    { name: 'Hats', href: '/categories/hats' },
    { name: 'Jackets', href: '/categories/jackets' },
]


export default function Navbar({ sticky = false }) {
    const cookieStore = cookies();
    const user = cookieStore.get("user")?.value || null;
    const cartCount = cookieStore.get("products-counter")?.value || 0;
    
    return (
        <header className={`${sticky && "sticky"} top-0 z-50 bg-white/60 backdrop-blur-lg`}>
            <NavbarWrapper isAuth={user} cartCount={cartCount} navigation={navigation} />
        </header>
    )
}
