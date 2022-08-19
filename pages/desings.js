import React from "react";
import ContactMe from "./Components/ContactMe";
import ImagenGal from "./Components/ImagenGal";
import Nav1 from "./Components/Nav1";

const desings = () => {
  return (
    <div>
      <Nav1 />

      <h1 className="text-3xl font-bold underline text-center bg-yellow-200 p-5">
        Diseños 3d
      </h1>
      <p className="font-semibold text-justify text-2xl m-20 p-5 h-auto w-auto bg-amber-100 text-gray-800 border-4 border-rose-600 rounded-3xl content-center bg-gradient-to-t from-amber-200 via-amber-200 flex-1">
        Los diseños 3d son una herramienta fundamental para la creacion de
        peliculas, videojuegos y en general para los medios visuales. Ya que te
        permiten tener y manipular objetos visuales que no se tienen en la vida
        real. Y que en muchas ocaciones obtener estos objetos seria imposible.
        Yo me dedico a la creacion de esos objetos.
      </p>
      <ImagenGal />
      <ContactMe />
    </div>
  );
};

export default desings;
