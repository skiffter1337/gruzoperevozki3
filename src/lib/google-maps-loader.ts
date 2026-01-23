let loaderPromise: Promise<void> | null = null;

export const loadGoogleMaps = (apiKey?: string) => {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.google?.maps?.places) {
    return Promise.resolve();
  }

  if (!apiKey) {
    return Promise.reject(new Error('Google Maps API key is missing.'));
  }

  if (!loaderPromise) {
    loaderPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[data-google-maps="places"]'
      );

      if (existingScript) {
        existingScript.addEventListener('load', () => resolve());
        existingScript.addEventListener('error', () =>
          reject(new Error('Failed to load Google Maps script.'))
        );
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.dataset.googleMaps = 'places';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps script.'));
      document.head.appendChild(script);
    });
  }

  return loaderPromise;
};
