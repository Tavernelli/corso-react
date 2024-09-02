import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/citiesSlice";

export default function CardForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    descrizione: "",
    imgURL: "",
    isVisited: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type == "checkbox" ? checked : value,
    });
  }

/*   const { count } = useContext(provaContext); */

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setFormData({
          id: 0,
          name: "",
          descrizione: "",
          imgURL: "",
          isVisited: false,
        });
        dispatch(add({ ...formData, id: Math.random() }));
      }}
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
    >
      <div className="flex flex-col">
        <label>Nome</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formData.name}
        ></input>
      </div>

      <div className="flex flex-col">
        <label>descrizione</label>
        <textarea
          type="text"
          onChange={handleChange}
          name="descrizione"
          value={formData.descrizione}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label>immagine</label>
        <input
          type="text"
          onChange={handleChange}
          name="imgURL"
          value={formData.imgURL}
        ></input>
      </div>
      <div className="flex flex-col">
        <label>Visitata</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="isVisited"
          checked={formData.isVisited}
        ></input>
      </div>
      <button className="bg-zinc-950" type="submit">
        Aggiungi Card
      </button>
    </form>
  );
}
