import { useState } from "react";
import { createAutor } from "../services/autores";

const CrearAutor = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [vive, setVive] = useState(true)

  const crearAutor = async (event) => {
    event.preventDefault()
    //let { nombre, apellido, vive } = event.target
    //console.log(nombre.value, apellido.value, vive.value)
    //let autor = { nombre: nombre, apellido: apellido, vive : vive }
    try {
      await createAutor({ nombre, apellido, vive })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Crear Autor</h1>
      <form onSubmit={crearAutor}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" 
        name="nombre" onChange={(event) => setNombre(event.target.value)} />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" 
        name="apellido" onChange={(event) => setApellido(event.target.value)}/>
        <br />
        <select name="vive" id="vive" onChange={(event) => setVive(event.target.value)}>
          <option value="true">Vive</option>
          <option value="false">No vive</option>
        </select>
        <br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default CrearAutor