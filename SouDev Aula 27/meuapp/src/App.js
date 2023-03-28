import Banner from "./components/Banner";
import Header from "./components/Header";

// function Botao() {
//   return (
//     <button>Clique aqui</button>
//   );
// }

// function Eu() {
//   return (
//     <>
//       <div>EU</div>
//       <div>VC</div>
//     </>
//   );
// }

export default function App() {
  return (
    <>
      <Header />
      <Banner />
    </>
    // <h1>
    //   Ola mundo
    //   <Botao/>
    //   <Botao/>
    //   <Eu/>
    // </h1>
  )
}

//quando iniciado com letra maiúscula isso significa que é um componente, não uma tag do html
//todo componente precisa -obrigatoriamente- retornar alguma coisa


