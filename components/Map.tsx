import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lbGFpMDAiLCJhIjoiY2xhYnFramVvMDJzODN3bXU4NDBnYW5obyJ9.MXroMmxiw0sNHpwHFu7rxw';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(new mapboxgl.Map);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

}

export default Map;

