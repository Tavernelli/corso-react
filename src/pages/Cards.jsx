import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cards() {
  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold mb-10">
        Pagina con tutte le cards con i link sottopagina
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {cities.map((city) => (
          <Link to={`/cards/${city.id}`} key={city.id}>
            <CardItem {...city}>{city.descrizione}</CardItem>
          </Link>
        ))}
      </div>
    </>
  );
}
