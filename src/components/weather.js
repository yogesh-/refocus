import { useState, useEffect } from "react";

const Weather = () => {
  const [lati, setLatitude] = useState();
  const [longi, setLongitude] = useState();

  const getCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude, longitude;
        latitude = Math.trunc(position.coords.latitude);
        longitude = Math.trunc(position.coords.longitude);
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(latitude, longitude);
      });
    } else {
      return "Geolocation is not supported by this browser.";
    }
  };

  useEffect(() => {
    getCoordinates();
  }, [lati, longi]);

  return { latitude: lati, longitude: longi };
};

export { Weather };
