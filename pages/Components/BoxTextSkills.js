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
            imagen
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
            imagen
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-900">
                Photoshop Ilustrador
              </h3>
              <p className="mb-6">
                Retoque de fotografias: quitar fondo a imagenes, correccion de
                colores.
              </p>
              <a href="#" className="block font-medium text-purple-600">
                ver mas...
              </a>
            </div>
            imagen
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxTextSkills;
