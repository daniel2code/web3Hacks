import * as Yup from "yup";

export const postValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string(),

  content: Yup.string().required("Content is required"),
  // category: Yup.string().required("Category is required"),
  image: Yup.string().required("Cover image is required"),
  date: Yup.string().required("Date is required"),
});
