import React from "react";
import { Link } from "react-router-dom";
import BannerHome from "../assets/banneryeni.jpg";
import "../styles/Home.css";
const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerHome} ) ` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
