import { useEffect } from "react";

export default function useCounterProva() {
  useEffect(() => {
    const IntervalID = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      console.log(randomNumber)
    }, 1000);
    return () => { //il return sotto pulisce l'effetto con clearInterval
      clearInterval(IntervalID);
    };
  }, []);
}
