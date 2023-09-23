import * as Yup from "yup";

export const postAdsValidation = Yup.object().shape({
  name: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  link: Yup.string()
    .required("Link is required")
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/\S*)?$/,
      "Invalid URL format"
    ),
  image: Yup.string().required("Banner image is required"),
});
