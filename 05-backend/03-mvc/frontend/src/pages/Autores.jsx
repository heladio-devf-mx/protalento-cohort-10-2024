import { getAllAutores } from "../services/autores";
import { useState, useEffect } from "react";


const Autores = () => {
  const [autores, setAutores] = useState([])

  const obtenerAutores = async () => {
    try {
      const data = await getAllAutores()
      setAutores(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerAutores()
  }, []);


  return (
    <div>
      <h1>Autores</h1>

      {autores.map((autor) => (
        <div className="card" key={autor._id}>
          <div className="card-body">
            {autor.nombre} - {autor.apellido} - {autor.vive ? "Vive" : "No vive"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Autores;
