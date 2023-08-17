//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react'

const Card = ({usuario, setVoto}) => {
    
  return (
    <div >
        <h3>{usuario.nombre}</h3>
        <h4>{usuario.apellido}</h4>
        <h5>{usuario.personaje}</h5>
        <button onClick={() => setVoto(true)}>Subir Voto</button>
    </div>
  )
}

export default Card