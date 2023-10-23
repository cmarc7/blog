import '../style-sheets/Question.css';

function Question ({ question, answer }) {
  return (
    <div className='question'>
      <h3>{question}</h3>
      <div className='answer'>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Question;