"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("location", location);
    localStorage.setItem("phone", phone);
    window.location.href = "/";
  };

  return (
    <div className="reg-container">
      <h1>Registracija</h1>
      <input
        className="reg-input"
        placeholder="Jūsų vardas pavardė"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        className="reg-input"
        placeholder="Jūsų gyvenamoji vieta"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      ></input>
      <input
        className="reg-input"
        placeholder="Jūsų telefono numeris"
        onChange={(e) => {
          setPhone(e.target.value);
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
