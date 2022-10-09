import React, { useEffect, useState } from 'react'
import './Map.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  minHeight: '200px',
  height: '35vh',
  // height: '300px'

};

const center = {
  lat: 22.330370,
  lng: 91.832630
};

function MyComponent() {
  const [isMarker, setIsMarker] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsMarker(true)
    }, 1000);
  }, [])

  return (
    <section className='map'>

      <div className='container mt-5 mb-2'>
        <div className='map-text'>
          <h3 className='container mb-0'>Get Location on Map</h3>
        </div>
        <LoadScript
          googleMapsApiKey="AIzaSyBIAVp8wd0oQWDEvNJGGzKdg9VBVmlpJ0w"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */}
            <>
              {/* <DirectionsRenderer origin={{ lat: 40.756795, lng: -73.954298 }} destination={{ lat: 41.756795, lng: -78.954298 }} /> */}
              {
                isMarker && <Marker position={center} />
              }
            </>
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  )
}

export default React.memo(MyComponent)