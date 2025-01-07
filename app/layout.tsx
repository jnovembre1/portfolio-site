// app/layout.tsx
import '../styles/globals.css';
import { Geist, Geist_Mono } from "next/font/google";
import AOSInit from '../components/AOSInit'; // Import the AOS initialization component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joseph Novembre - Portfolio",
  description: "Portfolio website of Joseph Novembre showcasing skills, projects, and experience.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans dark:bg-gray-900 transition-colors duration-300`}>
        <AOSInit /> {/* Initialize AOS */}
        {children}
      </body>
    </html>
  );
}


