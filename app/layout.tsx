import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "deepTech | Web Development & E-commerce Solutions",
  description:
    "deepTech builds modern websites, e-commerce applications and scalable web solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}