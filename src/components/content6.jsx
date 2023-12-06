import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Content6 = () => {
  const features = [
    {
      title: " Tire Change ",
      // description:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: " Flat Tire",
      // description:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Starting Triple ",
      // description:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Battery Jumpstart",
      // description:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Break Down ",
      // description:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Battery Jumpstart",
      // description:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Break Down ",
      // description:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    // {
    //   title: " Chain Issue ",
    //   // description:
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    // },
    // {
    //   title: " Clutch Cable Issue ",
    //   // description:
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    // },
  ];

  const renderFeatures = (features, index) => {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          paddingTop: 40,
          position: "relative",
        }}
      >
        <img
          src="https://kit.envalabdemos.com/aip/wp-content/uploads/2023/09/edit-color.png"
          width={60}
          height={60}
          style={{}}
        />
        <div
          style={{
            fontSize: 23,
            fontWeight: 800,
          }}
        >
          {features.title}
        </div>
        <div
          style={{
            padding: "0px 30px 70px 30px",
            textAlignLast: "center",
          }}
        >
          {features.description}
        </div>
        <div
          style={{
            width: 70,
            height: 70,
            backgroundImage: "linear-gradient(180deg, #FF8264 30%, #FF5127 70%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            color: "#fff",
            fontWeight: 700,
            position: "absolute",
            bottom: "-35px",
          }}
        >
          0{index}
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 25,
        }}
      >
        <div
          style={{
            fontSize: 50,
            color: "#000",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          24/7 Roadside Services
        </div>
        {/* <div
          style={{
            width: "40%",
            textAlignLast: "center",
            color: "#0005",
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
          marginTop: 50,
          width: "90vw",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          gap: 25,
        }}
      >
        <Swiper
          centeredSlides={false}
          spaceBetween={20}
          modules={[Navigation]}
          loop={true}
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          style={{
            padding: "20px 20px",
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "18px",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          //   style={{}}
        >
          {features.map((feature, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 70,
              }}
            >
              <div
                style={{
                  width: 300,
                  height: 250,
                  backgroundColor: "#FAFAFA",
                  borderRadius: 10,
                  border: "0.1px solid #FFE5DE",
                }}
              >
                {renderFeatures(feature, index + 1)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Content6;
