import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";


const beVietnamPro = Be_Vietnam_Pro({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify the weights you need
  subsets: ['latin', 'vietnamese'], // Specify the necessary subsets
  display: 'swap', // Use 'swap' to ensure text is visible while the font is loading
  variable: '--font-be-vietnam-pro', // Optional: define a CSS variable
});

export const metadata: Metadata = {
  title: "TagMango Challenge",
  description: "Created by Aritra Bhattacharyya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
