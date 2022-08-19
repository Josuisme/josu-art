import React from "react";

const ContactMe = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <picture
            className="hidden lg:block"
            width="160"
            height="120"
            alt="Logo"
          >
            <source srcSet="https://www.nicepng.com/png/full/235-2354724_cm-contact-me-logo.png" />
            <img
              className="h-1/2"
              src="https://www.nicepng.com/png/full/235-2354724_cm-contact-me-logo.png"
              alt="Perfil"
            />
          </picture>

          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h2 className="pt-4 mb-2 text-3xl">Contactame a mi correo</h2>
              <a
                href="mailto:josucortez@hotmail.com"
                className="mb-4 text-xl text-blue-700"
              >
                josucortez@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
