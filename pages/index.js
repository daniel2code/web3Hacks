import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import LandingPage from "../screens/landing/landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web3Hacks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>
    </div>
  );
}
