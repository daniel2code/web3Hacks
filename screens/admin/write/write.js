import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Wrapper from "../wrapper/wrapper";
// import { Editor } from "react-draft-wysiwyg";
import { useMutation } from "react-query";
import axios from "axios";
import { notifications } from "../../../utils/notificationBar";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Write = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [formValues, setFormValues] = useState({
    postTitle: "",
    category: "",
    author: "",
    datePublished: "",
    image: "",
    body: editorState,
  });
  const { isLoading, isError, error, mutate } = useMutation(postArticle);

  async function postArticle() {
    const response = await axios.post(
      "https://quiclet.urbandesignsco.com/api/admin/articles/create"
    );
    console.log(response.data);
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    mutate({ title: formValues.postTitle, content: formValues.body });
    console.log(formValues);
  }

  // notifications()

  return (
    <Wrapper>
      <div className="w-full max-w-[1400px] px-[30px] py-[30px]">
        <div className="flex justify-between">
          <h1 className="text-[27px] font-semibold ">Create new post</h1>

          <button
            className="bg-[#00b4d8] text-white rounded px-[40px] cursor-pointer"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>

        <form className="mt-5 mb-3">
          <div className="w-full">
            <label className="text-[15px] font-medium ">Post Title</label>
            <input
              className="w-full px-3 py-2 outline-none rounded border border-gray-400 mt-1"
              placeholder="Post Title"
              value={formValues.postTitle}
              name="postTitle"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label className="text-[15px] font-medium ">Select category</label>
            <select
              onChange={handleChange}
              value={formValues.category}
              name="category"
              className="w-full outline-none px-3 py-2 rounded border border-gray-400 mt-1 bg-[transparent] "
            >
              {/* <option disabled={true}>--select category--</option> */}
              <option>Testnet</option>
              <option>Airdrops</option>
              <option>Blockchain</option>
              <option>Trending</option>
            </select>
          </div>

          <div className="w-full flex justify-between mt-3">
            <div className="w-[60%]">
              <label className="text-[15px] font-medium ">Author</label>
              <input
                className="w-full px-3 mt-1 py-2 outline-none rounded border border-gray-400"
                placeholder="Author"
                value={formValues.author}
                name="author"
                onChange={handleChange}
              />
            </div>

            <div className="w-[38%]">
              <label className="text-[15px] font-medium ">Date published</label>
              <input
                className="w-full px-3 py-2 outline-none mt-1 rounded border border-gray-400"
                placeholder="Date published"
                type="date"
                name="datePublished"
                value={formValues.datePublished}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full mt-2">
            <label className="text-[15px] font-medium ">Cover image</label>
            <input
              className="w-full px-3 py-2 outline-none mt-1 rounded border border-gray-400"
              placeholder="Date published"
              type="file"
              name="image"
              value={formValues.image}
              onChange={handleChange}
            />
          </div>
        </form>

        <div className="min-h-[400px] p-3 rounded-md border border-gray-400 mt-8">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Write;
