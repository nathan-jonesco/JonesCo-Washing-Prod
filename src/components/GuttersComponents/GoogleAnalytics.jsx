import React, { useState, useEffect } from 'react';
import Script from 'next/script';

const Example = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('user-consent');
    if (consent === 'granted') {
      setConsentGiven(true);
      setConsentGranted();
    } else {
      setConsentDefaults();
    }

    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1000); // Show banner after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('user-consent', consent);
    if (consent === 'granted') {
      setConsentGranted();
    } else {
      setConsentDefaults();
    }
    setConsentGiven(consent === 'granted');
    setShowBanner(false);
  };

  const setConsentDefaults = () => {
    window.gtag?.('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
    });
  };

  const setConsentGranted = () => {
    window.gtag?.('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
    });

    // Set additional data collection parameters
    window.gtag?.('config', 'G-7842C2P52F', {
      'anonymize_ip': true,
      'send_page_view': true,
      'allow_ad_personalization_signals': true,
      'linker': {
        'domains': ['example.com']
      },
      'page_title': document.title,
      'page_path': window.location.pathname,
      'page_location': window.location.href,
      'user_id': 'USER_ID',
      'user_properties': {
        'user_type': 'free',
      },
      'content_group1': 'example-group'
    });
  };

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7842C2P52F"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7842C2P52F', { 'anonymize_ip': true, 'send_page_view': false });
        `}
      </Script>
      {showBanner && !consentGiven && (
        <div className="fixed inset-x-0 bottom-0 p-4 z-50 md:inset-x-auto md:bottom-4 md:right-4 flex justify-center md:justify-end">
          <div className="bg-white p-4 rounded-lg shadow-md ring-1 ring-gray-900/10 max-w-xs w-full md:max-w-sm md:w-auto text-center">
            <p className="text-xs text-gray-700">
              This site uses cookies. Read our{' '}
              <a href="/cookie-policy" className="text-JonesCo-Blue underline">
                cookie policy
              </a>.
            </p>
            <div className="mt-2 flex gap-2 justify-center">
              <button
                className="bg-JonesCo-Blue-700 text-white px-3 py-1 rounded-md"
                onClick={() => handleConsent('granted')}
              >
                Accept
              </button>
              <button
                className="bg-JonesCo-Blue-200 text-JonesCo-Blue-900 px-3 py-1 rounded-md"
                onClick={() => handleConsent('denied')}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Example;