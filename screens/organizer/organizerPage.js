import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import ImgT from "../../components/imagewithTitle/imgT";
import Socials from "../../components/socials/socials";
import Footer from "../../components/footer/footer";

const tableData = [
  {
    date: "13|06|2023",
    name: "Arbitrum",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "completed",
  },

  {
    date: "13|06|2023",
    name: "Zetachain",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "completed",
  },

  {
    date: "13|06|2023",
    name: "Shiba Inu",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "completed",
  },

  {
    date: "13|06|2023",
    name: "Binance",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "completed",
  },

  {
    date: "13|06|2023",
    name: "SUI",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "on going",
  },

  {
    date: "13|06|2023",
    name: "Polygon",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "on going",
  },
  {
    date: "13|06|2023",
    name: "Arbitrum",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "on going",
  },

  {
    date: "13|06|2023",
    name: "Arbitrum",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "pending",
  },

  {
    date: "13|06|2023",
    name: "Arbitrum",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "pending",
  },

  {
    date: "13|06|2023",
    name: "Arbitrum",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "pending",
  },

  {
    date: "13|06|2023",
    name: "Arbitrum",
    website: "www.arbitrum.com",
    status: "potential- 50%",
    blockchain: "Etheruem",
    availability: "completed",
  },
];

const OrganizerPage = () => {
  const [filterData, setFilterData] = useState(tableData);
  const [input, setInput] = useState("all");

  useEffect(() => {
    const handleChangeStatus = () => {
      console.log(input);
      let a = input;
      let fil =
        input &&
        filterData.filter((item) => {
          console.log(a);
          if (input === "all") return item;
          else return item.availability === input.toLowerCase();
        });

      console.log(fil);
      setFilterData(fil);
    };

    handleChangeStatus();
  }, [input]);

  console.log(filterData);
  //   console.log(input.toLowerCase());

  return (
    <div style={{ backgroundColor: "#181d20" }}>
      <Navbar bg={true} />
      <ImgT title="Assets Organizer" />

      <div className={`w-full flex justify-center py-[70px]`}>
        <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] text-[#fff] font-semibold">
              Filter By:
            </h2>

            <select
              className="w-[200px] text-[gray] outline-none px-2 py-2 rounded border border-gray-300 mt-1 bg-[transparent]"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            >
              <option>All</option>
              <option>Completed</option>
              <option>On going</option>
              <option>Pending</option>
            </select>
          </div>
          <div
            className={`w-full overflow-auto rounded border border-[#c2c3c770] mt-[40px] `}
          >
            <div className="flex mt-2 px-3 py-3 w-[840px] lg:w-full">
              <p className="text-[15px] text-[#fff] font-bold w-[15%]">Date</p>
              <p className="text-[15px] text-[#fff] font-bold w-[16%]">
                Protocol Name
              </p>
              <p className="text-[15px] text-[#fff] font-bold w-[25%]">
                Website
              </p>
              <p className="text-[15px] text-[#fff] font-bold w-[15%]">
                Status
              </p>
              <p className="text-[15px] text-[#fff] font-bold w-[15%]">
                Blockchain
              </p>

              <p className="text-[15px] text-[#fff] font-bold w-[10%]">
                Availability
              </p>
            </div>

            {filterData.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`flex border-t-[#c2c3c770]  border border-x-0 border-b-0 px-3 py-4 w-[840px] lg:w-full ${
                    item.availability === "completed"
                      ? "bg-[#00FF0030]"
                      : item.availability === "pending"
                      ? "bg-[#FF000030]"
                      : item?.availability === "on going"
                      ? "bg-[#FFFF0030]"
                      : ""
                  }`}
                >
                  <p className="text-[13px] text-[#fff] w-[15%]">{item.date}</p>
                  <p className="text-[13px] text-[#fff] w-[16%]">{item.name}</p>
                  <p className="text-[13px] text-[#fff] w-[25%]">
                    {item.website}
                  </p>
                  <p className="text-[13px] text-[#fff] w-[15%]">
                    {item.status}
                  </p>
                  <p className="text-[13px] text-[#fff] w-[15%]">
                    {item.blockchain}
                  </p>
                  <p className="text-[13px] text-[#fff] w-[10%]">
                    {item.availability}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Socials />
      <Footer />
    </div>
  );
};

export default OrganizerPage;
