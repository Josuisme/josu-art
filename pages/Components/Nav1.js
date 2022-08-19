import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav1 = () => {
  return (
    <nav
      className="z-0 relative"
      x-data="{open:false,menu:false, lokasi:false}"
    >
      <div className="relative z-10 bg-yellow-300 shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <a className="flex-shrink-0" href="#">
                <Image
                  className="hidden lg:block h-12 w-auto"
                  src=""
                  width="auto"
                  height="12"
                  alt="Logo"
                />
              </a>
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
            <div className="flex lg:hidden">
              <button
                click="menu=!menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div x-show="menu" className="block md:hidden">
          <div className="px-2 pt-2 pb-3">
            <Link href="/">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Inicio{" "}
              </a>
            </Link>
            <Link href="/desings">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Diseños{" "}
              </a>
            </Link>
            <Link href="/venta3d">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Diseños en venta{" "}
              </a>
            </Link>
            <Link href="/phoilu">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Photoshop e Ilustrador{" "}
              </a>
            </Link>
            <Link href="/acerca">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
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
