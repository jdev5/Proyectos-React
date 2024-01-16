import { useState, useEffect } from "react"
import Error from "./Error"


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    console.log(Object.keys(paciente))

   useEffect( () => {
   if( Object.keys(paciente).length > 0){
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
   }
   }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36)
        const fecha = Date.now().toString(36)
        
        return random.slice(2) + fecha

    }
    
    const handleSubmit = (e) => {
         e.preventDefault()

         //Validacion del formulario
         if ([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log(" Hay al menos un campo vacio")
            setError(true)
            return;
         } 

         setError(false)

         //Objeto Paciente

         const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
           
         }
        
         if(paciente.id){
        
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState )
            setPacientes(pacientesActualizados)
            setPaciente({})

         } else {
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
         }

        
         
         //Reiniciar el form
         setNombre('')
         setPropietario('')
         setEmail('')
         setFecha('')
         setSintomas('')
    }


  return (
    <div className="md:w-1/2 lg:w-2/5">
     <h2 className=" text-3xl font-black text-center">Seguimiento Pacientes</h2>
     <p className="text-lg m-5 text-center"> Añade pacientes y {' '}
     <span className="text-indigo-600 font-bold">administralos</span>
     </p>
     <form 
     onSubmit={handleSubmit}
     className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-5">
     {error && <Error
     mensaje='Todos los campos son obligatorios'
     />}
        <div className="mb-5">
            <label htmlFor="mascota" className="block font-bold text-gray-700 uppercase">
                Nombre Mascota</label>
            <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="propietario" className="block font-bold text-gray-700 uppercase">
                Nombre propietario</label>
            <input 
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block font-bold text-gray-700 uppercase">
                correo electronico</label>
            <input 
            id="email"
            type="email"
            placeholder="ejemplo@email.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="date" className="block font-bold text-gray-700 uppercase">
                alta</label>
            <input 
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="sintomas" className="block font-bold text-gray-700 uppercase">
                sintomas</label>
        <textarea id="sintomas"
         className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
         placeholder="Describe los sintomas"
         value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
        />
        </div>
       
       <input type="submit" 
       className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
       hover:bg-indigo-700 cursor-pointer transition-colors"
       value= {paciente.id ? 'Editar paciente' : 'Agregar paciente'}
       />
     </form>
    </div>
   
  )
}

export default Formulario