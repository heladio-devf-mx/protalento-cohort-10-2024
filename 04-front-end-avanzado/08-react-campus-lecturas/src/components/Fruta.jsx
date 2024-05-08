function Fruta({ nombre, color }) {
  console.log(color);
  return (
    <li style={{backgroundColor: color}}>
      {nombre} - {color}
    </li>
  );
}

export default Fruta;
