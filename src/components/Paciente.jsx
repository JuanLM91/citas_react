const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id  } = paciente

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?")

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className='mt-5 bg-white shadow-md mx-5 py-10 px-5 rounded-lg'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: 
          <span className='font-normal normal-case'> {nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: 
          <span className='font-normal normal-case'> {propietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: 
          <span className='font-normal normal-case'> {email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: 
          <span className='font-normal normal-case'> {fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>síntomas: 
          <span className='font-normal normal-case'> {sintomas}</span>
        </p>

        <div className="text-center mt-7">
          <button
            type="button"
            className="shadow-sm mx-5 rounded-md border-2 border-green-400 px-3 py-1 uppercase font-semibold hover:border-white hover:bg-green-400 hover:text-white"
            onClick={ () => {setPaciente(paciente)} }
          >Editar</button>

          <button
            type="button"
            className="shadow-sm mx-5 px-3 py-1 border-2 rounded-md border-red-500 uppercase font-semibold hover:border-white hover:bg-red-500 hover:text-white"
            onClick={handleEliminar}
          >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
