import { useEffect, useState } from "react";
import { getAllPaises, getEstadosDePais } from "../services/paises";

const Paises = () => {
  const [paises, setPaises] = useState([])
  const [estados, setEstados] = useState([])
  
  const obtenerPaises = async () => {
    try {
      const data = await getAllPaises()
      setPaises(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePaisChange = async (event) => {
    const pais = event.target.value
    const estados = await getEstadosDePais(pais)
    setEstados(estados)
  }

  useEffect(() => {
    obtenerPaises()
  }, []);

  
  return (
    <div>
      <h1>Paises</h1>
      <select onChange={handlePaisChange}>
      {paises.map((pais) => (
        <option key={pais} value={pais}>
          {pais}
        </option>
      ))}
      </select>
      <p>Estados:</p>
      <ul>
        {estados.length > 0 && estados.map((estado, i) => (
          <li key={i}>{estado}</li>
        ))}
      </ul>
    </div>
  );
};

export default Paises