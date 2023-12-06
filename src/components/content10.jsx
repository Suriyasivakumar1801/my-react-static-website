import React from "react";

const Content10 = () => {
  const faqs = [
    {
      ques: "Download and Sign Up",
      ans: "Get started by downloading MotoDoctor(Rider) from the App Store or Google Play. Sign up and create your profile for a personalized experience.",
    },
    {
      ques: "Request Assistance",
      ans: "When you're facing a breakdown or need a quick check-up, simply open the app, and request assistance. Provide details about your location and the issue you're experiencing.",
    },
    {
      ques: "Get Matched with a Mechanic:",
      ans: "Our smart matching algorithm will connect you with the nearest available mechanic who specializes in your bike's make and model.",
    },
    {
      ques: "Track and Communicate:",
      ans: " Track the mechanic's arrival in real-time and communicate directly through the app. Receive updates on the progress of your service.",
    },
    {
      ques: "Pay Securely:",
      ans: "Once the service is complete, pay securely through the app. No need for cash transactions – it's all hassle-free.",
    },
  ];
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
            fontSize: 45,
            fontWeight: 600,
            width: "30%",
            textAlign: "center",
            textAlignLast: "center",
          }}
        >
          How It Works ?:
        </div>
        {/* <div
          style={{
            fontSize: 16,
            color: "#666",
            width: "50%",
            textAlignLast: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo.
        </div> */}
        <hr
          style={{
            width: "5%",
            border: "1.5px solid #FF8264",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <img
          src="https://kit.envalabdemos.com/aip/wp-content/uploads/2023/09/questions-flat-illustration-H8Q6NNR.png"
          style={{ height: "100%", width: "40%", objectFit: "cover" }}
        />
        <div
          style={{
            width: "50%",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                paddingBottom: 20,
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  padding: "15px 10px",
                  backgroundColor: "#FFF2EF",
                  borderRadius: 10,
                }}
              >
                {faq.ques}
              </div>
              <div style={{ padding: "0px 10px" }}>{faq.ans}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content10;
