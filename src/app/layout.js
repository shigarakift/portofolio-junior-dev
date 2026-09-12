import { JetBrains_Mono, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bagas Alfattah R. / Linux Admin & Backend Developer",
  description: "Official portfolio of Bagas Alfattah R. (shigarakift) - SIJA SMKN 1 Cibinong student specializing in Linux Administration, Backend APIs, and Docker infrastructure.",
  keywords: ["shigarakift", "Bagas Alfattah R", "Linux Administration", "Backend Developer", "SMKN 1 Cibinong", "SIJA", "Docker", "Go", "Node.js"],
  authors: [{ name: "Bagas Alfattah R.", url: "https://github.com/shigarakift" }],
  openGraph: {
    title: "Bagas Alfattah R. / Linux Admin & Backend Developer",
    description: "Linux Server Administration, Backend Architecture, and Containerized Infrastructure.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagas Alfattah R. / Linux Admin & Backend Developer",
    description: "SIJA student at SMKN 1 Cibinong specializing in Linux server administration, backend APIs, and Docker.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${jetbrainsMono.variable} ${ibmPlexMono.variable} ${inter.variable} h-full bg-[#f5f4f2] antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f4f2] text-[#0a0a0a] overflow-x-hidden font-sans selection:bg-[#ff6b00]/20 selection:text-[#0a0a0a]">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
