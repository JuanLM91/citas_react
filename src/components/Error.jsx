

const Error = ({children}) => {
  return (
    <div>
        <p 
            className='text-center uppercase font-bold text-lg bg-red-600 text-white mb-4 py-1 rounded-md'
        >
            {children}
        </p>
    </div>
  )
}

export default Error
