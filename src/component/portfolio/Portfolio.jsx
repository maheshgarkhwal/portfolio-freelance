import { FreeBreakfastTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Portfoliolist from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webAppPortfolio,
  designingPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Featured",
      title: "Featured",
    },
    {
      id: "Web App",
      title: "Web App",
    },
    {
      id: "Designing",
      title: "Designing",
    },
    {
      id: "branding",
      title: "branding",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "Web App":
        setData(webAppPortfolio);
        break;
      case "Designing":
        setData(designingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((e) => (
          <div className="item">
            <img src={e.img} alt="" />
            <h3>{e.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
