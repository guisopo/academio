import React from 'react';

const TestQuestion = ({ handleClick, test, currentQuestion }) => {
  
  const getLetter = (i) => {
    let letter;
    switch (i) {
      case 0:
        letter = 'a';
        break;
      case 1:
        letter = 'b';
        break;
      case 2:
        letter = 'c';
        break;
      case 3:
        letter = 'd';
        break;
    
      default:
        letter = 'error'
        break;
    }
    return letter;
  }

  return (
    <>
      <div className="question-wrapper">
        <small className="test__counter small">Pregunta {currentQuestion + 1} de {test.length}</small>
        <h4 className="test__question">{currentQuestion + 1}. {test[currentQuestion].question}</h4>
      </div>
      <div className="test__answers">
        <ul className="answers-list">
          {
            test[currentQuestion].answerOptions.map( (answer, i) => <li key={answer.id} onClick={() => handleClick(answer.isCorrect)}><span className="list__marker">{getLetter(i)}</span><p>{answer.text}</p></li>)
          }
        </ul>
      </div>
    </>
  );
};

export default TestQuestion;