import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGetUserLocation } from "./useGetUserLocation";
import { useState } from "react";
// import Button from "../Reusable-Components/Button";
function Map() {
  // const officePosition = [8.1574, 3.6147];
  // const EisoftofficePosition = [6.438912, 3.4373632];
  const officePosition = [6.486539, 3.3742237];
  const [center, setCenter] = useState(officePosition);
  const [userPos, setUserPos] = useState(null);

  // const [clicked, setClicked] = useState(false);
  // const userPos = [position.lat, position.lng];

  // const center = officePosition;
  const { error, position, getUserLocation } = useGetUserLocation();
  const pos = position;
  console.log(position, pos);

  // const [userPos, setUserPos] = useState("");
  // const { position: userPosition } = useGetUserLocation();
  // console.log(position);
  // const [center, setCenter] = useState(officePosition);

  // console.log(userPosition);

  // useEffect(() => {
  //   if (userPosition) setUserPos([userPosition.lat, userPosition.lng]);
  // }, [userPosition, userPos]);
  // console.log(userPos);
  // const center = [
  //   (officePosition[0] + userPos.lat) / 2,
  //   (officePosition[1] + userPos.lng) / 2,
  // ];

  // console.log(userPosition);
  function userHandler() {
    const pos = getUserLocation();
    console.log(pos);
    setUserPos(pos);
    console.log("hi");
    console.log(position);
    // setUserPos([position.lat, position.lng]);
    setCenter([
      (position.lat + officePosition[0]) / 2,
      (position.lng + officePosition[1]) / 2,
    ]);
  }

  return (
    <div className={styles.mapParent}>
      <div className={styles.mapContainer}>
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={officePosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          {userPos && (
            <Marker position={officePosition}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
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
