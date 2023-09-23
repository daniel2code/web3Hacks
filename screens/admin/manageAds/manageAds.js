import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/wrapper";
import EditAdsCard from "../../../components/editCards/editAdsCard";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { deleteAds } from "../../../provider/slices/ads/deleteAds";

const ManageAds = () => {
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

  const handleDeletePost = (postId, id) => {
    const result = confirm("Are you sure you want to delete this item?");

    if (result) {
      setPostId(id);
      dispatch(deleteAds({ id: postId, cb: handleAfterDelete }));
    } else {
      return false;
    }
  };

  const handleEdit = (data) => {
    router.push(
      {
        pathname: "/admin/ads",
        query: { ...data, isEdit: true },
      },
      "/admin/ads"
    );
  };

  return (
    <Wrapper>
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <h1 className="text-[27px] font-semibold text-[#000] ">Manage Ads</h1>

        <div className="flex items-center justify-between">
          <h2 className="text-[17px] font-semibold text-[#000] ">10 Ads</h2>
        </div>

        <div className="w-full mt-[20px]">
          <input
            className="w-full bg-[#fff] px-[15px] h-[40px] rounded-md text-[#000] border border-[#00000040]"
            placeholder="Search Events"
          />
        </div>

        <div className="w-full mt-10">
          <div className=" gap-x-[15px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-y-[20px] px-[5%] lg:px-0">
            {postData &&
              postData?.map((item, i) => {
                return (
                  <EditAdsCard
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

export default ManageAds;
