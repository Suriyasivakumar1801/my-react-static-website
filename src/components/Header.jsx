import React from "react";
import Button from "./button";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <img src="logo" style={{ width: 150, height: 80, objectFit: "contain" }} />
      <Button text="DOWNLOAD APP" />
    </div>
  );
};

export default Header;
