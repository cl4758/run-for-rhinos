import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import StatsBar from '../components/dashboard/StatsBar';
import StatsSidebar from '../components/dashboard/StatsSidebar';
import mapboxgl from 'mapbox-gl';
import geoJson from '../lib/route.json';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: grid;
  margin: 0 3vw 0 2vw;
  grid-template-rows: 0.3fr 1fr; */
  /* @media (max-width: 768px) {
    height: 100%;
  } */
`;

const AnotherWrapper = styled.div`
margin-top: 2vh;
margin-left: 0.5vw;
  width: 98%;
  height: 98%;
  /* margin: 0 5vw 0 0; */
  display: grid;
  grid-template-columns: 0.2fr 1fr; 
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const MapWrapper = styled.div`
margin-top: 1vh;
/* margin-left: 1vw; */
width: 96%;
height: 90%;
& .map-container {
  height: 100%;
  width: 100%;
}

& .sidebar {
  /* background-color: rgba(35, 55, 75, 0.9); */
  color: #fff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 10vh;
  left: 3vw;
  margin: 12px;
  border-radius: 4px;
  width: 90%;
}
`;


const stats = [{
  title: 'Day',
  data: 3,
  goal: 90
}, {
  title: 'Location',
  data: 'somewhere'
}, {
  title: 'Distance',
  data: 98,
  metric: 'miles',
  goal: 3078
}, {
  title: 'Elevation',
  data: 3987,
  metric: 'ft'
}, {
  title: 'Steps',
  data: 123456
}, {
  title: 'Calories',
  data: 123456
}
];

const avgStats = [{
  title: 'Avg. Distance',
  data: 98,
  metric: 'miles',
  goal: 3078
}, {
  title: 'Avg. Elevation',
  data: 3987,
  metric: 'ft'
}, {
  title: 'Avg. Steps',
  data: 123456
}, {
  title: 'Avg. Calories',
  data: 123456
}
];

function Map() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lbGFpMDAiLCJhIjoiY2xhYnFramVvMDJzODN3bXU4NDBnYW5obyJ9.MXroMmxiw0sNHpwHFu7rxw';
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY2hyaXN0aW5lbGFpMDAiLCJhIjoiY2xhYnF4ZWN3MDF1bTN2cXczM2I4bWg4diJ9.dz7Y_IKDnuXkHNOHG-20Ug';
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-96);
  const [lat, setLat] = useState(38);
  const [zoom, setZoom] = useState(3.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  // geoJson.features.map((feature) =>
  //   new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
  // );

  // geoJson.features.map((feature) => {
  //   console.log(feature);
  //   new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map);
  // }
  // );



  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

  return (
    <Wrapper>
      {/* <StatsBar cards={stats} /> */}
      <div></div>
      <AnotherWrapper>
        <StatsBar cards={stats} />
        <MapWrapper>
          {/* <div className="sidebar">
          <StatsBar cards={stats} />
        </div> */}
          <div ref={mapContainer} className="map-container" />
        </MapWrapper>
      </AnotherWrapper>

    </Wrapper>
  );
}

export default Map;