import { useState } from "react";
import "./works.scss";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "",
      title: "Solution Engineer",
      desc:
        "Part of Development experience in Data-ingestion-service automation for private and public Cloud"
      },
      
    {
      id: "2",
      icon: "",
      title: "Mobile Application Development",
      desc:
        "descriptionA Flutter based mobile application, “E-Drishti”; which intends to keep the ministry connected, updated & able to monitor the entire Railway network at any place.",
      },
    {
      id: "3",
      icon: "",
      title: "Academic Projects",
      desc:[
        "1. Prediction of Human Emotion Analysis: Real-time application for human emotions recognition using Tensor-flow and Keras.",
        "2. Education Website using ASP.Net"
      ]
    },
      {
      id: "4",
      icon: "",
      title: "Problem Solving",
      desc:
        "CodeChef: @vishu1089,\
        Hackerrank: @pandeyvaishnavi1, \
        LeetCode: @vishu1089686"
      },
      {
      id: "5",
      icon: "",
      title: "Portfolio Website",
      desc:
        "Created a Portfolio Website using React js"
      }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}