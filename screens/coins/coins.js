import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Socials from "../../components/socials/socials";
import ImgT from "../../components/imagewithTitle/imgT";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";

const CoinsPage = () => {
  const { isLoading, isError, isSuccess, data, error, refetch } = useQuery(
    ["posts"],
    () =>
      axios
        .get("https://coingecko.p.rapidapi.com/coins/markets", {
          headers: {
            "X-RapidAPI-Key":
              "32c189fa12msh51472b55a40223ep128221jsnee566e52ef10",
            "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
          },
          params: {
            vs_currency: "usd",
            page: "1",
            per_page: "100",
            order: "market_cap_desc",
          },
        })
        .then((res) => res.data)
  );

  console.log(data);

  return (
    <div style={{ backgroundColor: "#181d20" }}>
      <Navbar />
      <ImgT title="Top 100 Coins" />

      <div className={`w-full flex justify-center py-[70px]`}>
        <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="content-loading" />
            </div>
          ) : (
            <div
              className={`w-full overflow-auto rounded border border-[#c2c3c770] mt-[40px] `}
            >
              <div className="flex mt-0 px-3 py-3 w-[840px] lg:w-full bg-[#ff5f1399] ">
                <p className="text-[15px] text-[#fff] font-bold w-[4%]">#</p>
                <p className="text-[15px] text-[#fff] font-bold w-[25%]">
                  Coin
                </p>
                <p className="text-[15px] text-[#fff] font-bold w-[15%]">
                  Price
                </p>

                <p className="text-[15px] text-[#fff] font-bold w-[20%]">
                  Market Cap
                </p>

                <p className="text-[15px] text-[#fff] font-bold w-[18%]">
                  Circulating Supply
                </p>

                <p className="text-[15px] text-[#fff] font-bold w-[18%]">
                  Total Supply
                </p>
              </div>

              {data?.map((item, i) => {
                return (
                  <div
                    key={item.market_cap_rank}
                    className={`flex border-t-[#c2c3c770]  ${
                      Number(item.market_cap_rank) % 2 === 0
                        ? "bg-[#ff5f1308]"
                        : "bg-transparent"
                    } border border-x-0 border-b-0 px-3 py-4 w-[840px] lg:w-full `}
                  >
                    <p className="text-[13px] text-[#fff] w-[4%]">
                      {item.market_cap_rank}
                    </p>
                    <p className="text-[13px] flex gap-x-[10px] items-center text-[#fff] w-[25%]">
                      <Image
                        src={item.image}
                        height={25}
                        width={25}
                        className="rounded-[50%]"
                      />{" "}
                      <p>{item.name}</p>{" "}
                      <p className="text-[#c2c3c795] text-[12px]">
                        {item.symbol}
                      </p>
                    </p>
                    <p className="text-[13px] text-[#fff] w-[15%]">
                      ${Number(item.current_price).toLocaleString()}
                    </p>
                    <p className="text-[13px] text-[#fff] w-[20%]">
                      ${Number(item.market_cap).toLocaleString()}
                    </p>
                    <p className="text-[13px] text-[#fff] w-[18%]">
                      {Number(item.circulating_supply).toLocaleString()}
                    </p>
                    <p className="text-[13px] text-[#fff] w-[18%]">
                      {Number(item.total_supply).toLocaleString()}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Socials />
      <Footer />
    </div>
  );
};

export default CoinsPage;
