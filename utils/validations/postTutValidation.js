import * as Yup from "yup";

export const postTutValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  airdropLink: Yup.string()
    .required("Airdrop link is required")
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/\S*)?$/,
      "Invalid URL format"
    ),
  content: Yup.string().required("Content is required"),
  category: Yup.string().required("Category is required"),
  image: Yup.string().required("Cover image is required"),
  date: Yup.string().required("Date is required"),
  twitter: Yup.string()
    .required("Twitter is required")
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/\S*)?$/,
      "Invalid URL format"
    ),
  telegram: Yup.string()
    .required("Telegram is required")
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/\S*)?$/,
      "Invalid URL format"
    ),
});
