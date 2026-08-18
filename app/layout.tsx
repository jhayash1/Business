import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/Whatsapp";

export const metadata: Metadata = {
  title: "DeepTech | Web Development & E-commerce Solutions",
  description:
    "deepTech builds modern websites, e-commerce applications and scalable web solutions for businesses.",
    keywords: [
    "Next.js developer",
    "React developer",
    "web development",
    "website development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
        <WhatsAppButton/>
      </body>
    </html>
  );
}