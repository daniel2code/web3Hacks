import React from "react";
import Navbar from "../../components/navbar/navbar";
import ImgT from "../../components/imagewithTitle/imgT";
import PostWrapper from "../../components/postsWrapper/postwrapper";
import PostCard from "../../components/postCard/postCard";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";
import Socials from "../../components/socials/socials";
import { useQuery } from "react-query";
import axios from "axios"

const Blog = () => {
  const { data, error, isError, isLoading } = useQuery("users", fetchPosts);

  async function fetchPosts() {
    const { data } = await axios.get(
      "https://quiclet.urbandesignsco.com/api/admin/articles"
    );
    return data;
  }

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  console.log(data)

  return (
    <div>
      <Navbar />
      <ImgT title="Blockchain News" />
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

export default Blog;
