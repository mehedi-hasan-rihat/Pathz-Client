import React from "react";
import { HashLoader } from "react-spinners";

const Loader = ({ loading }) => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 100px)" }}>
    {/* <HashLoader color="#3B82F6" loading={loading} size={150} /> */}
    <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
  </div>
);

export default Loader;
