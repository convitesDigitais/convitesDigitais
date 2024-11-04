"use client";
import React, { useEffect, useState } from "react";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { useParams } from "next/navigation";

const MapIgreja = () => {
  const params = useParams();
  const [creatorConvidado, setCreatorConvidado] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { id } = params;
  useEffect(() => {
    const fetchPosts = async () => {
      const data1 = await fetch("/api/obterConvidados", {
        cache: "no-cache",
        method: "GET",
      });
      const convidados = await data1.json();
      convidados.map((item) => {
        if (item._id === id[0]) {
          setCreatorConvidado(item.creator);
        }
      });
    };
    fetchPosts();
  }, [id]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data1 = await fetch("/api/obterEvento", {
        cache: "no-cache",
        method: "GET",
      });
      const convidados = await data1.json();
      convidados.map((item) => {
        if (item.creator === creatorConvidado) {
          setLatitude(parseFloat(item.latitudeReligiosa));
          setLongitude(parseFloat(item.longitudeReligiosa));
        }
      });
    };
    fetchPosts();
  }, [creatorConvidado]);
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string}>
      <div className="h-screen">
        <Map
          center={{ lat: latitude, lng: longitude }}
          defaultZoom={9}
          mapId={"google-map-script"}
          fullscreenControl={false}
        >
          {/* <Directions /> */}
          <AdvancedMarker
            position={{ lat: latitude, lng: longitude }}
          ></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};
// function Directions() {
//   const map = useMap();
//   const routesLibrary = useMapsLibrary("routes");
//   const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
//   const [routeIndex, setRouteIndex] = useState(0);
//   const selected = routes[routeIndex];
//   const leg = selected?.legs[0];
//   const [directionsService, setDirectionsService] =
//     useState<google.maps.DirectionsService>();
//   const [directionsRenderer, setDirectionsRenderer] =
//     useState<google.maps.DirectionsRenderer>();
//   useEffect(() => {
//     if (!routesLibrary || !map) return;
//     setDirectionsService(new routesLibrary.DirectionsService());
//     setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
//   }, [map, routesLibrary]);
//   useEffect(() => {
//     if (!directionsService || !directionsRenderer) return;
//     directionsService
//       .route({
//         origin: "Origem",
//         destination: "Igreja",
//         travelMode: google.maps.TravelMode.DRIVING,
//         provideRouteAlternatives: true,
//       })
//       .then((response) => {
//         directionsRenderer.setDirections(response);
//         setRoutes(response.routes);
//       });
//   }, [directionsService, directionsRenderer]);
//   if (!leg) return null;
//   return (
//     <div className="bg-blue-600 relative z-20">
//       <h2>{selected.summary}</h2>
//       <p>
//         {leg.start_address.split(",")[0]} até {leg.end_address.split(",")[0]}
//       </p>
//       <p>Distância: {leg.distance?.text}</p>
//     </div>
//   );
// }

export default MapIgreja;
