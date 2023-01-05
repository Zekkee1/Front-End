import {BsLinkedin} from  'react-icons/bs'
import api from './services/api'
import{useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css'
export {FiSearch} from 'react-icons/fi'




function App() {

  const [input, setInput] = useState('')
  const [cep, setcep] = useState({});

  

  
  async function search(){
    
    
    
    if (input === ''){
      alert("preencha o campo cep")
      return;
    }
try{
    const response = await api.get(`${input}/json`)
    setcep(response.data)
    setInput("")
}catch{
  alert("Cep Invalido")
  setInput("")
}       


    }
  return (
    <div className="container">
      <h1 className="title">Buscador de cep</h1>

      <div className="container-input">
      <input placeholder="Digite o cep:" value={input} onChange={(e)=> setInput(e.target.value)}>
        
      </input>
      

      <button className='button-search' id="submit" onClick={search}>
        <FiSearch size = {30} color="#000"></FiSearch>
      </button>
      
      </div>
      {Object.keys(cep).length > 0 && (
      <main className='main'>
      <h2>Cep: {cep.cep}</h2>
        <span>Endereço: {cep.logradouro}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade: {cep.localidade} </span>
        <span>Estado: {cep.uf} </span>

      

      </main>
      )}
      

      <a  id="lin"  target="_blank" rel="noopener noreferr"
      href="https://www.linkedin.com/in/lucas-martins-100596203/"><BsLinkedin size = {80} color='#165682'> </BsLinkedin></a>
      
      <p>Creditos Lucas Martins</p>

    </div>

    
  );
}

export default App;
