"use client";

import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
  LoadScript,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "50vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapGoogle = () => {
  console.log(process.env.GOOGLE_MAPS_API_KEY);
  const { isLoaded, loadError } = useJsApiLoader({
    // @ts-expect-error
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
};

export default MapGoogle;
