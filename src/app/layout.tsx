
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--loaded-roboto",
});

export const metadata: Metadata = {
  title: "Thanya Internship",
  description: "Discover your next great read.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-full flex flex-col font-roboto antialiased">
        {children}
      </body>
    </html>
  );
}
