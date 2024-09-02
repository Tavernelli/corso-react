import { useEffect, useState } from "react";

export default function Example({ cities }) {
  const [count, setCount] = useState(0);

  //Definizione dell'effetto (si usa molto nelle chiamate API)
  useEffect(() => {
    localStorage.setItem("count", count.toString());
    document.title = `Conteggio: ${count}`;
    console.log("ogni volta che aggiorno count o cities aggiorno  l'effetto");
  }, [count,cities]); //array dipendenze, ogni voolta che viene aggiornato count fammi ripartire questa dipendenza
  //se non indico l'array delle dipendenze ogni volta che aggiorno la pagina con un evento viene chiamato
  //l'array vuoto viene chiamato solo quando carico il componente la prima volta
  
  
  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Conteggio: {count}</p>
      <button onClick={handleClick}> Incrementa </button>
    </>
  );
}
