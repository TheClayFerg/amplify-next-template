"use client";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <main className="p-10 text-center flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4 text-green-600">About Us</h1>
                <p className="text-lg text-gray-700 mb-6">
                    My name is Clay and I like to play racquet sports and code.
                </p>
            </main>
        </div>
    );
}
