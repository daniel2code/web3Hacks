import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import ImgT from "../../components/imagewithTitle/imgT";
import PostWrapper from "../../components/postsWrapper/postwrapper";
import PostCard from "../../components/postCard/postCard";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";
import Socials from "../../components/socials/socials";
import { useQuery } from "react-query";
import axios from "axios";

const Blog = () => {
  // const { data, error, isError, isLoading } = useQuery("users", fetchPosts);

  // const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () =>
  //   axios
  //     .get("https://quiclet.urbandesignsco.com/api/admin/articles")
  //     .then((res) => res.data)
  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  // console.log(data);

  async function fetchPosts() {
    // await axios.get("https://quiclet.urbandesignsco.com/api/admin/articles", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // fetch({
    //   url: "https://jsonplaceholder.typicode.com/posts",
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    fetch("http://quiclet.urbandesignsco.com/api/admin/articles")
      .then((response) => response.json())
      .then((json) => console.log(json));

    // return data;
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // if (isError) {
  //   return <div>Error! {error.message}</div>;
  // }

  // console.log(data);

  return (
    <div style={{ backgroundColor: "#181d20" }}>
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
      <Subscribe />
      <Socials />
      <Footer />
    </div>
  );
};

export default Blog;
