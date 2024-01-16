const Error = ({mensaje}) => {
  return (
   <div className="bg-red-600 text-white text-center p-3 mb-5 rounded font-semibold">
    <p> {mensaje}</p>
    </div>
  )
}

export default Error