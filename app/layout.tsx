import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "Joseph Ibok | Senior Software Engineer",
    template: "%s | Joseph Ibok",
  },
  description:
    "Senior Software Engineer specializing in reliable backend systems, payment infrastructure, and high-performance applications across Web2 and Web3. I help founders build scalable products that solve real business problems.",
  keywords: [
    "Joseph Ibok",
    "Senior Software Engineer",
    "Backend Engineer",
    "Frontend Engineer",
    "Mobile Engineer",
    "Full Stack Developer",
    "Fintech Engineer",
    "Payment Systems",
    "Stripe Connect",
    "Node.js",
    "TypeScript",
    "Python",
    "React Native",
    "FastAPI",
    "React",
    "Next.js",
    "Web3",
    "Nigeria",
  ],
  authors: [{ name: "Joseph Ibok" }],
  creator: "Joseph Ibok",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joseph-soliddev.vercel.app",
    title: "Joseph Ibok | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in reliable backend systems, payment infrastructure, and high-performance applications across Web2 and Web3.",
    siteName: "Joseph Ibok — SolidDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Ibok | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in reliable backend systems, payment infrastructure, and high-performance applications.",
    creator: "@cypherslopps",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
