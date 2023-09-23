import * as Yup from "yup";

export const postEventValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  image: Yup.string(),
});
