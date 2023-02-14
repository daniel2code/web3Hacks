import React from "react";
import Hero from "./hero/hero";
import Popular from "./popular/popular";
import Trends from "./trends/trends";
import Subscribe from "../../components/subscribe/subscribe";
import Socials from "../../components/socials/socials";
import Footer from "../../components/footer/footer";

const Landing = () => {
  return (
    <div className="bg-[#181d20]" >
      <Hero />
      <Popular />
      <Trends />
      <Subscribe />
      <Socials />
      <Footer />
    </div>
  );
};

export default Landing;
