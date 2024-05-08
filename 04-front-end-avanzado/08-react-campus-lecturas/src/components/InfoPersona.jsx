function InfoPersona({ campo, info }) {
  // otra manera de recuperar la información de los props
  // destructuring explícito
  // const { info } = props;
  // console.log(info);

  return (
    <div className="info-container">
      <strong>{campo}:</strong> <span>{info}</span>
    </div>
  );
}

export default InfoPersona;