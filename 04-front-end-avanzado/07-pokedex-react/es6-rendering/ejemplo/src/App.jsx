import './App.css'

function App() {
  const miListaDeFrutas = ["manzana", "pera", "naranja", "uva", "sandía", "papaya"];
  const edadDeJuanito = 20;


  return (
    <div>
    <ul>
      {miListaDeFrutas.map((fruta, i) => 
      <li key={i} style={{color: "red"}}>{fruta}</li>)}

      {/* <li style="color: red">"Sandía</li> */}
    </ul>

    {edadDeJuanito >= 18 && "Desplegar contenido grafico" || "No desplegar contenido grafico"}
    </div>
  )
}

export default App
