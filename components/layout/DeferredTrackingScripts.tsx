"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

interface DeferredTrackingScriptsProps {
  metaPixelId: string;
  gaMeasurementId: string;
}

export function DeferredTrackingScripts({
  metaPixelId,
  gaMeasurementId,
}: DeferredTrackingScriptsProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!metaPixelId && !gaMeasurementId) return;

    const load = () => setShouldLoad(true);
    const timeoutId = window.setTimeout(load, 7000);

    const events: Array<keyof WindowEventMap> = [
      "pointerdown",
      "touchstart",
      "keydown",
      "scroll",
    ];

    const onFirstInteraction = () => {
      clearTimeout(timeoutId);
      load();
      events.forEach((event) => window.removeEventListener(event, onFirstInteraction));
    };

    events.forEach((event) =>
      window.addEventListener(event, onFirstInteraction, { passive: true, once: true })
    );

    return () => {
      clearTimeout(timeoutId);
      events.forEach((event) => window.removeEventListener(event, onFirstInteraction));
    };
  }, [metaPixelId, gaMeasurementId]);

  if (!shouldLoad) return null;

  return (
    <>
      {metaPixelId && (
        <>
          <Script
            id="meta-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
                n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init','${metaPixelId}');
                fbq('track','PageView');
              `,
            }}
          />
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="lazyOnload"
          />
          <Script
            id="google-analytics"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}
    </>
  );
}
