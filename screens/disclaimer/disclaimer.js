import React from "react";
// import styles from "./details.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Socials from "../../components/socials/socials";

const Disclaimer = () => {
  return (
    <div className="w-full bg-[#181d20]">
      <Navbar bg={true} />

      <div className={`w-full flex justify-center pt-[80px]`}>
        <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
          <h2 className={`text-[35px] leading-[35px] text-[#fff] mt-[40px]`}>
            Disclaimer
          </h2>

          <div className="w-full border border-[#c2c3c730] p-[20px] mt-[25px] ">
            <p className="text-[#fff]">
              Dapplapxs.co is a free aggregator for crypto airdrops such as
              updating (node, testnet, betanet, and mainnet) airdrops Including
              product promotion and community events highlights. Dapplapxs are
              not involved in the published airdrops in any ways. Although we
              try to list only legit project with great potential for high
              reward. Dapplapxs can not be responsible for any issues or loss
              due to scam. So make sure you never share your private keys or
              access phishing group and sites to be safe!. Follow Dapplapxs
              guide to stay safe for more information.
            </p>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </div>
  );
};

export default Disclaimer;
