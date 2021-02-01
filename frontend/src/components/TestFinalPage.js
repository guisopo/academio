import React from 'react';

const TestFinalPage = ({score, testLength, handleClick, failedQuestions}) => {
  // Calcular nota sobre 100
  // const calculateScorePercentage = (score, testLength) => score * 100 / testLength;
  // const scorePercentage = calculateScorePercentage(score, testLength);
  // Crear tabla de preguntas falladas con su respuesta correcta
  // const errors = failedQuestions.map(
  //   failedQuestion => {
  //     const rightAnswer = failedQuestion.answerOptions.filter(answer => answer.isCorrect === true)
  //     return {
  //       question: failedQuestion.question,
  //       answer: rightAnswer[0].text
  //     };
  //   }
  // );

  return (
    <div className="test__final">
      <div>Has acertado {score} de {testLength} preguntas.</div>
      {/* <div>Erraste las siguientes preguntas: 
        {
          errors.map(error => {

            return <><p>{error.question}</p><p>{error.answer}</p></>

          })
        }
      </div> */}
      <button onClick={() => handleClick()} className="button button--primary">Repetir test</button>
    </div>
  );
};

export default TestFinalPage;