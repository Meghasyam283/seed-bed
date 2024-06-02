import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import "./plantcard.css";
import { getNextDateTime } from "./GetDateAndTime";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

function PlantCard() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [nextDateTime, setNextDateTime] = useState(
    getNextDateTime(currentDateTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newCurrentDateTime = new Date();
      setCurrentDateTime(newCurrentDateTime);
      setNextDateTime(getNextDateTime(newCurrentDateTime));
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const cactus = [
    {
      id: 1,
      img: "https://i.postimg.cc/3wJqqLVh/pic1.jpg",
      name: "Saguaro",
      price: 500,
      deliveryDate: "{ getNextDateTime }",
      desc: "The saguaro is a tree-like cactus species in the monotypic genus Carnegiea that can grow to be over 12 meters tall.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/TmN3Nhj/alovera.jpg",
      name: "Alovera",
      price: 1000,
      desc: "Aloe vera is a succulent plant species of the genus Aloe. It is widely distributed, and is considered an invasive species.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/wdtsJ8t/kasturi.jpg",
      name: "Kasturi",
      price: 1000,
      desc: "Flower-heads purple, cylindrical 1.3-2 cm long, deeply embedded in woolly hairs and densely clustered at the top of the stem",
    },
    {
      id: 4,
      img: "https://i.ibb.co/9YZdcMH/TULSI.jpg",
      name: "Tulsi",
      price: 1000,
      desc: "holy basil or tulsi, is an aromatic perennial plant in the family Lamiaceae. It is native to tropical and subtropical regions ",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/3wJqqLVh/pic1.jpg",
      name: "Saguaro",
      price: 1000,
      desc: "The saguaro is a tree-like cactus species in the monotypic genus Carnegiea that can grow to be over 12 meters tall.",
    },
    {
      id: 6,
      img: "https://i.ibb.co/TmN3Nhj/alovera.jpg",
      name: "Alovera",
      price: 1000,
      desc: "Aloe vera is a succulent plant species of the genus Aloe. It is widely distributed, and is considered an invasive species.",
    },
    {
      id: 7,
      img: "https://i.ibb.co/wdtsJ8t/kasturi.jpg",
      name: "Kasturi",
      price: 1000,
      desc: "Flower-heads purple, cylindrical 1.3-2 cm long, deeply embedded in woolly hairs and densely clustered at the top of the stem",
    },
    {
      id: 8,
      img: "https://i.ibb.co/9YZdcMH/TULSI.jpg",
      name: "Tulsi",
      price: 1000,
      desc: "holy basil or tulsi, is an aromatic perennial plant in the family Lamiaceae. It is native to tropical and subtropical regions ",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="card-item-component">
        <div className="card-img">
          <img
            src="data:image/jpeg;base64,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"
            alt="sugauro"
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <span>Saguaro</span>
          </div>
          <div className="card-desc">
            <p>
              The Saguaro is a tree-like cactus species in monotypic genus
              Carnegia that can grow to be over 12 meters tall.{" "}
            </p>
          </div>
          <div className="card-del">
            <span className="del-span">Free Delivery </span>
            <span>
              By{" "}
              {nextDateTime
                .toString()
                .replace(" GMT+0530 (India Standard Time)", "")}
            </span>
          </div>
          <div className="card-hist">100+ bought in last week</div>
          <br />
          <div className="card-item-rating">
            <Icon size={25} style={{ color: "#F8DE22" }} icon={star} />
            <Icon size={25} style={{ color: "#F8DE22" }} icon={star} />
            <Icon size={25} style={{ color: "#F8DE22" }} icon={star} />
            <Icon size={25} style={{ color: "#F8DE22" }} icon={star} />
            <Icon size={25} style={{ color: "#F8DE22" }} icon={star} />
          </div>
          <div className="card-hist">100 bought in last month</div>
          <div className="gap"></div>
          <div className="card-item-price">
            <span className="card-discount">-35% </span>
            <span className="card-currency">₹</span>
            <span className="card-curr-price">489</span>
          </div>
          <div className="card-mrp">
            <span>M.R.P : </span>
            <span className="mrp-amt">₹749</span>
          </div>
          <div className="card-item-total">
            <span>Total: ₹489</span>
          </div>
          <br />
          <div className="card-buynow">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PlantCard;
