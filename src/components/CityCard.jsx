import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
 

function CityCard() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [clickedIndex, setClickedIndex] = useState(null);

  const updateSlides = () => {
    if (window.innerWidth >= 1000) {
      setSlidesToShow(4);
      setSlidesToScroll(1);
    } else {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    }
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  const data = [
    {
      name: "Ho",
      buttonText: "34 Jobs",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBujW20LSFnFVZjFhkJaoyngoOWMUQnETwEuE3TUxKnhowtLz3SFw5zzUfeAKxEJBEMZw&usqp=CAU",
    },
    {
      name: "Accra",
      buttonText: "343 Jobs",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzL5EzNasJLHcklzatRWcHQ6-IC8vEM2f1ynVQJ8aOWXpbqaNF8BCotKQk3ZdqNHo2nk&usqp=CAU",
    },
    {
      name: "Keta",
      buttonText: "42 Jobs",
      img: "https://www.graphic.com.gh/images/2023/jun/15/amm.jpg",
    },
    {
      name: "Madina",
      buttonText: "34 Jobs",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpzcckH1yvrYT2Rt2beNvqrHGKI3BL-Qiz5FqL3ZVG59A3KwneCiBzUkq0p1SAQnmUlo&usqp=CAU",
    },
    {
      name: "Zongo",
      buttonText: "45 Jobs",
      img: "https://www.graphic.com.gh/images/2023/jun/15/amm.jpg",
    },
  ];

  const handleImageClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div>
      <div className="w-full mt-20 overflow-hidden py-5 pr-20 mt-5">
      <h2 className="text-3xl font-semibold mb-6 font-quicksand text-center">Featured Cities</h2> {/* Add this line for the heading */}
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className={`w-full slick-slide ${clickedIndex === index ? "clicked" : ""}`}
              style={{ margin: "0 10px" }}
            >
              <div
                className="bg-cover bg-center h-[500px] relative rounded-xl mb-8"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url('${d.img}')`,
                }}
                onClick={() => handleImageClick(index)}
              >
                <div className="absolute bottom-0 w-full text-white font-quicksand">
                  <div className="flex flex-col items-center justify-center p-4 text-center" style={{ marginLeft: "10px" }}>
                    <p className="text-xl font-semibold">{d.name}</p>
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                       
                    >
                      {d.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CityCard;
