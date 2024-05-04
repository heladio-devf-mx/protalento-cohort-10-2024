import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [stateValue, setStateValue] = useState('');
  const refValue = useRef('');
  const [lista_de_tareas, setListaDeTareas] = useState(["Lavar el carro", "Lavar la ropa", "Cocinar"]);
  const lista_de_tareas_ref = useRef(["Lavar el pelo", "Lavar la ropa", "Cocinar"]);

  const handleStateChange = (event) => {
    console.log(event.target.value)
    setStateValue(event.target.value)
  }

  const handleRefChange = (event) => {
    console.log(event.target.value)
    refValue.current = event.target.value
  }

  const agregarState = () => {
    console.log(stateValue)
    let new_lista_de_tareas = [...lista_de_tareas, stateValue]
    setListaDeTareas([...new_lista_de_tareas])
  }

  const agregarRef = () => {
    console.log(refValue.current)
    
    lista_de_tareas_ref.current.push(refValue.current)
    //let new_lista_de_tareas = [...lista_de_tareas_ref.current, refValue.current]
    //lista_de_tareas_ref.current = [...new_lista_de_tareas]
  }

  const borrarUltimo = () => {
    lista_de_tareas
    let new_lista_de_tareas = [...lista_de_tareas]
    new_lista_de_tareas.pop()
    setListaDeTareas([...new_lista_de_tareas])
  }

  return (
    <>
      <label>State:</label><input onChange={handleStateChange} /><br />
      <label>Ref:</label><input onChange={handleRefChange}/><br />
      <button onClick={agregarState}>Agregar Tarea con State</button><br />
      <button onClick={agregarRef}>Agregar Tarea con Ref</button><br />
      <button onClick={borrarUltimo}>Borrar ultimo</button><br />
      <p>Valor del state: {stateValue}</p>
      <p>Valor del ref: {refValue.current}</p>
      <h1>Lista de tareas con State</h1>
      <ul>{lista_de_tareas.map((tarea, i)  => <li key={i}>{tarea}</li>)}</ul>
      <h1>Lista de tareas con Ref</h1>
      <ul>{lista_de_tareas_ref.current.map((tarea, i)  => <li key={i}>{tarea}</li>)}</ul>
    </>
  )
}

export default App
