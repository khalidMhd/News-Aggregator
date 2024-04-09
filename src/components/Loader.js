import React from "react";

const Loader = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "50vh" }}>
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
