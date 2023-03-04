import React from "react";
import Navbar from "../../components/navbar/navbar";
import ImgT from "../../components/imagewithTitle/imgT";
import EventCard from "../../components/eventsCard/eventCard";
import Socials from "../../components/socials/socials";
import Footer from "../../components/footer/footer";

const MainEvent = () => {
  return (
    <div style={{ backgroundColor: "#181d20" }}>
      <Navbar />
      <ImgT title="Upcoming Events" />

      <div className={`w-full flex justify-center py-[70px]`}>
        <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
          <div className="my-[20px] flex justify-between flex-wrap">
            {[...Array(6)].map(() => {
              return (
                <div className="w-full md:w-[48%] lg:w-[32%] mt-[20px]">
                  <EventCard />
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

export default MainEvent;
