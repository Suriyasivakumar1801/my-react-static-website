import React from "react";

const Content9 = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#fff",
        padding: "5vh 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
        }}
      >
        <div
          style={{
            fontWeight: 600,
          }}
        >
          Aip Screenshots
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#666",
            width: "50%",
            textAlignLast: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo.
        </div>
        <hr
          style={{
            width: "5%",
            border: "1.5px solid #FF8264",
          }}
        />
      </div>
      <div
        style={{
          marginTop: 70,
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/Inner_Mobile_Screen_01.png"
          style={{
            width: "30%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        <img
          src="/Inner_Mobile_Screen_01.png"
          style={{
            width: "30%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        <img
          src="/Inner_Mobile_Screen_01.png"
          style={{
            width: "30%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default Content9;
