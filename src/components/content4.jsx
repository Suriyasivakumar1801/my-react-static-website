import React from "react";

const Content4 = () => {
  const points = [
    "1. Available 24/7:We understand that emergencies don't adhere to a schedule. That's why our Roadside Assistance service is available around the clock, 24 hours a day, 7 days a week. Whether you find yourself stranded in the middle of nowhere or facing an issue in the dead of night, MotoDoctor is here for you.",
    "2. Comprehensive Coverage:With MotoDoctor's Roadside Assistance, you're not just covered – you're comprehensively protected. From flat tires to dead batteries, and everything in between, our service is designed to handle a wide range of roadside challenges. Drive with confidence, knowing that help is just a call away.",
    "3. Peace of Mind:When the unexpected happens, you want the assurance that you're in good hands. Our experienced and friendly roadside assistance team is dedicated to ensuring your safety and resolving issues promptly. We strive to turn a stressful situation into a moment where you can breathe easy, knowing help is on the way.",
    "4. Anywhere, Anytime:No matter how far you roam, MotoDoctor is close enough to help. Whether you're on a cross-country road trip or navigating the local streets, our extensive network ensures that help is never too far away. Your safety is our priority, and we're with you every step of the way.",
  ];

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <div
        style={{
          width: "90%",
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="/Inner_Mobile_Screen_01.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "absolute",
                left: "-20%",
              }}
            />
            <img
              src="/Inner_Mobile_Screen_03.png"
              style={{
                height: 360,
                width: 250,
                objectFit: "cover",
                position: "absolute",
                right: "0%",
                top: "20%",
                objectPosition: "center",
                borderRadius: 10,
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
        <div style={{ width: "60%", paddingLeft: 50 }}>
          <div
            style={{
              fontSize: 45,
              fontWeight: 700,
            }}
          >
            Roadside Assistance Program
          </div>
          <div
            style={{
              paddingTop: 30,
            }}
          >
            At MotoDoctor, our commitment to our customers goes beyond just providing top-notch vehicles – it extends to
            ensuring your safety and peace of mind on the road. Our 24/7 Roadside Assistance program is a testament to
            this dedication, offering you unparalleled protection whenever you need it.
          </div>
          <hr
            style={{
              marginTop: 30,
              width: "10%",
              border: "1.5px solid #FF8264",
            }}
          />
          <div
            style={{
              paddingTop: 30,
            }}
          >
            Why Choose MotoDoctor's Roadside Assistance?
          </div>
          <div
            style={{
              paddingTop: 30,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {points.map((point, idx) => {
              return (
                <div style={{ display: "flex" }} key={idx}>
                  <div
                    style={{
                      position: "relative",
                      paddingRight: 40,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 40,
                        fontWeight: 600,
                        color: "#FF8264",
                        position: "absolute",
                        top: -28,
                        left: 6,
                      }}
                    >
                      .
                    </div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        color: "#FF8264",
                        border: "2px solid #FF8264",
                        position: "absolute",
                        top: 0,
                      }}
                    />
                  </div>
                  <div>{point}</div>
                </div>
              );
            })}
          </div>
          {/* <div
            style={{
              paddingTop: 30,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Content4;
