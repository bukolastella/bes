import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import styles from "./Map.module.css";
import { useGetUserLocation } from "./useGetUserLocation";

const officeLat = 6.486539;
const officeLng = 3.3742237;
const officePosition = [officeLat, officeLng];

function Map1() {
  const [center, setCenter] = useState(officePosition);
  const { position, getUserLocation } = useGetUserLocation();

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  useEffect(() => {
    if (!position) return;

    // Initialize the map only once
    const map = L.map("map").setView(center, 6);

    // Add a tile layer (you can choose a different one if you prefer)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Create a control
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(position.lat, position.lng),
        L.latLng(officeLat, officeLng),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    // Update waypoints when the position changes
    routingControl.setWaypoints([
      L.latLng(position.lat, position.lng),
      L.latLng(officeLat, officeLng),
    ]);

    // Update the center when the position changes
    setCenter([(position.lat + officeLat) / 2, (position.lng + officeLng) / 2]);
  }, [position, center]);

  return (
    <div className={styles.mapParent}>
      <div id="map" className={styles.mapContainer}></div>
    </div>
  );
}

export default Map1;

// import { useEffect, useState } from "react";
// // import { useEffect } from "react";
// import L from "leaflet";
// import "leaflet-routing-machine";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import styles from "./Map.module.css";
// import { useGetUserLocation } from "./useGetUserLocation";

// const officeLat = 6.486539;
// const officeLng = 3.3742237;
// const officePosition = [officeLat, officeLng];

// function Map1() {
//   const [center, setCenter] = useState(officePosition);
//   const { position, getUserLocation } = useGetUserLocation();

//   useEffect(() => {
//     getUserLocation();
//   }, [getUserLocation]);
//   //   function userHandler() {
//   //     getUserLocation();
//   //   }

//   //   useEffect(() => {
//   //     if (!position) return;
//   //     setCenter([
//   //       (position?.lat + officeLat) / 2,
//   //       (position?.lng + officeLng) / 2,
//   //     ]);
//   //     console.log(position.lat, position.lng);
//   //   }, [position, officeLat, officeLng]);

//   useEffect(() => {
//     if (!position) return;
//     setCenter([
//       (position?.lat + officeLat) / 2,
//       (position?.lng + officeLng) / 2,
//     ]);
//     console.log(position.lat, position.lng);
//   }, [position]);

//   useEffect(() => {
//     if (!position) return;
//     const userLat = position?.lat;
//     const userLng = position?.lng;
//     // Initialize the map
//     const map = L.map("map").setView([center], 6);

//     // Add a tile layer (you can choose a different one if you prefer)
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: "© OpenStreetMap contributors",
//     }).addTo(map);

//     // Create a control and add it to the map
//     L.Routing.control({
//       waypoints: [L.latLng(userLat, userLng), L.latLng(officeLat, officeLng)],
//       routeWhileDragging: true,
//     }).addTo(map);
//   }, [position, center]);

//   return (
//     <div className={styles.mapParent}>
//       <div id="map" className={styles.mapContainer}></div>
//       {/* <button onClick={userHandler}>Get Your Location</button> */}
//     </div>
//   );
// }
// export default Map1;

/*const [center, setCenter] = useState(officePosition);
  const { position, getUserLocation } = useGetUserLocation();

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  useEffect(() => {
    if (!position) return;
    setCenter([(position.lat + officeLat) / 2, (position.lng + officeLng) / 2]);
    console.log(position.lat, position.lng, officeLat, officeLng);
  }, [position]);

  useEffect(() => {
    if (!position) return;
    const userLat = position.lat;
    const userLng = position.lng;
    // Initialize the map
    const map = L.map("map").setView([userLat, userLng], 6);

    // Add a tile layer (you can choose a different one if you prefer)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Create a control and add it to the map
    L.Routing.control({
      waypoints: [L.latLng(userLat, userLng), L.latLng(officeLat, officeLng)],
      routeWhileDragging: true,
    }).addTo(map);
  }, [position, center]);

  return (
    <div className={styles.mapParent}>
      <div id="map" className={styles.mapContainer}></div>
      {/* <button onClick={userHandler}>Get Your Location</button> }
    </div>
  );
}
*/
