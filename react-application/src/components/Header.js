import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/" style={{color: "yellow"}}>Aidan Zamboni: Ace Jabroni</Link>
      </h1>
    </header>
  );
}

export default Header;
