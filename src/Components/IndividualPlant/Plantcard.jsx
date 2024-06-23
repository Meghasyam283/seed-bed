import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import "./plantcard.css";
import { getNextDateTime } from "./GetDateAndTime";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import plantData from "./PlantCard.json";
import { create, all } from "mathjs";

function PlantCard() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [nextDateTime, setNextDateTime] = useState(
    getNextDateTime(currentDateTime)
  );
  const { id } = useParams(); // Object Destructuring Array
  console.log(id);
  const math = create(all, {});

  useEffect(() => {
    const timer = setInterval(() => {
      const newCurrentDateTime = new Date();
      setCurrentDateTime(newCurrentDateTime);
      setNextDateTime(getNextDateTime(newCurrentDateTime));
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const data = plantData;
  const discountPrice =
    math.abs(data[id].price) -
    parseFloat((math.abs(data[id].price) * data[id].discount) / 100);

  return (
    <>
      <Navbar />
      <div className="card-item-component">
        <div className="card-img">
          <img src={data[id].img} https:alt="sugauro" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <span>{data[id].name}</span>
          </div>
          <div className="card-desc">
            <p>{data[id].desc} </p>
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
          <div className="card-hist">{data[id].history}</div>
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
            <span className="card-discount">{data[id].discount}% </span>
            <span className="card-currency">₹</span>
            <span className="card-curr-price">{discountPrice}</span>
          </div>
          <div className="card-mrp">
            <span>M.R.P : </span>
            <span className="mrp-amt">₹{data[id].price}</span>
          </div>
          <div className="card-item-total">
            <span>Total: ₹{discountPrice}</span>
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
