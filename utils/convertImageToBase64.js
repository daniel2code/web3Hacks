import { useState } from "react";

export const ImageTo64 = () => {
  const [base64Image, setBase64Image] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64Image(reader.result);
    };
  };

  return { base64Image, handleImageUpload };
};
