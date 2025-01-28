// app/components/Analytics.jsx

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Analytics = ({ trackingId }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', trackingId, {
        page_path: pathname,
      });
    }
  }, [pathname, trackingId]);

  return null;
};

export default Analytics;
