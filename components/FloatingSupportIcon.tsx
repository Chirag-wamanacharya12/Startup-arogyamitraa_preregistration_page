'use client';

import { useEffect, useState } from 'react';

export default function FloatingSupportIcon() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    (window as any).AgentInitializer = {
      init: (config: any) => {
        config.customizations = {
          ...config.customizations,
          position: 'right'
        };
        
        const originalInit = (window as any).AgentInitializer.init;
        if (originalInit && originalInit !== (window as any).AgentInitializer.init) {
          originalInit(config);
        }
      }
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019dda4b2d1174f9b8d8406735d758ad05b2/embed.js';
    script.async = true;
    document.head.appendChild(script);

    const popupInterval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }, 60000);

    return () => {
      clearInterval(popupInterval);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-bounce">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">Want help?</p>
              <p className="text-gray-600 text-sm mt-1">I&apos;m here to assist you!</p>
            </div>
            <button 
              onClick={() => setShowPopup(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
