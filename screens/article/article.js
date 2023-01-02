import React from "react";
import Navbar from "../../components/navbar/navbar";
import styles from "./Article.module.css";
import Subscribe from "../../components/subscribe/subscribe";
import Socials from "../../components/socials/socials";
import Footer from "../../components/footer/footer";

const Article = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center">
        <div
          className={`w-full flex justify-center flex-col items-center mt-6 ${styles.wrapper}`}
          // style={{ backgroundImage: "url(../../assets/bloc.jpg)" }}
        >
          <div className="flex gap-x-2 items-center">
            <p className="text-[14px] text-white font-medium">Testnet</p>{" "}
            <div className={`w-[25px] border border-gray-200 border-t-0`} />
            <p className="text-[12px] text-white">December 31, 2023</p>
          </div>
          <h2 className="text-white text-[37px] font-bold w-[60%] text-center max-w-[800px] mt-3">
            What is Trending in the Ethereum Ecosystem, Everything You Need to
            Know.
          </h2>
        </div>
      </div>

      <div className="w-full flex justify-center mt-6">
        <div className={`w-[67%] max-w-[1100px]`}>
          <p className="mt-3 text-[15px]">
            There are many elements of Charlotte D’Alessio’s life that read like
            a teenager’s fairy tale. Instagram didn’t exist when I was in high
            school, but I imagine I’d be pretty fascinated by the beautiful,
            leggy 17-year-old with more than 174,000 followers and a Wilhelmina
            Models contract, too. For the legions of aspiring Cool Teens™,
            D’Alessio, who has been modeling full-time for the last year, is
            living the dream — though her Cinderella story has been anything but
            conventional.
          </p>

          <p className="mt-3 text-[15px]">
            At Coachella in 2015, pictures of D’Alessio (above, right) and her
            friend, 18-year-old model Josie Canseco (left), flooded the
            Internet, winding up on places like the festival’s official Twitter
            and The Cobra Snake’s Instagram, among others. BuzzFeed spoke to
            D’Alessio soon after, resulting in a viral article that has since
            garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from
            there, and the rest is history. In the 12 months since D’Alessio was
            discovered, the Canada native has landed a slew of commercial
            campaigns, left Beverly Hills High School to pursue homeschooling
            and launched a YouTube channel with her friend and fellow model,
            Abby Champion. And with a secret project in the works for this
            summer, I imagine that D’Alessio’s stake in the California modeling
            pantheon will only deepen.
          </p>

          <p className="mt-3 text-[15px]">
            I went with my friend Josie — it was my first year going — and we
            barely took photos. I think we took 10 photos, but people really
            responded to them. They ended up everywhere. I saw them on Facebook,
            and not just [from] friends, but random people posting them. And
            then The Weeknd and the Coachella Twitter reposted [one of their
            photos]. It was so surreal because I was just a normal girl from
            Canada who was going to Coachella. I had, like, 16,000 [Instagram]
            followers, and now it’s [174,000].
          </p>
        </div>
      </div>

      <Socials />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Article;
