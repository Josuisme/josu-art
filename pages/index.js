import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BoxTextSkills from './Components/BoxTextSkills'
import Nav1 from './Components/Nav1'

export default function Home() {
  return (
    <div>
      <Nav1/>

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <BoxTextSkills/>
    </div>
  )
}
