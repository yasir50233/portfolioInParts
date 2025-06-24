import React from "react";

const CustomButton  = ({ label, actionType, href, className = "" }) => {
  const handleClick = () => {
    if (actionType === "open") {
      window.open(href, "_blank");
    } else if (actionType === "download") {
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", "");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
};

export default CustomButton;