import type { Metadata } from "next";
import { Quicksand, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HomeBackground from "@/components/HomeBackground";
import { cn } from "@/lib/utils";

const quicksand = Quicksand({
  weight: ["400", "500", "700", "300", "600"],
  subsets: ["latin-ext"],
});
const space_Grotesk = Space_Grotesk({
  weight: ["400", "500", "700", "300", "600"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Kiran Kumar",
  description: "Software Dev. portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          space_Grotesk.className,
          "bg-gradient-to-r from-violet-500/35 via-purple-500/35 to-indigo-500/45"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <HomeBackground />
          <main
            className="max-w-5xl p-2 relative mx-auto max-h-screen "
            suppressHydrationWarning={true}
          >
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
