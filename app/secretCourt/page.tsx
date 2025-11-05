"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";

Amplify.configure(outputs); // ✅ ensures it loads before Authenticator

export default function SecretPage() {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <main className="p-10 text-center">
                    <h1 className="text-3xl font-bold mb-4 text-green-600">
                        Welcome, {user?.username} 🎉
                    </h1>
                    <p className="text-lg">Welcome to your private court!.</p>
                    <div className="mx-auto mb-8 w-full max-w-2xl">
                        <Image
                            src="/pickleballCourt.jpg"
                            alt="Pickleball Court"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <button
                        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        onClick={signOut}
                    >
                        Sign Out
                    </button>
                </main>
            )}
        </Authenticator>
    );
}
