import React, { useEffect, useRef } from 'react';

interface GoogleMapComponentProps {
  mapOptions: google.maps.MapOptions;
  apiKey: string;
  children: (map: google.maps.Map) => React.ReactNode;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ mapOptions, apiKey, children }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const loader = new (window as any).google.maps.plugins.loader.Loader({
      apiKey,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current && !map.current) {
        map.current = new google.maps.Map(mapRef.current, mapOptions);
        console.log('Map initialized');
      }
    });
  }, [apiKey, mapOptions]);

  return (
    <div style={{ height: '100vh', width: '100%' }} ref={mapRef}>
      {map.current && children(map.current)}
    </div>
  );
};

export default GoogleMapComponent;
