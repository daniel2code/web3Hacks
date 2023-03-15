import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar/sidebar";
import Topbar from "./topbar/topbar";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { updatePosts } from "../../../provider/slices/postsSlice";
import axios from "axios";

const Wrapper = ({ children }) => {
  const auth = useSelector((state) => state.reducer.auth);
  const posts = useSelector((state) => state.reducer.post.posts);
  const dispatch = useDispatch();

  console.log(posts);

  const router = useRouter();
  !auth.isAuth && router.push("/admin/login");

  const { isLoading, isError, isSuccess, data, error, refetch } = useQuery(
    ["posts"],
    () =>
      axios
        .get("http://quiclet.urbandesignsco.com/api/articles/all", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((res) => res.data)
  );

  useEffect(() => {
    if (!posts) {
      dispatch(updatePosts(data));
    }
  }, [data]);

  return (
    <>
      <Topbar />
      <div className="flex">
        <div className="w-[250px]">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
