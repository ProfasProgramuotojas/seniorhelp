"use client";

const GoBack = () => {
  function getBeforePath(path) {
    const parts = path.split("/");
    parts.pop();
    return parts.join("/");
  }
  const handleRedirect = () => {
    const res = getBeforePath(window.location.href);
    window.location.href = res;
  };

  return (
    <div
      className="arrow"
      onClick={() => {
        handleRedirect();
      }}
    >
      ➔
    </div>
  );
};

export default GoBack;
