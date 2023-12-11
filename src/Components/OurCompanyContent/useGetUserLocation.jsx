import { useState } from "react";

export function useGetUserLocation(defaultPosition = null) {
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(defaultPosition);

  function getUserLocation() {
    // console.log("hello");
    if (!navigator.geolocation)
      return setError("Sorry, couldn't get your Location!");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
      }
    );
  }
  return { error, position, getUserLocation };
}
