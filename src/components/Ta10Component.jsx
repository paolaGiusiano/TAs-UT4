import React, { useState, useEffect } from 'react';

function Ta10Component() {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de los datos
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Llamada a la API 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data); // Guardamos los usuarios en el estado
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); 
      });
  }, []); 


  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Nombre:</strong> {user.username} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ta10Component;
