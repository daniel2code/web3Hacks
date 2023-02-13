import { Store } from "react-notifications-component";

export const notifications = (type, message) => {
    
  Store.addNotification({
    title: "Wonderful!",
    message: message || "teodosii@react-notifications-component",
    type: type || "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
