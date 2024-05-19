// components/GoogleAdsConversionTracking.jsx
import Script from 'next/script';
import { useEffect } from 'react';

const GoogleAdsConversionTracking = () => {

  useEffect(() => {
    // Execute the Google Ads conversion tracking script once the component mounts
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'AW-16543948897'); 
  }, []); 

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16543948897"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleAdsConversionTracking;
