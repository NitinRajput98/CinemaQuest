import React from "react";

const Loader = ({ styles }) => {
  return (
    <div className="flex justify-center items-center">
      <div className={styles}></div>
    </div>
  );
};

export default Loader;
