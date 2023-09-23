import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/wrapper";
import EditCard from "../../../components/editCards/editCard";
import { deleteTuts } from "../../../provider/slices/tutPost/deleteTut";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ManageAirdrop = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState([]);
  const [postId, setPostId] = useState(null);

  const data = [
    {
      id: 1,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 2,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 3,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 4,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },
    {
      id: 5,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 6,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 7,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 8,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 9,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 10,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },

    {
      id: 11,
      image: "",
      title: "Ethereum testnet guildlines.",
      category: "Testnet",
      date: "",
      body: "Networks are different Ethereum environments you can access for development, testing, or production...",
    },
  ];

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
        pathname: "/admin/create-airdrop",
        query: { ...data, isEdit: true },
      },
      "/admin/create-airdrop"
    );
  };

  return (
    <Wrapper>
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <div className="flex justify-between">
          <h1 className="text-[27px] font-semibold  text-[#000]">
            Manage Airdrop Post
          </h1>

          {/* <button className="bg-[#00b4d8] text-white rounded px-[40px] cursor-pointer">
            Post Airdrop {<div className="lds-dual-ring"></div>}
          </button> */}
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#000] ">
              100 Articles
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
          <div className=" gap-x-[15px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-y-[20px] px-[5%] lg:px-0">
            {postData &&
              postData?.map((item, i) => {
                return (
                  <EditCard
                    data={item}
                    key={i}
                    handleDelete={handleDeletePost}
                    handleEdit={handleEdit}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ManageAirdrop;
