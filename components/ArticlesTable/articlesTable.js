// import React from "react";
// import { tableData } from "../../screens/organizer/organizerPage";

// const ArticlesTable = () => {
//   return (
//     <div
//       className={`w-full overflow-auto rounded border border-[#c2c3c770] mt-[0px] `}
//     >
//       <div className="flex mt-2 px-3 py-3 w-[840px] lg:w-full">
//         <p className="text-[15px] text-[#fff] font-bold w-[15%]">Date</p>
//         <p className="text-[15px] text-[#fff] font-bold w-[16%]">
//           Protocol Name
//         </p>
//         <p className="text-[15px] text-[#fff] font-bold w-[25%]">Website</p>
//         <p className="text-[15px] text-[#fff] font-bold w-[15%]">Status</p>
//         <p className="text-[15px] text-[#fff] font-bold w-[15%]">Blockchain</p>

//         <p className="text-[15px] text-[#fff] font-bold w-[10%]">
//           Availability
//         </p>
//       </div>

//       {tableData.map((item, i) => {
//         return (
//           <div
//             key={i}
//             className={`flex border-t-[#c2c3c770]  border border-x-0 border-b-0 px-3 py-4 w-[840px] lg:w-full ${
//               item.availability === "completed"
//                 ? "bg-[#00FF0030]"
//                 : item.availability === "pending"
//                 ? "bg-[#FF000030]"
//                 : item?.availability === "on going"
//                 ? "bg-[#FFFF0030]"
//                 : ""
//             }`}
//           >
//             <p className="text-[13px] text-[#fff] w-[15%]">{item.date}</p>
//             <p className="text-[13px] text-[#fff] w-[16%]">{item.name}</p>
//             <p className="text-[13px] text-[#fff] w-[25%]">{item.website}</p>
//             <p className="text-[13px] text-[#fff] w-[15%]">{item.status}</p>
//             <p className="text-[13px] text-[#fff] w-[15%]">{item.blockchain}</p>
//             <p className="text-[13px] text-[#fff] w-[10%]">
//               {item.availability}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ArticlesTable;

import React from "react";
import { tableData } from "../../screens/organizer/organizerPage";

const ArticlesTable = () => {
  return (
    <div className="overflow-auto rounded border border-[#c2c3c770] mt-0">
      <table className="min-w-full">
        <thead className="bg-gray-800">
          <tr>
            <th className="text-[15px] text-white font-bold p-3">Date</th>
            <th className="text-[15px] text-white font-bold p-3">
              Protocol Name
            </th>
            <th className="text-[15px] text-white font-bold p-3">Website</th>
            <th className="text-[15px] text-white font-bold p-3">Status</th>
            <th className="text-[15px] text-white font-bold p-3">Blockchain</th>
            <th className="text-[15px] text-white font-bold p-3">
              Availability
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index}
              className={`${
                item.availability === "completed"
                  ? "bg-green-100"
                  : item.availability === "pending"
                  ? "bg-red-100"
                  : item.availability === "on going"
                  ? "bg-yellow-100"
                  : ""
              }`}
            >
              <td className="text-[13px] text-white p-3">{item.date}</td>
              <td className="text-[13px] text-white p-3">{item.name}</td>
              <td className="text-[13px] text-white p-3">{item.website}</td>
              <td className="text-[13px] text-white p-3">{item.status}</td>
              <td className="text-[13px] text-white p-3">{item.blockchain}</td>
              <td className="text-[13px] text-white p-3">
                {item.availability}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticlesTable;
