import React, { useState } from "react";
import Wrapper from "../wrapper/wrapper";

const EventPage = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
    time: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      {" "}
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <div className="flex justify-between">
          <h1 className="text-[27px] font-semibold ">Create new event</h1>

          <button
            className="bg-[#00b4d8] text-white rounded px-[40px] cursor-pointer"
            // onClick={handleSubmit}
          >
            Post
          </button>
        </div>

        <form className="mt-5 mb-3">
          <div className="w-full">
            <label className="text-[15px] font-medium ">Title</label>
            <input
              className="w-full px-3 py-2 outline-none rounded border border-gray-400 mt-1"
              placeholder="Post Title"
              //   value={formValues.postTitle}
              //   name="postTitle"
              //   onChange={handleChange}
            />
          </div>

          <div className="flex justify-between mt-4">
            <div className="w-[48.5%]">
              <label className="text-[15px] font-medium ">Date</label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 rounded border border-gray-400"
                placeholder="Date published"
                type="date"
                // name="datePublished"
                // value={formValues.datePublished}
                // onChange={handleChange}
              />
            </div>

            <div className="w-[48.5%]">
              <label className="text-[15px] font-medium ">Time</label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 rounded border border-gray-400"
                placeholder="Date published"
                type="time"
                // name="datePublished"
                // value={formValues.datePublished}
                // onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="text-[15px] font-medium ">Cover image</label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 rounded border border-gray-400"
              placeholder="Date published"
              type="file"
              // name="image"
              // value={base64Image}
              // onChange={handleChange}
              // onChange={handleImageUpload}
            />
          </div>

          <div className="w-full flex justify-between mt-4">
            <div className="w-full">
              <label className="text-[15px] font-medium ">Description</label>
              <textarea
                className="w-full px-3 mt-1 py-2 outline-none rounded border border-gray-400"
                placeholder="Author"
                // value={formValues.author}
                // name="author"
                // onChange={handleChange}
                rows="5"
              />
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default EventPage;
