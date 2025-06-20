import { Geist, Geist_Mono } from "next/font/google";
import 'leaflet/dist/leaflet.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RakshaMitra AI",
  description: "AI-Powered Disaster Relief Coordination System - Real-time coordination between victims, volunteers, and authorities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        {/* Elfsight AI Chatbot Script */}
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
        {/* Elfsight AI Chatbot Widget */}
        <div className="elfsight-app-5475df7f-ebe2-4aa0-844d-9e0be67f992a" data-elfsight-app-lazy></div>
      </body>
    </html>
  );
}
