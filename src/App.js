import './App.css';
import React, { useState, useEffect } from 'react';
import Centro from './components/centro';
import LateralDerecho from './components/lateralderecho';
import LateralIzquierdo from './components/lateralizquierdo';
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

function App() {
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
      } catch (error) {
        console.error("Error al obtener los documentos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDelitos();
  }, []);

  return (
    <div className="App">
      <LateralIzquierdo delitos={delitos} loading={loading} />
      <Centro />
      <LateralDerecho delitos={delitos} />
    </div>
  );
}

export default App;
