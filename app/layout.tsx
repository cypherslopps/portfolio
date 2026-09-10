import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Joseph - SolidDev",
  description: "Personal Repository",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="favicon.png" />
      </head>
      <body className={`antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
