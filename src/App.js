import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// CALCULADORA IMC 
// INFNET BOOTCAMP TURMA NOITE
function App() {

//CRIO MEUS ESTADOS PARA USAR FUTURAMENTE
const [peso, setPeso] = useState((prev) => parseFloat(prev).toFixed(2));
const [altura, setAltura] = useState((prev) => parseFloat(prev).toFixed(2));
const [resultado, setResultado] = useState("");


//CRIO UMA LISTA REFERENTE AO EXERCÍCIO MOSTRADO EM AULA SOBRE O CÁLCULO DE IMC
const tabelaResultado = [
  {
    "resultado": "Abaixo do peso",
    "intervalo":[0.0,18.5]
  },
  {
    "resultado": "Peso normal",
    "intervalo":[18.5, 24.9]
  },
  {
    "resultado": "Sobrepeso",
    "intervalo":[25.0, 29.9]
  },
  {
    "resultado": "Obesidade Grau I",
    "intervalo":[30.0, 34.9]
  },
  {
    "resultado": "Obesidade Grau II",
    "intervalo":[35.0, 39.9]
  },
  {
    "resultado": "Obesidade Grau III ou Mórbida",
    "intervalo":[39.9, 999.0]
  }
]
//CRIO UMA FUNÇÃO PARA BUSCAR NA MINHA LISTA EM QUAL CLASSIFICAÇÃO MEU IMC ESTÁ.

const ResultadoIMC = (event) => {
  event.preventDefault();
  let imcCalculado = peso/(altura^2)
  let data = tabelaResultado.find((r) => r.intervalo[0] < imcCalculado  && imcCalculado < r.intervalo[1])
  //MOSTRO O RESULTADO NA TELA.
  setResultado(`
  IMC: ${parseFloat(imcCalculado).toFixed(2)}
  Resultado: ${data.resultado}
  `)
}

//CRIO UM FORMULÁRIO HTML SIMPLES
return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={ResultadoIMC}>
        Peso:<input type="number" name="peso" step="0.01" onChange={e=> setPeso(e.target.value)}/>
        Altura:<input type="number" name="altura" step="0.01" 
        onChange={e=> setAltura(e.target.value)}/>
        <input type="submit" />
        </form>
        {resultado}
      </header>
    </div>
  );
}

export default App;
