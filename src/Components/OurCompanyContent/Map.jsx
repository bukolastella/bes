import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGetUserLocation } from "./useGetUserLocation";
import { useEffect, useState } from "react";

// Testing
// import React, { useEffect } from "react";
// import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// import Button from "../Reusable-Components/Button";
function Map() {
  // const officePosition2 = [9.8487424, 5.4504704];
  // const EisoftofficePosition = [6.438912, 3.4373632];
  // const bagco = {lat: 6.4487424, lng: 3.4504704}
  // const zoom = 5;
  const zoom = 11;
  const officeLat = 6.486539;
  const officeLng = 3.3742237;
  const officePosition = [officeLat, officeLng];
  const [center, setCenter] = useState(officePosition);
  // const [userPos, setUserPos] = useState(null);
  // const center = [
  //   (officePosition2[0] + officeLat) / 2,
  //   (officePosition2[1] + officeLng) / 2,
  // ];
  const { error, position, getUserLocation } = useGetUserLocation();
  // const pos = position;
  console.log(center);

  function userHandler() {
    getUserLocation();
  }

  useEffect(() => {
    if (!position) return;
    setCenter([
      (position?.lat + officeLat) / 2,
      (position?.lng + officeLng) / 2,
    ]);
    console.log(position.lat, position.lng);
  }, [position, officeLat, officeLng]);
  console.log(center);

  // useEffect(() => {
  //   if (!position) return;

  //   const map = L.map("map").setView([position.lat, position.lng]);
  //   L.Routing.control({
  //     waypoints: [
  //       L.latLng([position.lat, position.lng]),
  //       L.latLng([officeLat, officeLng]),
  //     ],
  //     routeWhileDragging: true,
  //   }).addTo(map);
  // }, [position.lat, position.lng, officeLat, officeLng]);

  return (
    <div className={styles.mapParent}>
      <div className={styles.mapContainer}>
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={officePosition}>
            <Popup>officePosition1</Popup>
          </Marker>

          {position && (
            <Marker position={[position.lat, position.lng]}>
              <Popup>officePosition2</Popup>
            </Marker>
          )}
        </MapContainer>

        {error && <p> error.message</p>}
      </div>
      <button onClick={userHandler}>Get Your Location</button>
    </div>
  );
}

export default Map;
// 33 park road costain,ebute-metta
/*

const location1 = [latitude1, longitude1];
  const location2 = [latitude2, longitude2];

  const center = [
    (location1[0] + location2[0]) / 2,
    (location1[1] + location2[1]) / 2,
  ];

  const zoom = 10; // Adjust the zoom level as needed

  return (
    <Map center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location1}>
        </Marker>
        <Marker position={location2}>
        </Marker>
      </Map>
    );

    */
