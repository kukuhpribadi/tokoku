import React from "react";
import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";

const Home = () => {
  return (
    <div className="">
      <Hero
        url={
          "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
      />
      <SectionOne />
    </div>
  );
};

export default Home;
