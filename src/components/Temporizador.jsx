import { useEffect, useState } from "react"

function Temporizador(){

    const [seconds, setSeconds] = useState(0);

    // interval = referencia al tempo. que se crea en setInterval
    // setIntervak = 
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []); 
    

  return (
    <div>
      <h1>Temporizador: {seconds} segundos</h1>
    </div>
  );
}

export default Temporizador;