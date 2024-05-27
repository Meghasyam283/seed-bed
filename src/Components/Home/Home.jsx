import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Plant from "../AllPlants/Plant";

function Home() {
  return (
    <>
      <Navbar />
      <Plant />
    </>
  );
}
export default Home;
