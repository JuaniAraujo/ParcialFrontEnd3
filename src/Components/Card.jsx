//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react'

const Card = ({cliente, setCliente}) => {
    
  return (
    <div >
        <h3>{cliente.nombre}</h3>
        <h4>{cliente.apellido}</h4>
        <h5>{cliente.personaje}</h5>
        <button onClick={() => setCliente(true)}>Subir Voto</button>
    </div>
  )
}

export default Card