import React from "react";

const Content5 = () => {
  const details = [
    {
      img: "https://www.aptiv.com/images/default-source/sustainability/platform-icon-susta.svg?sfvrsn=814dc637_1",
      title: "24/7 Roadside Assistance",
      desc: "Whether you're stuck on the highway or facing an issue in the middle of the night, MotoDoctor(Rider) is available 24/7 to provide prompt assistance.",
    },
    {
      img: "https://leslyvevedmc.com/wp-content/uploads/2021/12/Ecommerce.png",
      title: "On-Demand Mechanics:",
      desc: "Need a quick fix or professional advice? Our network of skilled motorcycle mechanics is just a tap away. Schedule on-demand services at your convenience.",
    },
    {
      img: "https://leslyvevedmc.com/wp-content/uploads/2021/12/Ecommerce.png",
      title: "Tow and Transport:",
      desc: "In case your bike needs more than a roadside repair, we've got you covered with our towing and transport services. Your bike will reach the desired location safely and securely.",
    },
    {
      img: "https://leslyvevedmc.com/wp-content/uploads/2021/12/Ecommerce.png",
      title: "Emergency Fuel Delivery:",
      desc: "Ran out of gas? No worries! MotoDoctor(Rider) ensures you never get stranded with our emergency fuel delivery service.",
    },
    {
      img: "https://leslyvevedmc.com/wp-content/uploads/2021/12/Ecommerce.png",
      title: "Real-Time Tracking:",
      desc: "Track the location and estimated arrival time of our mechanics or assistance vehicles in real-time through the app.",
    },
  ];

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#fff",
        paddingTop: 45,
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
          <img
            src="/Inner_Mobile_Screen_01.png"
            style={{
              width: "90%",
              height: "100vh",
              objectFit: "contain",
              marginTop: 30,
            }}
          />
        </div>
        <div style={{ width: "60%", paddingLeft: 50 }}>
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
            }}
          >
            Your Trusted MotoDoctor and Roadside Assistance
          </div>
          <div
            style={{
              paddingTop: 30,
            }}
          >
            Are you a motorcycle enthusiast who loves the open road? We understand that unexpected breakdowns or
            maintenance issues can put a dent in your ride. That's why we're thrilled to introduce MotoDoctor, your
            go-to solution for reliable moto mechanic support and roadside assistance.
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
              paddingTop: 50,
              display: "flex",
              flexDirection: "column",
              gap: 60,
            }}
          >
            {details.map((detail, idx) => {
              return (
                <div style={{ display: "flex" }} key={idx}>
                  <img
                    width={80}
                    height={60}
                    src={detail.img}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <div
                    style={{
                      paddingLeft: 10,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                      }}
                    >
                      {detail.title}
                    </div>
                    <div
                      style={{
                        width: "95%",
                        paddingTop: 3,
                      }}
                    >
                      {detail.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content5;
