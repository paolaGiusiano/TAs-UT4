import React, { useState } from 'react';

function Ta5Component() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>
      {isVisible && <p>Texto de prueba</p>}
    </div>
  );
}

export default Ta5Component;
