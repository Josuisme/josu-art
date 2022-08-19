import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav1 = () => {
  return (
    <nav className="z-0 relative">
      <div className="relative z-10 bg-yellow-300 shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <a className="flex-shrink-0" href="#"></a>
              <div className="hidden lg:block lg:ml-2">
                <div className="flex">
                  <Link href="/">
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-weight hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                    >
                      {" "}
                      Inicio{" "}
                    </a>
                  </Link>
                  <Link href="/desings">
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-weight hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                    >
                      {" "}
                      Diseños{" "}
                    </a>
                  </Link>
                  <Link href="venta3d">
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-weight hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                    >
                      {" "}
                      Venta de diseños 3d{" "}
                    </a>
                  </Link>
                  <Link href="phoilu">
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-weight hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                    >
                      {" "}
                      Photoshop e Ilustrador{" "}
                    </a>
                  </Link>
                  <Link href="acerca">
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-weight hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                    >
                      {" "}
                      Acerca de mi{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div x-show="menu" className="block lg:hidden">
          <div className="px-2 pt-2 pb-3">
            <Link href="/">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-weigt:600 font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Inicio{" "}
              </a>
            </Link>
            <Link href="/desings">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-weigt:600 font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Diseños{" "}
              </a>
            </Link>
            <Link href="/venta3d">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-weigt:600 font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Diseños en venta{" "}
              </a>
            </Link>
            <Link href="/phoilu">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-weigt:600 font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Photoshop e Ilustrador{" "}
              </a>
            </Link>
            <Link href="/acerca">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-weigt:600 font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Acerca de mi{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav1;
