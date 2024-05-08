import './MiPerfil.css';
import './InfoPersona';
import InfoPersona from './InfoPersona';

function MiPerfil() {
  const hobbies = "Dormir, comer, leer.";

  return (
    // JSX
    <section>
      <h2>Lectura Componentes</h2>
      <div className="data-container">
        <div className="info-container">
          <strong>Nombre:</strong> <span>Heladio</span>
        </div>
        <div className="info-container">
          <strong>Ocupación:</strong> <span>Sensei</span>
        </div>
        <InfoPersona campo="Hobbies" info={hobbies} />
      </div>
    </section>
  );
}

export default MiPerfil;