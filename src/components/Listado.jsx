import Paciente from "./Paciente"


const Listado = ({pacientes, setPaciente, eliminarPaciente}) => {
 
  
   return (
    <div className="mx-5 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      
      {pacientes && pacientes.length ? (
        <>
         <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
         <p className="text-lg text-center m-5">
         Administra tus {' '}
         <span className="text-indigo-600 font-bold">pacientes y citas</span>
         </p>

        { pacientes.map( paciente => (
        <Paciente
        key={paciente.id}
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
        ))}
      </>

      ) : (
        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
         <p className="text-lg text-center m-5">
         Agrega pacientes y {' '}
         <span className="text-indigo-600 font-bold">apareceran aqui!</span>
         </p>
        </>
      )}
    

  
  </div>
     
  )
}

export default Listado