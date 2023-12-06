import React from "react";

const Content8 = () => {
  return (
    <div
      style={{
        height: "90vh",
        backgroundColor: "#FFF2EF",
        paddingTop: 45,
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 30,
        clipPath: "polygon(0 8%, 100% 0%, 100% 93%, 0% 100%)",
        padding: "0 20px", // Add padding to the sides for smaller screens
      }}
    >
      <div
        style={{
          fontSize: "clamp(30px, 5vw, 50px)", // Responsive font size
          fontWeight: 700,
          letterSpacing: 2,
          textAlign: "center", // Center text for all screens
        }}
      >
        Join Moto Doctor Community:
      </div>
      <div
        style={{
          width: "100%", // Use full width on smaller screens
          maxWidth: "800px", // Limit width for larger screens
          textAlign: "center", // Center text for all screens
        }}
      >
        Become a part of our growing community of motorcycle enthusiasts who trust MotoDoctor for their on-the-road
        needs. Whether you're a daily commuter or a weekend adventurer, we're here to ensure your journey stays smooth
        and enjoyable. Download MotoDoctor today and experience the freedom of the open road with the confidence that
        help is just a tap away!
      </div>
      <hr
        style={{
          width: "5%",
          border: "1.5px solid #FF8264",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center", // Center images for all screens
        }}
      >
        <img
          src="https://kit.envalabdemos.com/aip/wp-content/uploads/2023/09/playstore.png"
          style={{ maxWidth: "100%", height: "auto" }} // Make sure the image is responsive
        />
        <img
          src="https://kit.envalabdemos.com/aip/wp-content/uploads/2023/09/applestore.png"
          style={{ maxWidth: "100%", height: "auto" }} // Make sure the image is responsive
        />
      </div>
    </div>
  );
};

export default Content8;
