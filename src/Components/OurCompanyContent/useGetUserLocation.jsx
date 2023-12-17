import { useState } from "react";

export function useGetUserLocation(defaultPosition = null) {
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(defaultPosition);

  function getUserLocation() {
    // console.log("hello");
    if (!navigator.geolocation) {
      setError("Sorry, couldn't get your Location!");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setError(null); //to cleasr previous error
      },
      (error) => {
        setError(error.message);
      }
    );
  }
  return { error, position, getUserLocation };
}
