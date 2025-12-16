// app/layout.tsx

import '../styles/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import CustomCursor from '@/components/CustomCursor';
import AOSInit from '@/components/AOSInit';
import Analytics from '@/components/Analytics';
import SectionIndicator from '@/components/SectionIndicator';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Joseph Novembre - Portfolio',
  description: 'Portfolio website of Joseph Novembre showcasing skills, projects, and experience.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-T0B7C3LCTQ';

  return (
    <html lang="en">
      <head>
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          font-sans dark:bg-gray-900
          transition-colors duration-300
          cursor-none
        `}
      >
        <SectionIndicator />
        <CustomCursor />
        <AOSInit />
        {children}
        {GA_TRACKING_ID && <Analytics trackingId={GA_TRACKING_ID} />}
      </body>
    </html>
  );
}
