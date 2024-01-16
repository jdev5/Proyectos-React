

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id} = paciente

const handleEliminar = () => {
  const respuesta = confirm('Deseas eliminar este paciente?')

  if(respuesta){
    eliminarPaciente(id)
  }
}

  return (
    <div className="bg-white shadow-md py-10 px-5 rounded-xl mb-3" >
    <p className="font-bold text-gray-700 uppercase">Nombre:{' '}
     <span className="font-normal normal-case">{nombre}</span></p>
   
   <p className="font-bold text-gray-700 uppercase">Propietario:{' '}
     <span className="font-normal normal-case">{propietario}</span></p>
  
   <p className="font-bold text-gray-700 uppercase">Email:{' '}
     <span className="font-normal normal-case">{email}</span></p>
 
  
    <p className="font-bold text-gray-700 uppercase">Fecha alta:{' '}
     <span className="font-normal normal-case">{fecha}</span></p>
  
   
    <p className="font-bold text-gray-700 uppercase">Sintomas:{' '}
     <span className="font-normal normal-case">{sintomas}</span></p>
     <div className="flex justify-between my-8">
      <button type="button"
      className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
      onClick={() => setPaciente(paciente)}
      >Editar</button>
      <button type="button"
      className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
      onClick={handleEliminar}
      >Eliminar</button>
     </div>
   </div>
  )
}

export default Paciente