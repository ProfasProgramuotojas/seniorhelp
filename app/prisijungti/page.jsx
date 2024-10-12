"use client";

import { useState } from "react";
import { get_senior } from "../server_functions/get_senior";

const page = () => {
  const [name, setName] = useState();

  const handleSubmit = async () => {
    // const res = await get_senior(name);
    // const fullName = res.first_name + " " + res.last_name;
    const fullName = "abrakadaabra"
    const res = {location: "Vilbius"}
    localStorage.setItem("name", fullName)
    localStorage.setItem("location", res.location)

  };

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        submit
      </button>
    </div>
  );
};

export default page;
