'use client'

import React, { useEffect, useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("location", location);
  };

  return (
    <div>
      <input
        placeholder="Įveskite savo vardą"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        placeholder="Įveskite savo lokaciją"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default page;
