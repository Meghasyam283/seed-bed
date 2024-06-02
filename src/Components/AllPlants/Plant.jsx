import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../AllPlants/plant.css";
import Navbar from "../Navbar/Navbar";
import PlantdData from "./PlantsList.json";
// import { IdContext } from "./IdContext";

function Plant() {
  const cactusList = PlantdData.AllPlants;
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);
  // const { setSelectedId } = useContext(IdContext);

  function handlePlantClick() {
    // setSelectedId(id);
    navigate("/plantcard");
  }

  const cactusListItems = cactusList.map((item) => (
    <div className="card" key={item.id}>
      <img
        className="card-img"
        src={item.img}
        alt="plant pic"
        onClick={handlePlantClick}
      />
      <h2 className="card-title">{item.name}</h2>
      <p className="">{item.desc}</p>
      <button onClick={() => setCount(count + 1)} className="add-cart">
        Add to cart
      </button>
    </div>
  ));

  return (
    <>
      {cactusListItems}
      <Navbar countofItems={count} id={id} />
    </>
  );
}
export default Plant;
