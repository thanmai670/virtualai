

import React,{useState} from "react";
import ReactMapGl ,{Marker, Popup} from "react-map-gl";
import * as UniData from './csvjson.json';

export default function  App(){
  const [viewport,setviewport] = useState({
    latitude : 20.5937,
    longitude : 78.9629,
    zoom : 4,
    width: '100vw',
    height :'100vh'
  })
 const [selectedPark, setSelectedPark] = useState(null);
  return (<div>
    <ReactMapGl {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle = 'mapbox://styles/thanmaibk1999/ckiht634v6aft19qrsaxggctv'
    onViewportChange={viewport => {
      setviewport(viewport);
      }}>
      {UniData.features.map((park)=>(
        <Marker key={park.properties.PARK_ID} latitude ={park.geometry.coordinates[1]}
        longitude={park.geometry.coordinates[0]}>
          <button className = 'marker-btn' onClick ={(e)=>{
            e.preventDefault();
            setSelectedPark(park);


          }}>
            <img src ='/apartment-building.svg' alt='University'/>
          </button>
        </Marker>

      ))}

      { selectedPark ? (
        <Popup latitude= {selectedPark.geometry.coordinates[1]}
        longitude={selectedPark.geometry.coordinates[0]}
        onClose={ () => {
          setSelectedPark(null);
        }
        }
        >
          <div>
            University
          </div>
        </Popup>
      ) : null}
    </ReactMapGl>
  </div>
  );
}