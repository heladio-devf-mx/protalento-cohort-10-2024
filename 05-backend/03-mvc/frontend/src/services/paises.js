const BASE_URL = "http://localhost:3000/api/v1";

const getAllPaises = async () => {
  const paises = await fetch(`${BASE_URL}/paises`);
  const { data } = await paises.json();
  return data
}

const getEstadosDePais = async (pais, order) => {
  const paisesEstados = await fetch(`${BASE_URL}/estados/${pais}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    query: {order}
  }
);
  const { data } = await paisesEstados.json();
  return data
}

export { getAllPaises, getEstadosDePais }