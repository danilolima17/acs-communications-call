import MobileDetect from 'mobile-detect';
import { useEffect, useState } from 'react';

const detectMobileSession = (userAgent: string): boolean => {
  const mobileDetect = new MobileDetect(userAgent);
  return !!mobileDetect.mobile();
};

/**
 * Detect if the app is running in a mobile browser and update if that changes (e.g. when switching to a mobile browser in a browser emulator)
 * @returns true if this detects the app is running in a mobile browser
 */
export const useIsMobile = (): boolean => {
  const [isMobileSession, setIsMobileSession] = useState<boolean>(false);

  useEffect(() => {
    // Verificar se estamos no lado do cliente antes de acessar window
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      setIsMobileSession(detectMobileSession(userAgent));

      const updateIsMobile = (): void => {
        // O string userAgent às vezes não é atualizado sincronamente quando o evento `resize` é disparado.
        setTimeout(() => {
          setIsMobileSession(detectMobileSession(window.navigator.userAgent));
        });
      };

      window.addEventListener('resize', updateIsMobile);

      return () => {
        window.removeEventListener('resize', updateIsMobile);
      };
    }
  }, []);

  return isMobileSession;
};

