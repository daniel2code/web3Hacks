import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/wrapper";
import { useFormik } from "formik";
import { postAdsValidation } from "../../../utils/validations/postAdsValidation";
import { useSelector, useDispatch } from "react-redux";
import { createAds } from "../../../provider/slices/ads/createAds";
import { notifications } from "../../../utils/notificationBar";
import { useRouter } from "next/router";
import { updateAds } from "../../../provider/slices/ads/updateAds";

const Ads = () => {
  const dispatch = useDispatch();
  const [base64Image, setBase64Image] = useState("");
  const [checkIsEdit, setCheckIsEdit] = useState(false);
  const { loading } = useSelector((state) => state.createAds);
  const router = useRouter();
  const data = router.query;

  console.log(data);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64Image(reader.result);
      setFieldValue("image", reader.result);
    };
  };

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
    errors,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: {
      name: data?.name || "",
      image: data?.image || base64Image,
      link: data?.link || "",
      description: data?.description || "",
    },
    validationSchema: postAdsValidation,
    onSubmit: (values) => {
      // console.log(values);

      if (checkIsEdit === true) {
        dispatch(
          updateAds({
            name: values.name,
            link: values.link,
            image: values.image,
            description: values.description,
            cb: handleAfterPost,
            notifications,
            id: data?.id,
          })
        );
      } else {
        dispatch(
          createAds({
            name: values.name,
            link: values.link,
            image: values.image,
            description: values.description,
            cb: handleReset,
            notifications,
          })
        );
      }
    },
  });

  return (
    <Wrapper>
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <div className="flex justify-between">
          <h1 className="text-[27px] font-semibold text-[#000] ">Create Ads</h1>

          <button
            className="bg-[#00b4d8] text-white rounded px-[40px] cursor-pointer"
            onClick={handleSubmit}
            type="button"
          >
            Post
            {loading && <div className="lds-dual-ring"></div>}
          </button>
        </div>

        <form className="mt-5 mb-3">
          <div className="w-full">
            <label className="text-[15px] font-medium text-[#000]">Name</label>
            <input
              className="w-full px-3 py-2 bg-[#fff] text-[#000] outline-none rounded border border-gray-400 mt-1"
              placeholder="Post Title"
              value={values.name}
              name="name"
              onChange={handleChange}
            />

            {touched.name && errors.name ? (
              <p className="text-red-400 text-[14px]">{errors.name}</p>
            ) : (
              ""
            )}
          </div>

          <div className="w-full mt-3">
            <label className="text-[15px] font-medium text-[#000]">
              Project Link
            </label>
            <input
              className="w-full px-3 py-2 bg-[#fff] text-[#000] outline-none rounded border border-gray-400 mt-1"
              placeholder="https://link.com"
              value={values.link}
              name="link"
              onChange={handleChange}
            />

            {touched.link && errors.link ? (
              <p className="text-red-400 text-[14px]">{errors.link}</p>
            ) : (
              ""
            )}
          </div>

          <div className="w-full mt-4">
            <label className="text-[15px] font-medium text-[#000]">
              Banner image
            </label>
            <input
              className="w-full px-3 py-2 outline-none bg-[#fff] text-[#000] mt-1 rounded border border-gray-400"
              placeholder="Date published"
              type="file"
              name="image"
              onChange={handleImageUpload}
            />

            {touched.image && errors.image ? (
              <p className="text-red-400 text-[14px]">{errors.image}</p>
            ) : (
              ""
            )}
          </div>

          <div className="w-full flex justify-between mt-4">
            <div className="w-full">
              <label className="text-[15px] font-medium text-[#000]">
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

export default Ads;
