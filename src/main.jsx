import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./stylesheets/styles.scss";
import Countainer from "./Countainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Countainer />
  </React.StrictMode>
);
