import { useContext } from "react";
import { provaContext } from "../stores/provaContext";
import Card from "./Card";
import CardForm from "./CardForm";

const Content = () => {
  const {
    count,
    setCount,
    data,
    cities,
    addCity,
    formState,
    handleFieldChange,
    resetForm,
  } = useContext(provaContext);

  return (
    <>
      <CardForm addCity={addCity} />
      <div className="grid grid-cols-4 gap-5">
        {cities.map((values) => (
          <Card key={values.id} {...values}>
            {values.descrizione}
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {data.map((item) => (
          <div key={item.id} className="bg-slate-400 rounded-lg-p-3">
            <p className="text-red-500 mb-1">userid: {item.userId}</p>
            <h2 className="text-xl mb-3">{item.title}</h2>
            <p className="text-gray-800">{item.body}</p>
          </div>
        ))}
      </div>
      <form>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formState.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
        </div>
        <button onClick={resetForm}>Reset form</button>
        <button onClick={(e) => { e.preventDefault(); console.log(formState); }}>invia</button>
      </form>
    </>
  );
};

export default Content;
