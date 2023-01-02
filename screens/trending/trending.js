import React from "react";
import Navbar from "../../components/navbar/navbar";
import ImgT from "../../components/imagewithTitle/imgT";
import PostWrapper from "../../components/postsWrapper/postwrapper";
import PostCard from "../../components/postCard/postCard";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";
import Socials from "../../components/socials/socials";

const Trending = () => {
  return (
    <div>
      <Navbar />
      <ImgT title="Trending Blockchain News" />
      <PostWrapper>
        {[...Array(6)].map((item, ind, arr) => {
          return (
            <div className="gap-y-[15px]">
              {/* Hide the border line for the last item in the array */}
              <PostCard hideBorder={ind === arr.length - 1 ? true : false} />
            </div>
          );
        })}
      </PostWrapper>
      <Socials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Trending;
