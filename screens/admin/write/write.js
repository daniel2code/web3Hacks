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
import { createBlogPost } from "../../../provider/slices/posts/createPost";

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
  const { loading } = useSelector((state) => state.createPost);
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

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

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

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValues.postTitle ||
      !editorValue ||
      !formValues.author ||
      !base64Image
    ) {
      notifications("danger", "Inputs must not be empty");
    } else {
      // mutation.mutate({
      //   title: formValues.postTitle,
      //   content: editorValue,
      //   description: formValues.author,
      //   category_id: 1,
      //   image: base64Image,
      // });

      try {
        await dispatch(
          createBlogPost({
            title: formValues.postTitle,
            content: editorValue,
            description: formValues.author,
            category_id: 1,
            image: base64Image,
            notifications,
          })
        );
        setStep(1);

        // notifications("success", "Article published successfully");
        setFormValues({
          postTitle: "",
          image: "",
          category: "",
          author: "",
          datePublished: "",
          body: "",
        });
        setBase64Image("");
        setEditorValue(null);
        
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <Wrapper>
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <div className="flex justify-between">
          <h1 className="text-[27px] font-semibold text-[#000] ">
            Create new post
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
            <label className="text-[15px] font-medium text-[#000]">
              Post Title
            </label>
            <input
              className="w-full px-3 py-2 outline-none rounded border text-[#000] bg-[#fff] border-gray-400 mt-1"
              placeholder="Post Title"
              value={formValues.postTitle}
              name="postTitle"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label className="text-[15px] font-medium text-[#000]">
              Select category
            </label>
            <select
              onChange={handleChange}
              value={formValues.category}
              name="category"
              className="w-full outline-none px-3 py-2 rounded border border-gray-400 mt-1 bg-[transparent] text-[#000]"
            >
              {/* <option disabled={true}>--select category--</option> */}
              <option className="text-[#000]">Testnet</option>
              <option className="text-[#000]">Airdrops</option>
              <option className="text-[#000]">Blockchain</option>
              <option className="text-[#000]">Trending</option>
            </select>
          </div>

          <div className="w-full flex justify-between mt-3">
            <div className="w-[60%]">
              <label className="text-[15px] font-medium text-[#000]">
                Author
              </label>
              <input
                className="w-full px-3 mt-1 py-2 outline-none rounded bg-[#fff] text-[#000] border border-gray-400"
                placeholder="Author"
                value={formValues.author}
                name="author"
                onChange={handleChange}
              />
            </div>

            <div className="w-[38%]">
              <label className="text-[15px] font-medium text-[#000]">
                Date published
              </label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 bg-[#fff] text-[#000] rounded border border-gray-400"
                placeholder="Date published"
                type="date"
                name="datePublished"
                value={formValues.datePublished}
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
        </form>

        <div className="min-h-[400px] p-3 rounded-md border border-gray-400 mt-8">
          {/* <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          /> */}

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
        </div>
      </div>
    </Wrapper>
  );
};

export default Write;
