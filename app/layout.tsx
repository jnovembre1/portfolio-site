// app/layout.tsx

import { ReactNode } from 'react';
import Script from 'next/script';
import Analytics from '../components/Analytics';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-T0B7C3LCTQ'; 

export const metadata = {
  title: 'Joseph Novembre - Portfolio',
  description: 'Portfolio website of Joseph Novembre showcasing skills, projects, and experience.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Scripts */}
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
      <body>
        {children}
        {GA_TRACKING_ID && <Analytics trackingId={GA_TRACKING_ID} />}
      </body>
    </html>
  );
}

