import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const CardList = () => {
  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const [fetchData, setfetchData] = useState([]);
  useEffect(() => {
    fetch("https://dummyapi.online/api/social-profiles")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setfetchData(json);
      });
  }, []);
  return (
    <div className="w-11/12  m-auto mt-20   ">
      <div className="w-full  button-container flex justify-end items-center gap-8 pe-6 h-[70px]">
        <button
          className="  right-28  border-4 border-slate-300 arrow-button"
          onClick={() => slider.current.slickPrev()}
        >
          <FaArrowLeftLong className="arrows h-10 w-4" />
        </button>
        <button
          className="  right-5 border-4 border-slate-300 arrow-button"
          onClick={() => slider.current.slickNext()}
        >
          <FaArrowRightLong className="arrows h-10 w-4" />
        </button>
      </div>

      <Slider {...settings} ref={slider}>
        {fetchData.map((data) => (
          <Card
            image={data.profilePic}
            name={data.fullName}
            id={data.userId}
            bio={data.bio}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CardList;
