import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      title: "Blogging App",
      icon: "assets/mobile-phone.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam, a quo neque debitis ut molestiae totam sit dolore inventore dolor laudantium ipsam aliquid harum deleniti reprehenderit, optio facere culpa!",
      img: "assets/a.png",
    },
    {
      id: 1,
      title: "E-Commerce website",
      icon: "assets/mobile-phone.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam, a quo neque debitis ut molestiae totam sit dolore inventore dolor laudantium ipsam aliquid harum deleniti reprehenderit, optio facere culpa!",
      img: "assets/b.png",
    },
    {
      id: 1,
      title: "Social media Website",
      icon: "assets/mobile-phone.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam, a quo neque debitis ut molestiae totam sit dolore inventore dolor laudantium ipsam aliquid harum deleniti reprehenderit, optio facere culpa!",
      img: "assets/c.png",
    },
  ];

  const handleClick = (way) => {
    way === `left`
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((e) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <img src={e.icon} alt="" className="imgContainer" />
                  <h2>{e.title}</h2>
                  <p>{e.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={e.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/left-arrow.png"
        className="arrow left"
        onClick={() => handleClick("left")}
        alt=""
      />
      <img
        src="assets/left-arrow.png"
        className="arrow right"
        onClick={() => handleClick("right")}
        alt=""
      />
    </div>
  );
}
