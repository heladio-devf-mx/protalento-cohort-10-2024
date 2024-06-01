const getAllPaises = async (req, res) => {
  const order = req.query.order
  const paises = ["Colombia", "Venezuela", "Perú", "Chile"];
  
  if (order == "asc") {
    paises.sort();
  } else if (order == "desc") {
    paises.sort().reverse();
  }

  res.send({ data: paises });
}

const getEstadosDePais = async (req, res) => {
  const { pais } = req.params;
  // const pais = req.params.pais
  const paisesEstados = {
    "Colombia": ["Cundinamarca", "Antioquia", "Valle del Cauca"],
    "Venezuela": ["Anzoátegui", "Bolívar", "Cojedes"],
    "Perú": ["Lima", "Cusco", "Ayacucho"],
    "Chile": ["Santiago", "Valparaíso", "Biobás"],
    "Mexico": ["San Luis Potosí", "Sinaloa", "Sonora"]
  }
  const estados = paisesEstados[pais];
  res.send({ data: estados });
}

module.exports = { getAllPaises, getEstadosDePais }