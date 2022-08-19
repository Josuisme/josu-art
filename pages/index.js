import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BoxTextSkills from "./Components/BoxTextSkills";
import Nav1 from "./Components/Nav1";

export default function Home() {
  return (
    <div>
      <Nav1 />

      <h1 className="text-3xl font-bold underline text-center bg-yellow-200 p-5">
        Josu Cortez
      </h1>
      <BoxTextSkills />
      <picture>
        <source
          srcSet="https://ep01.epimg.net/elpais/imagenes/2021/12/10/album/1639143803_433213_1639745607_noticia_normal.jpg"
          type="image/webp"
        />
        <img
          src="https://ep01.epimg.net/elpais/imagenes/2021/12/10/album/1639143803_433213_1639745607_noticia_normal.jpg"
          alt="Landscape picture"
        />
      </picture>
    </div>
  );
}
