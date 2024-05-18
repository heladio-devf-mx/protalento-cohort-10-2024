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
      <ul>
        {autores.map((autor) => (
          <li key={autor._id}>{autor.nombre} - {autor.apellido}</li>
        ))} 
      </ul>
    </div>
  )
}

export default Autores