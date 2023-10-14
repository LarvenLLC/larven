"use client"

import '@/styles/globals.css'
import { useEffect } from 'react'
import Script from "next/script"
import type { Metadata } from 'next'
import Outfit from '@/styles/font';

// Local imports
import AuthProvider, { useAuth } from "@/contexts/authProvider"

const metadata: Metadata = {
  title: 'Larven Tanzania',
  description: 'Larven Tanzania',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { onAuthStateChanged } = useAuth();

  useEffect(() => {
    // @ts-ignore
    onAuthStateChanged((user) => {
      if (!user) {
        // sign in anonymously
        console.log("no user")
      }
    });
  }, [onAuthStateChanged]);

  return (
    <html lang="en">
      <body className={`${Outfit.variable} font-sans`}>
        {/* @ts-ignore */}
        <AuthProvider>
          {children}
        </AuthProvider>

        {/* <!--Start of Tawk.to Script--> */}
        <Script
          id="tawk_to"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/650a0be8b1aaa13b7a77c77a/1hanjt1l9';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode?.insertBefore(s1, s0);
          })();
          `
          }}
        />
        {/* <!--End of Tawk.to Script--> */}
      </body>
    </html>
  )
}
