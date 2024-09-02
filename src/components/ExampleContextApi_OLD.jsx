import { useEffect, useState, useContext } from "react";
import { provaContext } from "../stores/provaContext";


export default function ExampleContextApi() {
  
  const { count, setCount } = useContext(provaContext);

  return (
    <>
      <p>Conteggio: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incrementa
      </button>
    </>
  );
}
