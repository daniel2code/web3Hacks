import React, { useState } from "react";
import Wrapper from "../wrapper/wrapper";
import { useMutation } from "react-query";
import { ImageTo64 } from "../../../utils/convertImageToBase64";
import { notifications } from "../../../utils/notificationBar";
import axios from "axios";

const EventPage = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
    time: "",
  });

  const { base64Image, handleImageUpload } = ImageTo64();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const mutation = useMutation((newTodo) => {
    return axios.post(
      "https://quiclet.urbandesignsco.com/api/admin/events/create",
      newTodo
    );
  });

  function handleSubmit(e) {
    e.preventDefault();

    mutation.mutate({
      title: formValues.title,
      description: "hello world",
      date: `${(formValues.date, formValues.time)}`,
      cover_image: base64Image,
    });
  }

  console.log(mutation.error);

  // mutation.isError && notifications("error", mutation.error);

  return (
    <Wrapper>
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <div className="flex justify-between">
          <h1 className="text-[27px] font-semibold ">Create new event</h1>

          <button
            className="bg-[#00b4d8] text-white rounded px-[40px] cursor-pointer"
            onClick={handleSubmit}
            disabled={mutation.isLoading}
          >
            Post {mutation.isLoading && <div className="lds-dual-ring"></div>}
          </button>
        </div>

        <form className="mt-5 mb-3">
          <div className="w-full">
            <label className="text-[15px] font-medium ">Title</label>
            <input
              className="w-full px-3 py-2 outline-none rounded border border-gray-400 mt-1"
              placeholder="Post Title"
              value={formValues.title}
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between mt-4">
            <div className="w-[48.5%]">
              <label className="text-[15px] font-medium ">Date</label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 rounded border border-gray-400"
                placeholder="Date published"
                type="date"
                name="date"
                value={formValues.date}
                onChange={handleChange}
              />
            </div>

            <div className="w-[48.5%]">
              <label className="text-[15px] font-medium ">Time</label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 rounded border border-gray-400"
                placeholder="Date published"
                type="time"
                name="time"
                value={formValues.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="text-[15px] font-medium ">Cover image</label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 rounded border border-gray-400"
              placeholder="Date published"
              type="file"
              name="cover_image"
              // value={base64Image}
              // onChange={handleChange}
              onChange={handleImageUpload}
            />
          </div>

          <div className="w-full flex justify-between mt-4">
            <div className="w-full">
              <label className="text-[15px] font-medium ">Description</label>
              <textarea
                className="w-full px-3 mt-1 py-2 outline-none rounded border border-gray-400"
                placeholder="Description"
                value={formValues.description}
                name="description"
                onChange={handleChange}
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
