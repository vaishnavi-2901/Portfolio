import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  DevelopmentProfile,
  ProfilePortfolio,
  Applicationdev,
  GoogleDialogflow,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Development");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "DevelopmentProfile",
      title: "Backend Development",
    },
    {
      id: "ProfilePortfolio",
      title: "Profile Portfolio",
    },
    {
      id: "Applicationdev",
      title: "Application Development",
    },
    {
      id: "GoogleDialogflow",
      title: "Google Dialogflow",
    },
    {
      id: "content",
      title: "Content Writing",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Development":
        setData(DevelopmentProfile);
        break;
      case "ProfilePortfolio":
        setData(ProfilePortfolio);
        break;
      case "Applicationdev":
        setData(Applicationdev);
        break;
      case "GoogleDialogflow":
        setData(GoogleDialogflow);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(DevelopmentProfile);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">

      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <div>
          <p>
          <a href="assets/vaishnavi_resume.pdf"
          class="button" download><i class="fa fa-download"></i>Resume</a>
          </p>
        </div>
    </div>
  );
}
