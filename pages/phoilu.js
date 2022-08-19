import React from "react";
import BoxTextSkills from "./Components/BoxTextSkills";
import ContactMe from "./Components/ContactMe";
import Nav1 from "./Components/Nav1";

const phoilu = () => {
  return (
    <div>
      <Nav1 />

      <h1 className="text-3xl font-bold underline text-center bg-yellow-200 p-5">
        Photoshop e Ilustrador
      </h1>
      <div>
        <h2 className="text-4xl text-center font-bold">
          Mis habilidades en Adobe Photoshop e Ilustrador
        </h2>
        <div className="p-2 m-5 rounded-2xl bg-slate-200 border-4 border-cyan-500">
          <div className="text-xl">Photoshop:</div>
          <p className="m-10 text-2xl">
            Puedo modificar el fondo de las imagenes, retocar rostros, quitar
            tatuajes por ejemplo. Cambiar el color de objetos y recortar
            cualquier imagen incluso el cabello de las fotos. Correccion de
            color y la utilizacion de Luts.
            <br />
            Manupulacion de objetos y manejo de capas asi como la fusion de
            capas y filtros.
            <br />
          </p>
        </div>
        <div className="p-2 m-5 rounded-2xl bg-slate-200 border-4 border-cyan-500">
          <div className="text-xl">Ilustrador:</div>
          <p className="m-10 text-2xl">
            Manejo de vertices para creacion de figuras complejas, creacion de
            isotipos y logotipos empresariales, arte conceptual que elijo hacer
            en este programa gracias a que es escalable las imagenes generadas
            en vectores.
            <br />
          </p>
        </div>
      </div>
      <ContactMe />
    </div>
  );
};

export default phoilu;
