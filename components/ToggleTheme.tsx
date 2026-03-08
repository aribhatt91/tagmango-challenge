"use client"

import { useTheme } from "next-themes"
import Image from "next/image";
import { useEffect, useState } from "react";
const ToggleTheme = () => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }
    if(!mounted) return null;

    return (
        <button 
            onClick={toggleTheme}
            className="fixed bottom-10 right-10 z-10
            w-16 h-16 
            inline-flex justify-center items-center
            shadow-md bg-(--surface) 
            rounded-full 
            outline-none
            cursor-pointer">
            <span className="w-6 h-6">
                <Image src={resolvedTheme === 'light' ? '/images/moon.png' : '/images/sun.png'} alt='switch to dark theme' width={24} height={24} />
            </span>
        </button>
    )
}

export default ToggleTheme