import "./App.css";
import Navbar from "./components/Navbar";
import CardForm from "./components/CardForm";
import Example from "./components/Example";

function App() {
/*   const cities = useSelector((state) => state.cities.value); */

  return (
    <>
      <Navbar></Navbar>
      <Example />
      <CardForm></CardForm>
      {/*     <div className="grid grid-cols-4 gap-5">
        {cities.map((city) => (
          <Card key={city.id} {...city}>
            {city.descrizione}
          </Card>
        ))}
      </div> */}
    </>
  );
}

export default App;
