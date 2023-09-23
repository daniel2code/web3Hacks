import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/wrapper";
import { useMutation } from "react-query";
import { ImageTo64 } from "../../../utils/convertImageToBase64";
import { notifications } from "../../../utils/notificationBar";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { postEventValidation } from "../../../utils/validations/postEventValidation";
import { createEvent } from "../../../provider/slices/events/createEvent";
import { updateEvent } from "../../../provider/slices/events/updateEvents";
import { useRouter } from "next/router";

const EventPage = () => {
  const dispatch = useDispatch();
  const [base64Image, setBase64Image] = useState("");
  const [checkIsEdit, setCheckIsEdit] = useState(false);
  const { loading } = useSelector((state) => state.createEvent);
  const router = useRouter();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64Image(reader.result);
      setFieldValue("image", reader.result);
    };
  };
  
  const data = router.query;

  console.log(data);

  useEffect(() => {
    if (data.isEdit === "true") {
      setCheckIsEdit(true);
      setBase64Image(data?.image);
      setFieldValue("image", data?.image);
    }
  }, []);

  const handleAfterPost = () => {
    setCheckIsEdit(false);
    handleReset();
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    handleReset,
  } = useFormik({
    initialValues: {
      title: data?.title || "",
      description: data?.description || "",
      date: data?.date || "",
      image: data?.image || base64Image,
      time: "",
    },

    validationSchema: postEventValidation,
    onSubmit: (values) => {
      if (checkIsEdit === true) {
        dispatch(
          updateEvent({
            date: `${values.date} ${values.time}`,
            description: values.description,
            cover_image: values.image,
            title: values.title,
            notifications,
            cb: handleAfterPost,
          })
        );
      } else {
        dispatch(
          createEvent({
            date: `${values.date} ${values.time}`,
            description: values.description,
            cover_image: values.image,
            title: values.title,
            notifications,
            cb: handleReset,
          })
        );
      }
    },
  });

  return (
    <Wrapper>
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <div className="flex justify-between">
          <h1 className="text-[27px] font-semibold  text-[#000]">
            Create new event
          </h1>

          <button
            className="bg-[#00b4d8] text-white rounded px-[40px] cursor-pointer"
            onClick={handleSubmit}
            disabled={loading}
          >
            Post {loading && <div className="lds-dual-ring"></div>}
          </button>
        </div>

        <form className="mt-5 mb-3">
          <div className="w-full">
            <label className="text-[15px] font-medium text-[#000]">Title</label>
            <input
              className="w-full px-3 py-2 bg-[#fff] text-[#000] outline-none rounded border border-gray-400 mt-1"
              placeholder="Post Title"
              value={values.title}
              name="title"
              onChange={handleChange}
            />

            {touched.title && errors.title ? (
              <p className="text-red-400 text-[14px]">{errors.title}</p>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between mt-4">
            <div className="w-[48.5%]">
              <label className="text-[15px] font-medium text-[#000]">
                Date
              </label>
              <input
                className="w-full px-3 py-2 outline-none bg-[#fff] text-[#000] mt-1 rounded border border-gray-400"
                placeholder="Date published"
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
              />

              {touched.date && errors.date ? (
                <p className="text-red-400 text-[14px]">{errors.date}</p>
              ) : (
                ""
              )}
            </div>

            <div className="w-[48.5%]">
              <label className="text-[15px] font-medium text-[#000]">
                Time
              </label>
              <input
                className="w-full px-3 py-2 outline-none bg-[#fff] text-[#000] mt-1 rounded border border-gray-400"
                placeholder="Date published"
                type="time"
                name="time"
                value={values.time}
                onChange={handleChange}
              />

              {touched.time && errors.time ? (
                <p className="text-red-400 text-[14px]">{errors.time}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="text-[15px] font-medium text-[#000]">
              Cover image
            </label>
            <input
              className="w-full px-3 py-2 outline-none bg-[#fff] text-[#000] mt-1 rounded border border-gray-400"
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
              <label className="text-[15px] font-medium text-[#000] ">
                Description
              </label>
              <textarea
                className="w-full px-3 mt-1 py-2 bg-[#fff] text-[#000] outline-none rounded border border-gray-400"
                placeholder="Description"
                value={values.description}
                name="description"
                onChange={handleChange}
                rows="5"
              />

              {touched.description && errors.description ? (
                <p className="text-red-400 text-[14px]">{errors.description}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default EventPage;
