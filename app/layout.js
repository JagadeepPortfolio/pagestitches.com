import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import CursorGlow from "@/components/ui/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Stitch Website — Professional Websites for Local Businesses in 48 Hours | Hyderabad",
  description:
    "AI-powered web studio in Hyderabad. We build professional, mobile-first websites for clinics, restaurants, CAs, and local businesses. Starting ₹5,999. Delivered in 48 hours.",
  keywords: "web design Hyderabad, website builder Hyderabad, affordable website India, small business website",
  openGraph: {
    title: "Stitch Website — Professional Websites in 48 Hours",
    description: "AI-powered web studio in Hyderabad. Professional websites starting ₹5,999.",
    url: "https://stitchwebsite.com",
    siteName: "Stitch Website",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Stitch Website",
              description:
                "AI-powered web studio in Hyderabad building professional websites for local businesses in 48 hours.",
              url: "https://stitchwebsite.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              priceRange: "₹₹",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="film-grain">
        <CursorGlow />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
