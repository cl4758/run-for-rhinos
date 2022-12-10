import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import StatsBar from '../components/dashboard/StatsBar';
import StatsSidebar from '../components/dashboard/StatsSidebar';
import mapboxgl from 'mapbox-gl';
import geoJson from '../lib/route.json';
import StatsChart from '../components/dashboard/StatsChart';
import Map, { FullscreenControl, GeolocateControl, Layer, LayerProps, Marker, NavigationControl, Popup, ScaleControl, Source } from 'react-map-gl';
import Markers from '../lib/markers.json';
import Pin from '../components/Pin';
import { geoJSON } from 'leaflet';
import * as geojson from 'geojson';



const StatsWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  /* margin: 0 3vw 0 2vw; */
  grid-template-rows: 10% auto;
  /* @media (max-width: 768px) {
    height: 100%;
  } */
`;

const LocationWrapper = styled.div`
margin-top: 1vh;
/* margin-left: 1vw; */
  padding-left: 7vw;
  box-sizing: border-box;

`;

const AnotherWrapper = styled.div`
  padding-top: ${props => props.style ? props.style.marginTop : '0'};
  /* margin-top: 2vh;
  margin-left: 0.5vw; */
  width: 100%;
  height: 100%;
  /* margin: 0 5vw 0 0; */
  display: grid;
  grid-template-columns: 15% auto; 
  @media (max-width: 768px) {
    height: 100%;
  }
`;


const MapWrapper = styled.div`
/* margin-top: 1vh; */
/* margin-left: 1vw; */
  width: 96%;
  height: 100%;
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

const Wrapper = styled.div`
width: 100%`
  ;

const ScrollArea = styled.div`
  height: ${props => props.style ? props.style.height : '89vh'};
  width: 100%;
  /* height: 100%;
  width: 100%; */
  /* margin-top: 13vh; */
  background-color: ${props => props.style?.background};
`;



interface MarkerProps {
  city: string,
  state: string,
  longitude: number,
  latitude: number
}

const pointLayer: LayerProps = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};



function pointOnCircle({ center, angle, radius }: { center: [number, number], angle: number, radius: number }) {
  return {
    type: 'Point',
    coordinates: [center[0] + Math.cos(angle) * radius, center[1] + Math.sin(angle) * radius]
  };
}

function Tracking({ totals, graph }: { totals: any, graph: any }) {
  // mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lbGFpMDAiLCJhIjoiY2xhYnFramVvMDJzODN3bXU4NDBnYW5obyJ9.MXroMmxiw0sNHpwHFu7rxw';
  mapboxgl.accessToken = "pk.eyJ1IjoiY2hyaXN0aW5lbGFpMDAiLCJhIjoiY2xhYnF4ZWN3MDF1bTN2cXczM2I4bWg4diJ9.dz7Y_IKDnuXkHNOHG-20Ug";
  // const mapContainer = useRef(null);
  // const map = useRef<mapboxgl.Map | null>(null);
  // const [lng, setLng] = useState(-96);
  // const [lat, setLat] = useState(38);
  // const [zoom, setZoom] = useState(3.5);


  const stats = [{
    title: 'Day',
    data: totals.day,
    goal: 90
  }, {
    title: 'Distance',
    data: totals.distance,
    metric: 'miles',
    goal: 3078
  }, {
    title: 'Elevation',
    data: totals.elevation,
    metric: 'ft'
  }, {
    title: 'Steps',
    data: totals.steps
  }, {
    title: 'Calories',
    data: totals.calories
  }];

  const avgStats = [
    {
      title: 'Avg. Distance',
      data: (totals.distance / totals.day).toFixed(2),
      metric: 'miles',
      goal: 3078
    }, {
      title: 'Avg. Elevation',
      data: (totals.elevation / totals.day).toFixed(2),
      metric: 'ft'
    }, {
      title: 'Avg. Steps',
      data: Math.round(totals.steps / totals.day)
    }, {
      title: 'Avg. Calories',
      data: Math.round(totals.calories / totals.day)
    }];



  //satellite-streets-v12

  const pins = useMemo(
    () =>
      Markers.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            // setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );




  return (
    <Wrapper>
      <ScrollArea>
        <StatsWrapper>
          {/* <StatsBar cards={stats} /> */}
          <LocationWrapper>Location: somewhere</LocationWrapper>
          <AnotherWrapper>
            <StatsBar cards={stats} />
            <MapWrapper>

              <Map
                initialViewState={{
                  longitude: -74,
                  latitude: 40.7128,
                  zoom: 8,
                  bearing: 0,
                  pitch: 0
                }}
                //40.7128, 74
                //-96, 38, 3.5
                // style={{ width: 600, height: 400 }}
                // mapStyle="mapbox://styles/mapbox/outdoors-v12"
                mapStyle="mapbox://styles/christinelai00/clbh59tn5003k14qp7d6vruss/draft"
              >
                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                {pins}
              </Map>
            </MapWrapper>
          </AnotherWrapper>
        </StatsWrapper>
      </ScrollArea>
      <ScrollArea>
        <AnotherWrapper style={{ marginTop: "3%" }}>
          <StatsBar cards={avgStats} />
          <StatsChart distances={graph.distances} elevations={graph.elevations} dates={graph.dates} />
        </AnotherWrapper>
      </ScrollArea>

    </Wrapper>
  );
}

export async function getStaticProps() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://run-for-rhinos.vercel.app';

  const sumRes = await fetch(`${server}/api/database/activities/sum`);
  const sumData = await sumRes.json();

  const graphRes = await fetch(`${server}/api/database/activities/graph`);
  const graphData = await graphRes.json();

  return {
    props: {
      totals: {
        day: sumData.days,
        distance: (sumData.total_distance / 1000 / 1.6).toFixed(2),
        elevation: sumData.total_elevation * 3.28,
        steps: Math.round(sumData.total_steps),
        calories: sumData.total_calories
      },
      graph: {
        distances: graphData.distances.map((d: number) => (d / 1000 / 1.6).toFixed(2)),
        elevations: graphData.elevations.map((e: number) => (e * 3.28).toFixed(2)),
        dates: graphData.dates.map((date: string) => new Date(new Date(date).toDateString()).toISOString())
      }

    }
  }

}

export default Tracking;