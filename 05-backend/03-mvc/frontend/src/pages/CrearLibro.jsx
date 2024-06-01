import { useForm } from "react-hook-form";
import { createLibro } from "../services/libros";

const CrearLibro = () => {

  const { register, handleSubmit, setError, formState: { errors } }  = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await createLibro(data);
    } catch (error) {
      console.log(error);
      setError('general', { message: "Ocurrio un error con el servidor" });
    }
  }


  return (
    <>
      <section className='main-section'>
        <h1 className='section-title'>Crear Libro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.general?.message &&
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {errors.general?.message}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          }
          <div className="form-floating mb-3">
          <input 
          className="form-control" 
          type="text" 
          placeholder="Titulo"
          {...register('titulo')} />
          <label htmlFor="titulo">Titulo</label>
          </div>
          <input className="btn btn-primary" type="submit" value="Crear"/>
        </form>
      </section>
    </>
  )  
}

export default CrearLibro