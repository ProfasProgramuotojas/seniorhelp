"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const location = localStorage.getItem("location");
    const phone = localStorage.getItem("phone");
    if (!name || !location || !phone) setLoggedIn(false);
  }, []);

  const handleSenior = () => {
    if (loggedIn) {
      window.location.href = "/senior";
    } else {
      window.location.href = "/registruotis";
    }
  };

  return (
    <div className="main-container">
      <div className="sveiki">Sveiki!</div>
      <div
        className="main-box"
        onClick={() => {
          handleSenior();
        }}
      >
        <div className="main-text">Man Reikia pagalbos</div>
      </div>
      <div
        className="main-box"
        onClick={() => {
          window.location.href = "volunteer";
        }}
      >
        <div className="main-text">Galiu suteikti pagalbą</div>
      </div>
    </div>
  );
}
