import React, { useState, useEffect } from 'react';
import TestFinalPage from './TestFinalPage';
import TestQuestion from './TestQuestion';

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [failedQuestions, setFailedQuestions] = useState([]);
  const [test, setTest] = useState([]);

  const intialTest = [
    {
      question: 'Según el art. 6.1 de la LOFAGE, son órganos superiores de la Administración Central:',
      answerOptions: [
        {
          id: '1',
          text: 'Los Ministros, los Secretarios del Estado y los Subsecretarios.',
          isCorrect: true
        },
        {
          id: '2',
          text: 'Los Ministros, los Delegados y Subdelegados del Gobierno.',
          isCorrect: false
        },
        {
          id: '3',
          text: 'Los Ministros y los Secretarios.',
          isCorrect: false
        },
        {
          id: '4',
          text: 'Los Ministros, los Secretarios del Estado, los Subsecretarios y los Secretarios Generales.',
          isCorrect: false
        }
        
      ]
    },
    {
      question: 'Según el art. 6.2 de la LOFAGE, son órganos superiores de la Administración Central:',
      answerOptions: [
        {
          id: '1',
          text: 'Los Ministros, los Secretarios del Estado y los Subsecretarios.',
          isCorrect: false
        },
        {
          id: '2',
          text: 'Los Ministros, los Delegados y Subdelegados del Gobierno.',
          isCorrect: true
        },
        {
          id: '3',
          text: 'Los Ministros y los Secretarios.',
          isCorrect: false
        },
        {
          id: '4',
          text: 'Los Ministros, los Secretarios del Estado, los Subsecretarios y los Secretarios Generales.',
          isCorrect: false
        }
        
      ]
    },
    {
      question: 'Según el art. 6.3 de la LOFAGE, son órganos superiores de la Administración Central:',
      answerOptions: [
        {
          id: '1',
          text: 'Los Ministros, los Secretarios del Estado y los Subsecretarios.',
          isCorrect: false
        },
        {
          id: '2',
          text: 'Los Ministros, los Delegados y Subdelegados del Gobierno.',
          isCorrect: false
        },
        {
          id: '3',
          text: 'Los Ministros y los Secretarios.',
          isCorrect: true
        },
        {
          id: '4',
          text: 'Los Ministros, los Secretarios del Estado, los Subsecretarios y los Secretarios Generales.',
          isCorrect: false
        }
        
      ]
    },
    {
      question: 'Según el art. 6.4 de la LOFAGE, son órganos superiores de la Administración Central:',
      answerOptions: [
        {
          id: '1',
          text: 'Los Ministros, los Secretarios del Estado y los Subsecretarios.',
          isCorrect: false
        },
        {
          id: '2',
          text: 'Los Ministros, los Delegados y Subdelegados del Gobierno.',
          isCorrect: false
        },
        {
          id: '3',
          text: 'Los Ministros y los Secretarios.',
          isCorrect: false
        },
        {
          id: '4',
          text: 'Los Ministros, los Secretarios del Estado, los Subsecretarios y los Secretarios Generales.',
          isCorrect: true
        }
        
      ]
    },
    {
      question: 'Según el art. 6.5 de la LOFAGE, son órganos superiores de la Administración Central:',
      answerOptions: [
        {
          id: '1',
          text: 'Los Ministros, los Secretarios del Estado y los Subsecretarios.',
          isCorrect: false
        },
        {
          id: '2',
          text: 'Los Ministros, los Delegados y Subdelegados del Gobierno.',
          isCorrect: false
        },
        {
          id: '3',
          text: 'Los Ministros y los Secretarios.',
          isCorrect: false
        },
        {
          id: '4',
          text: 'Los Ministros, los Secretarios del Estado, los Subsecretarios y los Secretarios Generales.',
          isCorrect: true
        }
        
      ]
    }
  ];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  useEffect(() => {
    const randomTest = shuffle(intialTest);
    setTest(randomTest);
  }, []);

  const handleClick = (isCorrect) => {
		isCorrect ?
			setScore(score + 1)
    : setFailedQuestions(failedQuestions.concat(test[currentQuestion]));

    const nextQuestion = currentQuestion + 1;
    
		nextQuestion < test.length ?
			setCurrentQuestion(nextQuestion)
		: setShowScore(true);
  };
  
  const repeatTest = () => {
    setFailedQuestions([]);
    setScore(0);
    setCurrentQuestion(0);
    const randomTest = shuffle(intialTest);
    setTest(randomTest);
    setShowScore(false);
  };

  return (
    <div className="card card--test test">
      {
        showScore ? (
          <TestFinalPage 
            score={score} 
            testLength={test.length} 
            handleClick={repeatTest} 
            failedQuestions={failedQuestions}/>
        ) : (
          test.length < 1 ? 'Loading...' : <TestQuestion  handleClick={handleClick} test={test} currentQuestion={currentQuestion} />
        )
      }
    </div>
  );
};

export default Test;