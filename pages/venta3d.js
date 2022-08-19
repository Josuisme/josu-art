import React from "react";
import BoxTextSkills from "./Components/BoxTextSkills";
import ContactMe from "./Components/ContactMe";
import Nav1 from "./Components/Nav1";

const venta3d = () => {
  return (
    <div>
      <Nav1 />

      <h1 className="text-3xl font-bold underline text-center bg-yellow-200 p-5">
        Venta de diseños
      </h1>
      <div>
        <h2 className="text-4xl text-center font-bold">
          Paguina donde vendo mis diseños 3d
        </h2>
        <div className="m-10 text-xl relative flex flex-col justify-center items-center w-400 h-600 mx-5 p-2 bg-orange-100 border-slate-900 shadow-lg rounded-3xl hover:shadow-xl">
          <div className="text-2xl font-semibold">Cults 3d:</div>
          <p className="m-10 text-2xl p-5">
            Paguina francesa dedicada a la venta de diseños 3d
            <br />
            <a
              className="text-blue-500 text-2xl font-bold"
              href="https://cults3d.com/es/usuarios/JosuArt/creaci%C3%B3n"
            >
              Link
            </a>
          </p>
          <picture width="160" height="120" alt="Logo">
            <source srcSet="https://assets.cults3d.com/assets/logos/cults-3d-logo-ae57f2fa1b91db60c29f101ceb58a480ffe71c224b30373247d6f69057322b09.svg" />
            <img
              src="https://assets.cults3d.com/assets/logos/cults-3d-logo-ae57f2fa1b91db60c29f101ceb58a480ffe71c224b30373247d6f69057322b09.svg"
              alt="Landscape picture"
            />
          </picture>
        </div>
      </div>

      <ContactMe />
    </div>
  );
};

export default venta3d;
