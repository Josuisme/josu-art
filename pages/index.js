import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BoxText from "./Components/BoxText";
import BoxTextSkills from "./Components/BoxTextSkills";
import ContactMe from "./Components/ContactMe";
import Nav1 from "./Components/Nav1";

export default function Home() {
  return (
    <div>
      <Nav1 />

      <h1 className="text-3xl font-bold underline text-center bg-yellow-200 p-5">
        Josu Cortez
      </h1>
      <BoxTextSkills />
      <ContactMe />
    </div>
  );
}
