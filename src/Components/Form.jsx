import { useState } from 'react'

const Form = () => {

    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        personaje: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()


        if(cliente.nombre.length > 2 && cliente.apellido.length > 5 && cliente.personaje.length > 0) {
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    }

    const handleChange = (event) => setCliente({...cliente, nombre: event.target.value})
    console.log(cliente)


  return (
    <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" onChange={handleChange}/>
        <label>Apellido: </label>
        <input type="text" onChange={(event) => setCliente({...cliente, apellido: event.target.value})}/>
        <label>Personaje: </label>
        <input type="text" onChange={(event) => setCliente({...cliente, personaje: event.target.value})}/>
        <button>Enviar votación</button>

        {error && 
        <h5 style={{color: 'red'}}>
            <p>Por favor chequea que la información sea correcta. </p>
            <p>Recuerde que el campo "Nombre" debe tener al menos 3 caracteres, y que el campo "Apellido" debe contener al menos 6. Además, el campo "Personaje" no puede estar vacío.</p>
        </h5>
        }

        {show ? <>
            <h4>Gracias {cliente.nombre} {cliente.apellido}!</h4>
            <h4>Has votado por tu personaje preferido de LOTR, y es: {cliente.personaje}</h4>
        </>
        : null
        }
    </form>
  )
}

export default Form