import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../wrapper/wrapper";
// import ReactQuill from "react-quill";
// import { Editor } from "react-draft-wysiwyg";
import { useMutation } from "react-query";
import axios from "axios";
import { notifications } from "../../../utils/notificationBar";
import { modules, formats } from "../../../utils/editorAssets";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createTutorialPost } from "../../../provider/slices/tutPost/postTut";
import { useFormik } from "formik";
import { postTutValidation } from "../../../utils/validations/postTutValidation";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const Write = () => {
  const [step, setStep] = useState(1);
  const [editorValue, setEditorValue] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [formValues, setFormValues] = useState({
    postTitle: "",
    category: "",
    author: "",
    datePublished: "",
    image: base64Image,
    body: editorValue,
  });
  const auth = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.postTut);
  const dispatch = useDispatch();
  // const { isLoading, isError, error, mutate } = useMutation(postArticle);

  // async function postArticle() {
  //   const response = await axios.post(
  //     "https://quiclet.urbandesignsco.com/api/admin/articles/create"
  //   );
  //   console.log(response.data);
  // }

  const mutation = useMutation((newTodo) => {
    return axios.post(
      "https://api.dapplab.co/api/admin/articles/create",
      newTodo,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64Image(reader.result);
    };
  };

  // const handleChange = (e) => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };

  const handleChangeEditor = (html) => {
    setEditorValue(html);
  };

  useEffect(() => {
    if (step <= 1 && mutation.isSuccess === true) {
      notifications("success", mutation?.data?.data?.message);
      setStep(step + 1);
      setFormValues({ ...formValues, postTitle: "", author: "" });
      setBase64Image("");
      setEditorValue(null);
      console.log(mutation?.data?.data);
    }
  }, [mutation]);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   if (
  //     !formValues.postTitle ||
  //     !editorValue ||
  //     !formValues.author ||
  //     !base64Image
  //   ) {
  //     notifications("danger", "Inputs must not be empty");
  //   } else {
  //     // mutation.mutate({
  //     //   title: formValues.postTitle,
  //     //   content: editorValue,
  //     //   description: formValues.author,
  //     //   category_id: 1,
  //     //   image: base64Image,
  //     // });

  //     try {
  //       await dispatch(
  //         createBlogPost({
  //           title: formValues.postTitle,
  //           content: editorValue,
  //           description: formValues.author,
  //           category_id: 1,
  //           image: base64Image,
  //           notifications,
  //         })
  //       );
  //       setStep(1);

  //       // notifications("success", "Article published successfully");
  //       setFormValues({
  //         postTitle: "",
  //         image: "",
  //         category: "",
  //         author: "",
  //         datePublished: "",
  //         body: "",
  //       });
  //       setBase64Image("");
  //       setEditorValue(null);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    handleBlur,
    handleReset,
  } = useFormik({
    initialValues: {
      title: "",
      airdropLink: "",
      content: editorValue,
      image: base64Image,
      date: "",
      website: "",
      twitter: "",
      telegram: "",
      author: "",
      medium: "",
      network: "",
      start_date: "",
      end_date: "",
      category_id: "1",
    },
    validationSchema: postTutValidation,
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        createTutorialPost({
          title: values.title,
          airdropLink: values.airdropLink,
          content: values.content,
          date: values.date,
          author: values.author,
          twitter: values.twitter,
          telegram: values.telegram,
          website: values.website,
          image: values.image,
          network: values.network,
          medium: values.medium,
          end_date: values.end_date,
          start_date: values.start_date,
          category_id: values.category_id,
        })
      );
    },
  });

  useEffect(() => {
    if (editorValue) {
      setFieldValue("content", editorValue);
    }
  }, [editorValue]);

  useEffect(() => {
    if (base64Image) {
      setFieldValue("image", base64Image);
    }
  }, [base64Image]);

  console.log(errors);

  return (
    <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
      <div className="flex justify-between">
        <h1 className="text-[27px] font-semibold text-[#000] ">
          Create new tutorial
        </h1>

        <button
          className="bg-[#00b4d8] text-white rounded px-[40px] cursor-pointer"
          onClick={handleSubmit}
          disabled={loading}
          type="submit"
        >
          Post {loading && <div className="lds-dual-ring"></div>}
        </button>
      </div>

      <form className="mt-5 mb-3">
        <div className="w-full">
          <label className="text-[15px] font-medium text-[#000]">
            Post Title
          </label>
          <input
            className="w-full px-3 py-2 outline-none rounded border text-[#000] bg-[#fff] border-gray-400 mt-1"
            placeholder="Tutorial Title"
            value={values.title}
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.title && errors.title && (
            <p className="error-text">{errors.title}</p>
          )}
        </div>

        {/* <div className="mt-3">
          <label className="text-[15px] font-medium text-[#000]">
            Select category
          </label>
          <select
            onChange={handleChange}
            value={formValues.category}
            name="category"
            className="w-full outline-none px-3 py-2 rounded border border-gray-400 mt-1 bg-[transparent] text-[#000]"
          >
          
            <option className="text-[#000]">Testnet</option>
            <option className="text-[#000]">Airdrops</option>
            <option className="text-[#000]">Blockchain</option>
            <option className="text-[#000]">Trending</option>
          </select>
        </div> */}

        <div className="mt-3">
          <label className="text-[15px] font-medium text-[#000]">Network</label>
          <input
            className="w-full px-3 mt-1 py-2 outline-none rounded bg-[#fff] text-[#000] border border-gray-400"
            placeholder="Network"
            value={values.network}
            name="network"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.network && errors.network && (
            <p className="error-text">{errors.network}</p>
          )}
        </div>

        <div className="w-full flex justify-between mt-3">
          <div className="w-[60%]">
            <label className="text-[15px] font-medium text-[#000]">
              Author
            </label>

            <input
              className="w-full px-3 mt-1 py-2 outline-none rounded bg-[#fff] text-[#000] border border-gray-400"
              placeholder="Author"
              value={values.author}
              name="author"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.author && errors.author && (
              <p className="error-text">{errors.author}</p>
            )}
          </div>

          <div className="w-[38%]">
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
              onBlur={handleBlur}
            />

            {touched.date && errors.date && (
              <p className="error-text">{errors.date}</p>
            )}
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
            name="image"
            // value={base64Image}
            // onChange={handleChange}
            onChange={handleImageUpload}
            onBlur={handleBlur}
          />

          {touched.image && errors.image && (
            <p className="error-text">{errors.image}</p>
          )}
        </div>

        <div className="w-full flex gap-x-[3%] justify-between mt-3">
          <div className="w-[50%]">
            <label className="text-[15px] font-medium text-[#000]">
              Airdrop Link
            </label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
              placeholder="Project Airdrop Link"
              type="text"
              name="airdropLink"
              value={values.airdropLink}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.title && errors.title && (
              <p className="error-text">{errors.title}</p>
            )}
          </div>

          <div className="w-[50%]">
            <label className="text-[15px] font-medium text-[#000]">
              Website Link
            </label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
              placeholder="Project Website"
              type="text"
              name="website"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.website && errors.website && (
              <p className="error-text">{errors.website}</p>
            )}
          </div>
        </div>

        <div className="w-full flex gap-x-[3%] justify-between mt-3">
          <div className="w-[50%]">
            <label className="text-[15px] font-medium text-[#000]">
              Telegram
            </label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
              placeholder="Project Telegram"
              type="text"
              name="telegram"
              value={values.telegram}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.telegram && errors.telegram && (
              <p className="error-text">{errors.telegram}</p>
            )}
          </div>

          <div className="w-[50%]">
            <label className="text-[15px] font-medium text-[#000]">
              Twitter
            </label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
              placeholder="Project Twtter"
              type="text"
              name="twitter"
              value={values.twitter}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.twitter && errors.twitter && (
              <p className="error-text">{errors.twitter}</p>
            )}
          </div>
        </div>

        <div className="w-full flex gap-x-[3%] justify-between mt-3">
          <div className="w-[100%]">
            <label className="text-[15px] font-medium text-[#000]">
              Medium
            </label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
              placeholder="Medium Account"
              type="text"
              name="medium"
              value={values.medium}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.medium && errors.medium && (
              <p className="error-text">{errors.medium}</p>
            )}
          </div>
        </div>

        <div className="w-full flex gap-x-[3%] justify-between mt-3">
          <div className="w-[50%]">
            <label className="text-[15px] font-medium text-[#000]">
              Start Date
            </label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
              placeholder="Project Telegram"
              type="date"
              name="start_date"
              value={values.start_date}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.start_date && errors.start_date && (
              <p className="error-text">{errors.start_date}</p>
            )}
          </div>

          <div className="w-[50%]">
            <label className="text-[15px] font-medium text-[#000]">
              End Date
            </label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
              placeholder="Project Twtter"
              type="date"
              name="end_date"
              value={values.end_date}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.end_date && errors.end_date && (
              <p className="error-text">{errors.end_date}</p>
            )}
          </div>
        </div>

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

          {touched.content && errors.content && (
            <p className="error-text">{errors.content}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Write;
