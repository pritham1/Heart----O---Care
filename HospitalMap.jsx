import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function HospitalMap({ hospitals }){
  const ref = useRef(null);
  useEffect(()=>{
    if(!ref.current) return;
    // remove existing
    if(ref.current._map) { ref.current._map.remove(); ref.current._map = null; }
    const map = L.map(ref.current).setView([28.64,77.23], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    hospitals.forEach(h => L.marker([h.lat, h.lng]).addTo(map).bindPopup(h.name));
    ref.current._map = map;
  }, [hospitals]);
  return <div id="map" ref={ref} style={{height:320}}></div>
}
