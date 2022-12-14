import React from "react";
import ContactMe from "./Components/ContactMe";
import Nav1 from "./Components/Nav1";

const acerca = () => {
  return (
    <div>
      <Nav1 />
      <h1 className="text-3xl font-bold underline text-center bg-yellow-200 p-5">
        Josu Cortez
      </h1>
      <div>
        <h2 className="text-4xl text-center font-bold">Quien soy</h2>
        <div className="p-2 m-5 rounded-2xl bg-slate-200 border-4 border-cyan-500">
          <div className="text-xl">Soy Josu:</div>
          <p className="m-10 text-2xl">
            Me dedico a el diseño 3d, y me gusta emprender nuevos negocios, uno
            de estos negocios fue la impresion 3d y la venta de los archivos
            digitales 3d con los cuales cualquiera pueda comprarlos y
            posteriormente imprimirlos en su casa.
            <br />
            Me gusta la creacion de videojuegos, espero pronto pueda crear mi
            primer juego, siempre me han gustado los videojuegos y me gustaria
            llegar a crearlos, aunque todavia estoy en proceso.
            <br />
          </p>
        </div>
      </div>
      <ContactMe />
    </div>
  );
};

export default acerca;
