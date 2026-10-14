import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crust Pizza Co. | Chicago-Style Thin Crust Pizza",
  description:
    "Chicago-style thin crust pizza made from scratch at Crust Pizza Co.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${robotoCondensed.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
