import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Tarjetas } from "./bootstrap/Tarjetas";

function LateralIzquierdo() {
  const [delitos, setDelitos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "delitos"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const delitosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDelitos(delitosData);
      setLoading(false);
    }, (error) => {
      console.error("Error al obtener los documentos en tiempo real: ", error);
      setLoading(false);
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return (
    <div className="LateralIzquierdo">
      <div className="Usuario">
        <h2>Usuario</h2>
      </div>
      <div className="delito-item">
        <h2>Delitos Recientes</h2>
        {loading ? <p>Cargando delitos...</p>
         : delitos.length > 0 ? delitos.map((delito) => (
            <Tarjetas key={delito.id} delito={delito} />
          )) : <p>No hay delitos reportados.</p>}
      </div>
    </div>
  );
}

export default LateralIzquierdo;