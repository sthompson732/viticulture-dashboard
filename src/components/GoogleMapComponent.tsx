import React, { useEffect, useRef } from 'react';

interface GoogleMapComponentProps {
  mapOptions: google.maps.MapOptions;
  apiKey: string;
  children: (map: google.maps.Map | null) => React.ReactNode;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ mapOptions, apiKey, children }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.onload = () => {
        const newMap = new google.maps.Map(mapRef.current!, mapOptions);
        setMap(newMap);
        console.log('Map initialized:', newMap);
      };
      document.head.appendChild(script);
    }
  }, [mapRef, map, apiKey, mapOptions]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }}>
      {map && children(map)}
    </div>
  );
};

export default GoogleMapComponent;
