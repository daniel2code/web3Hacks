import React, { useEffect } from "react";
import Hero from "./hero/hero";
import Popular from "./popular/popular";
import Trends from "./trends/trends";
import Subscribe from "../../components/subscribe/subscribe";
import Events from "./event/events";
import Tags from "./tags/tags";
import Airdrop from "./airdrops/airTab";
import Socials from "../../components/socials/socials";
import Footer from "../../components/footer/footer";
import TopCarousel from "../../components/TopBarCarousel/topCarousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicBlogPosts } from "../../provider/slices/posts/fetchPublicPosts";

const Landing = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.fetchPost);

  console.log(
    data,
    "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
  );

  useEffect(() => {
    dispatch(fetchPublicBlogPosts());
  }, []);

  return (
    <div className="bg-[#181d20]">
      <TopCarousel />
      <Hero />
      <Popular data={data} />
      <Trends />
      <Airdrop />
      <Events />
      <Tags />
      <Subscribe />
      <Socials />
      <Footer />
    </div>
  );
};

export default Landing;
