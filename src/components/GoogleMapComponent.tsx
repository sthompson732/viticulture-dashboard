import React, { useEffect, useRef } from 'react';
import { GoogleMapComponentProps } from '../types';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';

declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ mapOptions, apiKey, children }) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const deckOverlay = useRef<GoogleMapsOverlay | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      console.log('Initializing map...');
      if (!window.google) {
        console.error('Google Maps API failed to load.');
        return;
      }
      console.log('Google Maps API loaded successfully.');
      mapRef.current = new window.google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
      console.log('Map initialized:', mapRef.current);

      if (deckOverlay.current) {
        console.log('Setting map for deckOverlay');
        deckOverlay.current.setMap(mapRef.current);
      } else {
        console.log('Creating new GoogleMapsOverlay');
        deckOverlay.current = new GoogleMapsOverlay({ layers: [] });
        deckOverlay.current.setMap(mapRef.current);
      }

      if (children && mapRef.current) {
        console.log('Calling children with map');
        children(mapRef.current);
      }
    };

    if (!window.initMap) {
      console.log('Setting window.initMap');
      window.initMap = initializeMap;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.error('Error loading Google Maps API script.');
      };
      document.head.appendChild(script);
    } else {
      initializeMap();
    }

    return () => {
      if (mapRef.current) {
        console.log('Clearing mapRef');
        mapRef.current = null;
      }
      if (deckOverlay.current) {
        console.log('Clearing deckOverlay');
        deckOverlay.current.setMap(null);
        deckOverlay.current = null;
      }
    };
  }, [mapOptions, apiKey, children]);

  return <div id="map" style={{ height: '100vh', width: '100vw', position: 'relative' }}/>;
};

export default GoogleMapComponent;
