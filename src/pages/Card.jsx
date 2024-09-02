import  Navbar  from "../components/Navbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Card() {
  const { cardID } = useParams();
  console.log(cardID);

  const cities = useSelector((state) =>
    state.cities.value.filter((city) => city.id == cardID.toString())
  );

  console.log(cities);

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold">{cities[0].name}</h1>
      <div className="flex flex-col p-4">
        {cities[0].isVisited && (
          <span className="text-green-600">✔️ visitata</span>
        )}
        {!cities[0].isVisited && (
          <span className="text-red-600">❌ non visitata</span>
        )}
      </div>
      <img src={cities[0].imgURL} className="rounded-t-md" alt="" width="400" />
    </>
  );
}
