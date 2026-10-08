"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToasterProvider = () => {
return (
<ToastContainer
   position="top-right"
   autoClose={3000}
   hideProgressBar={false}
   newestOnTop
   closeOnClick
   pauseOnHover
   draggable
   theme="colored"
 />
);
};

export default ToasterProvider;