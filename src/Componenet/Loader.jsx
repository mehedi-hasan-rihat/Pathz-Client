import React from "react";
import { HashLoader } from "react-spinners";

const Loader = ({ loading }) => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 100px)" }}>
    <HashLoader color="#3B82F6" loading={loading} size={150} />
  </div>
);

export default Loader;
