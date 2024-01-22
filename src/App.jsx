import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'

function App() {
const [pacientes, setPacientes] = useState([])
const [paciente, setPaciente] = useState({})

useEffect(() => {
const obtenerLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
setPacientes(obtenerLS)
},[])

useEffect(() =>{
localStorage.setItem('pacientes', JSON.stringify( pacientes ))
},[pacientes])

const eliminarPaciente = id => {
  const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
  setPacientes(pacientesActualizados)
}

  return(
    <div className='container mx-auto my-10'>
    <Header/>
    <div className=' mt-5 md:flex'>
     <Formulario
     pacientes={pacientes}
     setPacientes={setPacientes}
     paciente={paciente}
     setPaciente={setPaciente}
     />
     <Listado
     pacientes={pacientes}
     setPaciente={setPaciente}
     eliminarPaciente={eliminarPaciente}
     />
    </div>
   
    </div>
  )
  
}

export default App
