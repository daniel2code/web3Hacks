import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import Wrapper from "../wrapper/wrapper";
import dynamic from "next/dynamic";
import { modules, formats } from "../../../utils/editorAssets";
import { createTutorialPost } from "../../../provider/slices/tutPost/postTut";
import { updateTutorialPost } from "../../../provider/slices/tutPost/updateTut";
import { postTutValidation } from "../../../utils/validations/postTutValidation";
import { notifications } from "../../../utils/notificationBar";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const PostAirdrop = () => {
  const dispatch = useDispatch();
  const [editorValue, setEditorValue] = useState("");
  const [base64Image, setBase64Image] = useState("");
  const [checkIsEdit, setCheckIsEdit] = useState(false);
  const { loading } = useSelector((state) => state.postTut);
  const { loading: loadingUpdate } = useSelector((state) => state.updateTut);
  const router = useRouter();
  const data = router.query;

  console.log(data);

  useEffect(() => {
    if (data.isEdit === "true") {
      setCheckIsEdit(true);
      setFieldValue("content", data?.body);
      setEditorValue(data?.body);
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
    values,
    errors,
    handleBlur,
    touched,
    handleSubmit,
    setFieldValue,
    handleReset,
  } = useFormik({
    initialValues: {
      title: data?.title || "",
      content: data?.content || "",
      description: data?.description || "",
      category: data?.category || "",
      image: data?.image || base64Image,
      airdropLink: data?.airdropLink || "",
      date: data?.date || "",
      network: data?.network || "",
      endDate: data?.endDate || "",
      facebook: data?.facebook || "",
      twitter: data?.twitter || "",
      website: data?.website || "",
      medium: data?.medium || "",
      telegram: data?.telegram || "",
    },

    validationSchema: postTutValidation,

    onSubmit: (values) => {
      console.log(values);

      if (checkIsEdit === true) {
        dispatch(
          updateTutorialPost({
            title: values.title,
            content: values.content,
            description: values.description,
            category: values.category,
            image: values.image,
            airdropLink: values.airdropLink,
            date: values.date,
            network: values.network,
            endDate: values.endDate,
            facebook: values.facebook,
            twitter: values.twitter,
            website: values.website,
            medium: values.medium,
            telegram: values.telegram,
            notifications: notifications,
            cb: handleAfterPost,
          })
        );
      } else {
        dispatch(
          createTutorialPost({
            title: values.title,
            content: values.content,
            description: values.description,
            category: values.category,
            image: values.image,
            airdropLink: values.airdropLink,
            date: values.date,
            network: values.network,
            endDate: values.endDate,
            facebook: values.facebook,
            twitter: values.twitter,
            website: values.website,
            medium: values.medium,
            telegram: values.telegram,
            notifications: notifications,
            cb: handleReset,
          })
        );
      }
    },
  });

  useEffect(() => {
    setFieldValue("content", editorValue);
  }, [editorValue]);

  // const handleChange = (e) => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };

  const handleChangeEditor = (html) => {
    setEditorValue(html);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64Image(reader.result);
      setFieldValue("image", reader.result);
    };
  };

  return (
    <Wrapper>
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <div className="flex justify-between">
          <h1 className="text-[27px] font-semibold  text-[#000]">
            Create Airdrop Post
          </h1>

          <button
            className="bg-[#00b4d8] text-white rounded px-[40px] cursor-pointer"
            onClick={handleSubmit}
            disabled={loadingUpdate || loading}
            type="button"
          >
            Post Airdrop{" "}
            {(loadingUpdate && <div className="lds-dual-ring"></div>) ||
              (loading && <div className="lds-dual-ring"></div>)}
          </button>
        </div>

        <form className="mt-5 mb-3">
          <div className="w-full">
            <label className="text-[15px] font-medium text-[#000]">Title</label>
            <input
              className="w-full px-3 py-2 outline-none rounded border text-[#000] bg-[#fff] border-gray-400 mt-1"
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
          <div className="mt-3">
            <label className="text-[15px] font-medium text-[#000]">
              Select category
            </label>
            <select
              onChange={handleChange}
              value={values.category}
              name="category"
              className="w-full outline-none px-3 py-2 rounded border border-gray-400 mt-1 bg-[transparent] text-[#000]"
            >
              {/* <option disabled={true}>--select category--</option> */}
              <option className="text-[#000]">Testnet</option>
              <option className="text-[#000]">Airdrops</option>
              <option className="text-[#000]">Node</option>
            </select>

            {touched.category && errors.category ? (
              <p className="text-red-400 text-[14px]">{errors.category}</p>
            ) : (
              ""
            )}
          </div>

          <div className="w-full flex justify-between mt-3">
            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                Airdrop Link
              </label>
              <input
                className="w-full px-3 mt-1 py-2 outline-none rounded bg-[#fff] text-[#000] border border-gray-400"
                placeholder="Airdrop Link"
                value={values.airdropLink}
                name="airdropLink"
                onChange={handleChange}
              />

              {touched.airdropLink && errors.airdropLink ? (
                <p className="text-red-400 text-[14px]">{errors.airdropLink}</p>
              ) : (
                ""
              )}
            </div>

            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                Date published
              </label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
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
          </div>

          <div className="w-full flex justify-between mt-3">
            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                Platform or Network
              </label>
              <input
                className="w-full px-3 mt-1 py-2 outline-none rounded bg-[#fff] text-[#000] border border-gray-400"
                placeholder="Platform or Network"
                value={values.network}
                name="network"
                onChange={handleChange}
              />

              {touched.network && errors.network ? (
                <p className="text-red-400 text-[14px]">{errors.network}</p>
              ) : (
                ""
              )}
            </div>

            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                End Date
              </label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
                placeholder="End Date"
                type="date"
                name="endDate"
                value={values.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full flex justify-between mt-3">
            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                Facebook Link
              </label>
              <input
                className="w-full px-3 mt-1 py-2 outline-none rounded bg-[#fff] text-[#000] border border-gray-400"
                placeholder="Facebook Link"
                value={values.facebook}
                name="facebook"
                onChange={handleChange}
              />
            </div>

            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                Twitter Link
              </label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
                placeholder="Twitter Link"
                type="text"
                name="twitter"
                value={values.twitter}
                onChange={handleChange}
              />

              {touched.twitter && errors.twitter ? (
                <p className="text-red-400 text-[14px]">{errors.twitter}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="w-full flex justify-between mt-3">
            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                Website Link
              </label>
              <input
                className="w-full px-3 mt-1 py-2 outline-none rounded bg-[#fff] text-[#000] border border-gray-400"
                placeholder="Website Link"
                value={values.website}
                name="website"
                onChange={handleChange}
              />
            </div>

            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                Telegram Link
              </label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
                placeholder="Telegram Link"
                type="text"
                name="telegram"
                value={values.telegram}
                onChange={handleChange}
              />

              {touched.telegram && errors.telegram ? (
                <p className="text-red-400 text-[14px]">{errors.telegram}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="w-full flex justify-between mt-3">
            <div className="w-[49%]">
              <label className="text-[15px] font-medium text-[#000]">
                Medium Link
              </label>
              <input
                className="w-full px-3 mt-1 py-2 outline-none rounded bg-[#fff] text-[#000] border border-gray-400"
                placeholder="Medium Link"
                value={values.medium}
                name="medium"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full mt-2">
            <label className="text-[15px] font-medium text-[#000]">
              Cover image
            </label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
              placeholder="Date published"
              type="file"
              // name="image"
              // value={base64Image}
              // onChange={handleChange}
              onChange={handleImageUpload}
            />
          </div>

          {touched.image && errors.image ? (
            <p className="text-red-400 text-[14px]">{errors.image}</p>
          ) : (
            ""
          )}
        </form>

        <div className="min-h-[400px] p-3 rounded-md border border-gray-400 mt-8">
          <ReactQuill
            theme="snow"
            onChange={handleChangeEditor}
            value={editorValue}
            modules={modules}
            formats={formats}
            bounds={".app"}
            placeholder="write something ..."
            className="text-[#000]"
          />

          {touched.content && errors.content ? (
            <p className="text-red-400 text-[14px]">{errors.content}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default PostAirdrop;
