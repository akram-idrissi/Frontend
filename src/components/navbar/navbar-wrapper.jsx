"use client"

import { useState } from "react"

import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

export default function NavbarWrapper({ isAuth, cartCount, navigation }) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <DesktopNavbar isAuth={isAuth} cartCount={cartCount} navigation={navigation} setMobileMenuOpen={setMobileMenuOpen} />
            <MobileNavbar isAuth={isAuth} cartCount={cartCount} navigation={navigation} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </>
    );

}