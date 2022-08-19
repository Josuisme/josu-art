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
      <h3 className="text-4xl text-center m-9 p-6 w-auto bg-amber-300 text-gray-800 hover:text-white">
        Titulo
      </h3>
      <p className="font-semibold text-justify text-2xl m-20 p-5 h-auto w-auto bg-amber-100 text-gray-800 border-4 border-rose-600 rounded-3xl content-center bg-gradient-to-t from-amber-200 via-amber-200 flex-1">
        Texto
      </p>
      <ImagenGal />
      <ContactMe />
    </div>
  );
};

export default desings;
