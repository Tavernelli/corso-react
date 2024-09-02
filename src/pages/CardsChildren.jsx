import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";

export default function CardsChildren() {
  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold mb-10">Pagina CardsChildren</h1>
      <div className="grid grid-cols-4 gap-5">
        {cities.map((city) => (
          <Link to={`/cards-children/${city.id}`} key={city.id}>
            <CardItem {...city}>{city.descrizione}</CardItem>
          </Link>
        ))}
      </div>
      <Outlet></Outlet>
    </>
  );
}
