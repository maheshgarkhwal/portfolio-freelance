import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "tom holland",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
      icon: "assets/youtube.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad nam, odio unde",
    },
    {
      id: 2,
      name: "tom holland",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
      icon: "assets/youtube.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad nam, odio unde",
      featured: true,
    },
    {
      id: 3,
      name: "tom holland",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
      icon: "assets/youtube.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad nam, odio unde",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((e) => (
          <div className={e.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-drawn-arrow.png" className="left" alt="" />
              <img className="user" src={e.img} alt="" />
              <img src={e.icon} className="right" alt="" />
            </div>
            <div className="center">{e.desc}</div>
            <div className="bottom">
              <h3>Mahesh Garkhwal</h3>
              <h4>arjunartistic</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
