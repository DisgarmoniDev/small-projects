import { useState } from 'react';
import './index.scss';

const questions = [
  {
    id:1,
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    id:2,
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    id:3,
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    id:4,
    title: 'Как объявить переменные в ES-6',
    variants: [
      'var, const',
      'var, let, const',
      'let, const',
    ],
    correct: 2,
  },
  {
    id:5,
    title: 'Как изменить цвет в svg-файле через css?',
    variants: [
      'background-color',
      'fill',
      'color',
    ],
    correct: 1,
  },
  {
    id:6,
    title: 'Метод перебора массива js?',
    variants: [
      'map',
      'forEach',
      'filter',
    ],
    correct: 1,
  },
  {
    id:7,
    title: 'Создание объекта в js?',
    variants: [
      'let user = ["Иван", "Василий", "Пётр"]',
      'let user = {name:Иван, name:Василий}',
      'let user = [{name:Иван},{name:Пётр}]',
    ],
    correct: 1,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="img/win.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const interest = Math.round((step/questions.length)*100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${interest}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((qq, variantNumber)=>
          <li onClick={() => onClickVariant(variantNumber)} key={qq}>{qq}</li>
        )}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const question = questions[step]

  const onClickVariant = ( variantNumber ) => {
    console.log(step, variantNumber )
    setStep(step + 1)
    if (variantNumber === question.correct) {
      setCorrect(correct+1)
    }
  }

  const [correct, setCorrect] =useState(0)

  return (
    <div className="App">
      {
        step !== questions.length? 
        <Game 
        question={question} 
        onClickVariant={onClickVariant}
        step={step}
        />
        : <Result 
            correct={correct}
        />
      }
    </div>
  );
}

export default App;
