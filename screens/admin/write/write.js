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
import { MdOutlineArticle } from "react-icons/md";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createBlogPost } from "../../../provider/slices/posts/createPost";
import WriteArticle from "./writeArticle";
import WriteTutorial from "./writeTutorial";

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
  const [selectType, setSelectType] = useState(null);
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
      <div className="w-full max-w-[1400px] px-[30px] py-[30px] min-h-[93vh] ">
        <div className="w-full">
          <h1 className="text-[27px] font-semibold text-[#000] ">
            What do you want to write?
          </h1>

          <div className="flex w-full justify-between mt-[40px] ">
            <div
              className="w-[47%] cursor-pointer flex flex-col justify-center items-center border border-gray-400 py-[50px] px-[5%] shadow-sm rounded-[15px] "
              onClick={() => setSelectType("article")}
            >
              <MdOutlineArticle size={45} color="#00b4d8" />

              <p className="text-[22px] mt-[15px] font-[600] text-[#000] ">
                Article
              </p>
            </div>

            <div
              className="w-[47%] cursor-pointer border border-gray-400 py-[50px] flex flex-col justify-center items-center  px-[5%] shadow-sm rounded-[15px] "
              onClick={() => setSelectType("tutorial")}
            >
              <MdOutlineArticle size={45} color="#00b4d8" />

              <p className="text-[22px] mt-[15px] font-[600] text-[#000] ">
                Tutorial
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          {selectType === "article" && <WriteArticle />}
          {selectType === "tutorial" && <WriteTutorial />}
        </div>
      </div>
    </Wrapper>
  );
};

export default Write;
