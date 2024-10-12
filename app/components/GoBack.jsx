"use client";

import { useNavigate } from "react-router-dom";

const GoBack = () => {
  let navigate = useNavigate();

  return (
    <div
      className="arrow"
      onClick={() => {
        navigate(-1);
      }}
    >
      ➔
    </div>
  );
};

export default GoBack;
