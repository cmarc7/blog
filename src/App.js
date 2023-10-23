import './App.css';
import { wcPets, answers } from './data/code';
import Top from './componentes/Top';
import Question from './componentes/Question';
import { AiOutlineTrophy } from "react-icons/ai";

function App() {
  const wcPetList = wcPets.map(result=> {
    return <Top num={result.number}
                name={result.name}
                img={result.image} 
                des={result.description} />
  });

  const QuestionsandAnswers = answers.map( result=> {
    return <Question question={result.q}  answer={result.a} />
  })

  return (
    <div className="App">
     <header>
       <p>Marcblogs <AiOutlineTrophy /></p>
     </header>
     <section>
        <article>
          <h1>Top 5 de las mejores mascotas de la historia de los mundiales</h1>
          <img src='https://st1.uvnimg.com/e7/5d/b63310e146b7b383045bcaedba48/mascotas-de-los-mundiales.jpg' alt='Mundiales mascotas' />
          <p className='space'>Bienvenidos a este blog donde daremos un top sobre cuales fueron las mejores mascotas en los mundiales, hay que aclarar que sólo es una opinión y no 
            tratamos de determinar cuales son las mejores mascotas sí o sí. En el fútbol existieron a partir del mundial 1966, luego comenzaría a ser costumbre 
            que en todos los mundiales haya una mascota, la mayoría son animales y aveces son humanos, hubieron mascotas que agradaron al público y otras 
            que no tanto. En este top te haremos conocer la historia de cada una de estas mascotas y nuestros motivos de porque están en el top, sin 
            nada más que decir... ¡Empecemos!</p>
            {wcPetList}
            <h2>Curiosidades</h2>
              {QuestionsandAnswers}
        </article>
     </section>
    </div>
  );
}

export default App;
