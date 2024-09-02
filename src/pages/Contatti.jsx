import Navbar from "../components/Navbar";
import useCounterProva from "../hooks/useCounterProva";

export default function Contatti() {
  useCounterProva();

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold">pagina Contatti</h1>
    </>
  );
}

