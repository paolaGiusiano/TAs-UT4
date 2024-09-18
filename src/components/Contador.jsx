// TA4 y 9

import React, { useState, useEffect } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  const aumentar = () => setCount(prevCount => prevCount + 1);
  const disminuir = () => setCount(prevCount => prevCount - 1);

  // useEffect = actualizar el título del documento cada vez que cambie el contador
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]); 

  return (
    <div className="card">
      <h2>Contador: {count}</h2>
      <button onClick={aumentar} style={{ marginRight: '10px' }}>
        Aumentar
      </button>
      <button onClick={disminuir}>
        Disminuir
      </button>
    </div>
  );
}

export default Contador;
