'use client'

export default function Home() {
  return (
    <div className="main-container">
      <div className="sveiki">Sveiki!</div>
      <div
        className="main-box"
        onClick={() => {
          window.location.href = "senior";
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
