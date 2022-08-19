import React from "react";
import { BoxText, Text } from "./Components/BoxText";
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
      <BoxText titulo="Los diseños 3d se utilizan en muchos lugares" />
      <Text texto="Los diseños 3d son fundamentales para muchos proyectos, en los cuales no se puede tener el objeto fisicamente. Es por eso que se han convertido en un inpresindible en el cine, es con lo que se hacen muchos videojuegos y en general el entretenimiento siempere ha tenido en su mira a estos objetos creados por computadora." />

      <ImagenGal />
      <ContactMe />
    </div>
  );
};

export default desings;
