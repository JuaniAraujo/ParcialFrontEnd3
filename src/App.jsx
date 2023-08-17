import Card from "./Components/Card";
import { useState } from 'react'
import './App.css'
import Form from './Components/Form'


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [cliente, setCliente] = useState(false)
  let clientes=[]

  return (
    <>
    {clientes.map((cliente) => <Card key={cliente.nombre} cliente={cliente} setCliente={setCliente}/>)}
    {cliente && <Form/>}
    {}
    </>
    
      //<div className="App">
      //<h2>Votación de mejores Personajes de LOTR</h2>

      //<Form>{/* Agregado del componente "form" */}</Form> 
      //</div>
  );
}

export default App;
