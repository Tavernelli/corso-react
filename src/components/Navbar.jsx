import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex gap-10 mb-10">
      <li>
        <Link to={"/"}>home</Link>
      </li>
      <li>
        <Link to={"/contatti"}>contatti</Link>
      </li>
      <li>
        <Link to={"/about"}>about</Link>
      </li>
      <li>
        <Link to={"/cards"}>cards versione 1</Link>
      </li>
      <li>
        <Link to={"/cards-children"}>cards versione 2</Link>
      </li>
    </ul>
  );
}

