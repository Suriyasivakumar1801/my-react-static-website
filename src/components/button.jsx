import React from "react";

function Button({ text = "" }) {
  return (
    <button
      style={{
        padding: "10px 35px",
        fontSize: 20,
        borderRadius: 35,
        backgroundColor: "#FF8264",
        color: "#fff",
        border: "none",
        // width:"100%"
      }}
    >
      {text}
    </button>
  );
}

export default Button;
