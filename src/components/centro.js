import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Tarjetas } from "./bootstrap/Tarjetas";

function Centro() {
  const [delitos, setDelitos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDelitos = async () => {
      try {
        const q = query(collection(db, "delitos"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const delitosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDelitos(delitosData);
        console.log("Datos recibidos de Firebase:", delitosData); // <-- ¡Punto de depuración!
      } catch (error) {
        console.error("Error al obtener los documentos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDelitos();
  }, []); // El array vacío asegura que se ejecute solo una vez

  return (
    <div className="Centro">
      <header>
        <h1>Base de datos</h1>
      </header>
      {loading ? (
        <p>Cargando datos...</p>
      ) : delitos.length > 0 ? (
        delitos.map((delito) => (
          <Tarjetas key={delito.id} delito={delito} />
        ))
      ) : (
        <p>No se encontraron datos en la colección 'delitos'.</p>
      )}
    </div>
  );
}

export default Centro;
