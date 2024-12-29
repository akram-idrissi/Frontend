'use client'

import { useEffect } from "react"


export const RemoveXScroll = () => {

    useEffect(() => {
        document.getElementsByTagName("body")[0].classList.add("overflow-x-hidden");
    }, []);
}