import { useState } from "react";
import "../AllPlants/plant.css";
import pic1 from "../../assets/cactus/pic1.jpg";
import Navbar from "../Navbar/Navbar";
function Plant(props) {
  const cactusList = props.items;
  const category = props.category;
  const [count, setCount] = useState(0);

  const cactusListItems = cactusList.map((item) => (
    <div className="card" key={item.id}>
      <img className="card-img" src={item.img} alt="plant pic" />
      <h2 className="card-title">{item.name}</h2>
      <p className="">{item.desc}</p>
      <button onClick={() => setCount(count + 1)} className="add-cart">
        Add to
      </button>
    </div>
  ));

  return (
    <>
      {cactusListItems}
      <Navbar countofItems={count} />
    </>
  );
}
export default Plant;
