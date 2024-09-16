"use client";

import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { ReactNode } from "react";

const libraries = ["places", "drawing", "geometry"];

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB5Y1PUBVawvwuSUZEipJVLrEX9lV6Yn_0",
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Erro ao carregar google maps</p>;
  if (!scriptLoaded) return <p>Carregando o map ...</p>;

  return children;
}
