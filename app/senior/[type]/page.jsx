"use client";

import { useParams } from "next/navigation";
import data from "../../../phones.json";
import { useState } from "react";
import { add_task } from "../../server_functions/add_task";

const page = () => {
  const params = useParams();
  const type = decodeURIComponent(params.type);

  const [confirm, setConfirm] = useState(false);
  const [done, setDone] = useState(false);

  const handleAddTask = async () => {
    const location = localStorage.getItem("location");
    const name = localStorage.getItem("name");
    const phone = localStorage.getItem("phone");
    if (!location || !name || !phone) {
      window.location.href = "/registruotis";
    } else {
      const date = new Date(Date.now()).toISOString();
      const data = {
        type: type,
        location: location,
        date: date,
        name: name,
        phone: phone,
      };
      await add_task(data);
    }
  };

  return (
    <div className="main-container">
      <div className="pagalba-header">Reikia pagalbos su: {type}</div>
      <a className="help-box" href={`tel:${type[data]}`}>
        <div>Skambinti konsultacijai: {data[type]}</div>
      </a>
      <div
        className="help-box"
        onClick={() => {
          setConfirm(true);
        }}
      >
        <div>Kviesti pagalbą į namus</div>
      </div>

      {confirm && (
        <div className="confirm-overlay">
          <div className="pagalba-header">
            Ar tikrai nori pasikviesti pagalbą į namus?
          </div>
          <div className="confirm-box">
            <div
              className="confirm-button"
              onClick={() => {
                handleAddTask();
                setDone(true);
              }}
            >
              <div className="senior-text">Taip</div>
            </div>
            <div
              className="decline-button"
              onClick={() => {
                setConfirm(false);
              }}
            >
              <div className="senior-text">Ne</div>
            </div>
          </div>
        </div>
      )}

      {done && (
        <div className="done-overlay">
          <div className="confirm-button">
            <div className="senior-text">
              Pagalbos kvietimas užregistruotas. Laukite skambučio
            </div>
            <div
              className="senior-body"
              style={{ marginTop: 50, maxHeight: 150 }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <div className="senior-text">Uždaryti</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
