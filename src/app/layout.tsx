import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { fontMono, fontSans } from "@/lib/fonts";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "WASM AI",
    template: `%s - WASM AI`,
  },
  description: "Run Mistral in the browser, or any LLM.",
  icons: {
    icon: "/icon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    "images": [
      "/screenshot.png"
    ],
    "siteName": "WASM AI",
    "title": "WASM AI",
    "description": "Run Mistral in the browser, or any LLM.",
    "type": "website",
    "locale": "en_US",
    "url": "https://wasm-ai.vercel.app",
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            {/* @ts-ignore */}
            {/* <Header />/ */}
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
          {/* <TailwindIndicator /> */}
        </Providers>
      </body>
    </html>
  );
}
