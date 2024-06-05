import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createLibro } from "../services/libros";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAllAutores } from "../services/autores";
import FormError from "../components/FormError";

const CrearLibro = () => {
  const [autores, setAutores] = useState([]);
  const [libro, setLibro] = useState(null);

  const yupSchema = yup.object({
    titulo: yup.string().required("Escribe un tíulo"),
    autor: yup.string().required("Selecciona un autor"),
    pais: yup.string(),
    genero: yup.string().required("Elige un género").oneOf(["Novela", "Cuento", "Ciencia Ficción"])
  }).required();

  const { register, handleSubmit, setError, formState: { errors }, reset } = useForm({
    resolver: yupResolver(yupSchema)
  });

  const onSubmit = async (data) => {
    try {
      let response = await createLibro(data);
      console.log(response);
      setLibro(response);
      reset();
    } catch (error) {
      console.log(`Error: ${error}`);
      setError('general', { message: 'Ocurrió un error con el servidor' });
    }
  }

  const obtenerAutores = async () => {
    try {
      const data = await getAllAutores();
      setAutores(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerAutores();
  }, []);


  return (
    <>
      {autores.length > 0 ?
        <section className='main-section'>
          <h1 className='section-title'>Crear Libro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {libro &&
              <div className="alert alert-success" role="alert">
                El libro fue creado con éxito
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            }
            <FormError message={errors.general?.message} />
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Título"
                {...register('titulo', { required: true })} />
              <label htmlFor="titulo">Titulo</label>
              <FormError message={errors.titulo?.message} />
            </div>
            <div className="form-floating mb-3">
              <select className="form-select" {...register('autor', { required: true })}>
                <option value="">Selecciona un autor</option>
                {autores.map((autor) => (
                  <option key={autor._id} value={autor._id}>{autor.nombre} {autor.apellido}</option>
                ))}
              </select>
              <label htmlFor="autor">Autor</label>
              <FormError message={errors.autor?.message} />
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Pais"
                {...register('pais')} />
              <label htmlFor="pais">Pais</label>
            </div>
            <div className="form-floating mb-3">
              <select className="form-select" {...register('genero', { required: true })}>
                <option value="Novela">Novela</option>
                <option value="Cuento">Cuento</option>
                <option value="Ciencia Ficción">Ciencia Ficción</option>
              </select>
              <label htmlFor="genero">Genero</label>
              <FormError message={errors.genero?.message} />
            </div>
            <input className="btn btn-primary" type="submit" value="Crear" />
          </form>
        </section> :
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </>
  );
}

export default CrearLibro;
