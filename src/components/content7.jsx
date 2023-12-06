import React from "react";

const Content7 = () => {
  return (
    <div
      style={{
        padding: "10vh 0px",
        minHeight: "100vh",
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <div
        style={{
          width: "90vw",
          height: "100vh",
          backgroundColor: "#FFF2EF",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          padding: 45,
          borderRadius: 20,
        }}
      >
        <div
          style={{
            width: "55%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Experience the freedom of the open road without the worry of unexpected breakdowns. With MotoDoctor's
            Roadside Assistance, you're not just driving; you're driving with confidence. Your safety is our priority,
            and our commitment to excellence is evident in every aspect of our service. 

            Choose MotoDoctor – because when you're with us, the journey is as enjoyable as the destination.
          </div>
        </div>
        <div
          style={{
            width: "45%",
          }}
        >
          <img
            src="/Inner_Mobile_Screen_01.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Content7;
