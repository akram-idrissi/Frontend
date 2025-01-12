"use client"

import { useEffect, useState } from "react"

import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

export default function NavbarWrapper({ navigation }) {

    const [auth, setAuth] = useState(true);
    const [cartCount, setCartCount] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const user = document.cookie.split("; ").find(cookie => cookie.startsWith("user="));
        
        setAuth(user ? true : false);
        setCartCount(parseInt(localStorage.getItem("products-counter")) || 0);

        const handleStorageChange = () => { setCartCount(parseInt(localStorage.getItem("products-counter")) || 0); };
        window.addEventListener("products-counter", handleStorageChange);
        return () => window.removeEventListener("products-counter", handleStorageChange);
    }, []);

    return (
        <>
            <DesktopNavbar isAuth={auth} cartCount={cartCount} navigation={navigation} setMobileMenuOpen={setMobileMenuOpen} />
            <MobileNavbar isAuth={auth} cartCount={cartCount} navigation={navigation} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </>
    );

}