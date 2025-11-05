"use client";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-blue-600 text-white py-4 shadow-md z-50">
            <ul className="flex !flex-row items-center gap-8 px-10 text-lg font-semibold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/weather">Weather</Link></li>
                <li><Link href="/secretCourt">Secret Court</Link></li>
            </ul>
        </nav>
    );
}
