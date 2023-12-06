import React from "react";
import Button from "./button";

function Content1() {
  return (
    <div
      className="content1"
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEDE9",
        clipPath: "polygon(0 0, 100% 0%, 100% 90%, 0% 100%)",
        overflow: "hidden",
      }}
    >
      <div
        className="content1Left"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div className="content1Head" style={{ fontWeight: 800 }}>
          ROADSIDE ASSISTANCE SERVICES
        </div>
        <div className="content1Text" style={{ color: "#494E59" }}>
          Our responsibility to our customers is our Roadside Assistance program. Our 24/7 roadside service offers
          protection and peace of mind, so you know that you're safe, Covered, and in good hands with MotoDoctor. So,
          you need roadside help when you’re stranded in the middle of nowhere and in the middle of the night. Luckily,
          no matter how far you roam, MotoDoctor is close enough to help.
        </div>
        {/* <Button text="GET STARTED" /> */}
      </div>
      <div className="content1Img" style={{ height: "100%" }}>
        <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src="/homebanner.png" />
      </div>
    </div>
  );
}

export default Content1;
