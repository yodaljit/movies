import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import NavBar from "@/components/navBar";
import Hero from "@/components/Hero";
import MovieList from "@/components/MovieList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  console.log(data);
  const [items, setItems] = useState(data.results);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
     <NavBar />

      {/* Hero */}
     <Hero />

      {/* Movie list cards */}
      <MovieList items={items} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
