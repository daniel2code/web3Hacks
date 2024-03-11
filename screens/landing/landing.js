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
import { GetServerSideProps } from "next";
import { API } from "../../utils/axiosConfig";

const Landing = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.publicPost);

  console.log(data);

  useEffect(() => {
    dispatch(fetchPublicBlogPosts({ url: "/articles/all" }));
  }, []);

  return (
    <div className="bg-[#181d20]">
      {/* <TopCarousel /> */}
      <Hero />
      <Popular data={data?.latest_articles} />
      <Trends data={data?.latest_articles} />
      <Airdrop />
      <Events />
      <Tags />
      <Subscribe />
      <Socials />
      <Footer />
    </div>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo = await res.json();
//   // Pass data to the page via props
//   return { props: { repo: repo } };
// }

export default Landing;
