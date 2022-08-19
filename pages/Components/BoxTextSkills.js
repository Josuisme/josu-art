import React from "react";

const BoxTextSkills = () => {
  return (
    <div className="py-16 bg-yellow-100">
      <div className="text-center text-3xl p-4">Habilidades</div>
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-900">
                Diseño 3d
              </h3>
              <p className="mb-6">Puedo crear diseños 3d a pedido.</p>
              <a href="#" className="block font-medium text-purple-600">
                ver mas...
              </a>
            </div>
            <picture width="160" height="120" alt="Logo">
              <source
                srcSet="https://assets.spartangeek.com/cc/computadora-animacion-y-modelado-3d.jpg"
                type="image/webp"
              />
              <img
                src="https://assets.spartangeek.com/cc/computadora-animacion-y-modelado-3d.jpg"
                alt="Landscape picture"
              />
            </picture>
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-900">
                Venta de diseños
              </h3>
              <p className="mb-6">Tengo en venta diseños sobre impresion 3d.</p>
              <a href="#" className="block font-medium text-purple-600">
                ver mas...
              </a>
            </div>
            <picture width="160" height="120" alt="Logo">
              <source srcSet="https://i.etsystatic.com/18544673/r/il/2e30dd/2378353869/il_570xN.2378353869_mkfy.jpg" />
              <img
                src="https://i.etsystatic.com/18544673/r/il/2e30dd/2378353869/il_570xN.2378353869_mkfy.jpg"
                alt="Landscape picture"
              />
            </picture>
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-900">
                Photoshop Ilustrador
              </h3>
              <p className="mb-6">
                Retoque de fotografias: quitar fondo a imagenes, correccion de
                colores, creacion de logos...
              </p>
              <a href="#" className="block font-medium text-purple-600">
                ver mas...
              </a>
            </div>
            <picture width="160" height="120" alt="Logo">
              <source srcSet="https://www.oversodoinverso.com.br/wp-content/uploads/2016/03/capa4.jpg" />
              <img
                src="https://www.oversodoinverso.com.br/wp-content/uploads/2016/03/capa4.jpg"
                alt="Landscape picture"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxTextSkills;
