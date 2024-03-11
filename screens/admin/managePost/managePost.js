import React, { useEffect, useState } from "react";
import Wrapper from "../wrapper/wrapper";
import { MdOutlineArticle } from "react-icons/md";
import EditCard from "../../../components/editCards/editCard";
import EmptyState from "../../../components/emptyState/emptyState";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { fetchBlogPosts } from "../../../provider/slices/posts/fetchPosts";
import { publishBlogPost } from "../../../provider/slices/posts/publistPost";
import { notifications } from "../../../utils/notificationBar";
import CardLoader from "../../../components/cardLoader/cardLoader";

const ManagePost = () => {
  const { data, loading } = useSelector((state) => state.fetchPost);

  const router = useRouter();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState([]);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    dispatch(fetchBlogPosts({ url: "/admin/articles" }));
  }, []);

  // const data = [
  //   {
  //     id: 1,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 2,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 3,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 4,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },
  //   {
  //     id: 5,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 6,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 7,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 8,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 9,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 10,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },

  //   {
  //     id: 11,
  //     image: "",
  //     title: "Ethereum testnet guildlines.",
  //     category: "Testnet",
  //     date: "",
  //     body: "Networks are different Ethereum environments you can access for development, testing, or production...",
  //   },
  // ];

  useEffect(() => {
    if (postData.length === 0) {
      setPostData(data);
    } else {
      return false;
    }
  }, []);

  const handleAfterDelete = () => {
    let res = postData.filter((item) => {
      return item?.id !== postId;
    });

    setPostData(res);
  };

  const handleDeletePost = (title, id) => {
    const result = confirm("Are you sure you want to delete this item?");

    if (result) {
      setPostId(id);
      dispatch(deleteTuts({ title: title, cb: handleAfterDelete }));
    } else {
      return false;
    }
  };

  const handleEdit = (data) => {
    router.push(
      {
        pathname: "/admin/write",
        query: { ...data, isEdit: true },
      },
      "/admin/write"
    );
  };

  const handleAfterPublish = () => {
    notifications("success", "Article published successfully");
    dispatch(fetchBlogPosts({ url: "/admin/articles" }));
  };

  const handlePublishPost = (id) => {
    dispatch(publishBlogPost({ id: id, cb: handleAfterPublish }));
  };

  return (
    <Wrapper>
      <div className="p-6 min-h-[93vh]">
        <h1 className="text-[27px] font-semibold text-[#000]">
          Manage Articles
        </h1>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#000] ">
              {data?.data?.length} Articles
            </h2>

            <select className="w-[200px] text-[gray] outline-none px-2 py-2 rounded border border-gray-400 mt-1 bg-[transparent] ">
              <option>All</option>
              <option>Airdrops</option>
              <option>Blockchain</option>
              <option>Trending</option>
            </select>
          </div>
        </div>

        <div className="w-full mt-10">
          {loading ? (
            <CardLoader />
          ) : (
            <div className=" gap-x-[15px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-y-[20px] px-[5%] lg:px-0">
              {data?.data?.length === 0 ? (
                <EmptyState />
              ) : (
                <>
                  {data?.data?.map((item, i) => {
                    return (
                      <EditCard
                        data={item}
                        key={i}
                        // handleDelete={handleDeletePost}
                        handleEdit={handleEdit}
                        handlePublishPost={handlePublishPost}
                        index={i}
                      />
                    );
                  })}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ManagePost;
