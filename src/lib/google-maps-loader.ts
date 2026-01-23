type GoogleMapsLoaderOptions = {
  apiKey?: string;
  language?: string;
  region?: string;
};

const loaderPromises = new Map<string, Promise<void>>();

export const loadGoogleMaps = ({ apiKey, language, region }: GoogleMapsLoaderOptions) => {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.google?.maps?.places) {
    return Promise.resolve();
  }

  if (!apiKey) {
    return Promise.reject(new Error('Google Maps API key is missing.'));
  }

  const languageParam = language ? `&language=${encodeURIComponent(language)}` : '';
  const regionParam = region ? `&region=${encodeURIComponent(region)}` : '';
  const cacheKey = `${apiKey}:${languageParam}:${regionParam}`;

  if (!loaderPromises.has(cacheKey)) {
    const loaderPromise = new Promise<void>((resolve, reject) => {
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
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places${languageParam}${regionParam}`;
      script.async = true;
      script.defer = true;
      script.dataset.googleMaps = 'places';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps script.'));
      document.head.appendChild(script);
    });
    loaderPromises.set(cacheKey, loaderPromise);
  }

  return loaderPromises.get(cacheKey) ?? Promise.resolve();
};
