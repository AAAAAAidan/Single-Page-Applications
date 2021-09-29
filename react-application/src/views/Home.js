import { Link } from "react-router-dom";
import damon from "../assets/damon.gif";
import "./Home.css";

function Home() {
  return (
    <Link to="/folders">
      <img src={damon} alt="Damon Gant" />
    </Link>
  );
}

export default Home;
