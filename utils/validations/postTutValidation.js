import * as Yup from "yup";

export const postTutValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string(),
  airdropLink: Yup.string()
    .required("Airdrop link is required")
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/\S*)?$/,
      "Invalid URL format"
    ),
  content: Yup.string().required("Content is required"),
  network: Yup.string().required("Network is required"),
  // category: Yup.string().required("Category is required"),
  image: Yup.string().required("Cover image is required"),
  date: Yup.string().required("Date is required"),
  medium: Yup.string()
    .required("Medium is required")
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/\S*)?$/,
      "Invalid URL format"
    ),
  website: Yup.string()
    .required("Website is required")
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/\S*)?$/,
      "Invalid URL format"
    ),
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

  start_date: Yup.string().required("Start date is required"),
  end_date: Yup.string().required("End date is required"),
});
