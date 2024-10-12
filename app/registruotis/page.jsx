'use client'

import React, { useEffect, useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("location", location);
    window.location.href = "/"
  };

  return (
    <div className="reg-container">
      <h1>Registracija</h1>
      <input
      className="reg-input"
        placeholder="Įveskite savo vardą"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
      className="reg-input"
        placeholder="Įveskite savo tikslią lokaciją"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      ></input>
      <p>Protopitui užtenka tik lokacijos ir vardo</p>
      <button
      className="reg-submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Registruotis
      </button>
    </div>
  );
};

export default page;
