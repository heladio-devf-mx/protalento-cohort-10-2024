const BASE_URL = "http://localhost:3000/api/v1"

const getAllAutores = async () => {
  const response = await fetch(`${BASE_URL}/autores`) 
  const { data } = await response.json()
  console.log(data)
  return data
}


export { getAllAutores }