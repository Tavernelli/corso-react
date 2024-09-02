import { useState, useContext } from "react";
import { provaContext } from "../stores/provaContext";

export default function CardForm({ addCity }) {
  const [city, setCity] = useState({
    id: 0,
    name: "",
    descrizione: "",
    imgURL: "",
    isVisited: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setCity({
      ...city,
      [name]: type == "checkbox" ? checked : value,
    });
  }

  const { count } = useContext(provaContext);

  
  return (
    <form
      onSubmit={(e) => {
        console.log(city);
        addCity({ ...city, id: Math.random() });
        setCity({
          id: 0,
          name: "",
          descrizione: "",
          imgURL: "",
          isVisited: false,
        });
        e.preventDefault();
      }}
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
    >
      <div className="flex flex-col">
        <label>Nome</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={city.name}
        ></input>
      </div>

      <div className="flex flex-col">
        <label>descrizione {count}</label>
        <textarea
          type="text"
          onChange={handleChange}
          name="descrizione"
          value={city.descrizione}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label>immagine</label>
        <input
          type="text"
          onChange={handleChange}
          name="imgURL"
          value={city.imgURL}
        ></input>
      </div>
      <div className="flex flex-col">
        <label>Visitata</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="isVisited"
          checked={city.isVisited}
        ></input>
      </div>
      <button className="bg-zinc-950" type="submit">
        Aggiungi Card
      </button>
    </form>
  );
}
