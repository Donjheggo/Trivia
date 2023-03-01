import React from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

const App = () => {

  const [data, setData] = React.useState([])

  React.useEffect( () => {
    const getAPI = async () => {
      const data = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
      const response = await data.json()
      const results = await response.results
      const arr = await results.map(item => (
          {
            id: nanoid(), 
            question: item.question, 
            answers: [
              {
                value: item.correct_answer, 
                isSelected: false,
                isCorrect: true
              },
              {
                value: item.incorrect_answers,
                isSelected: false,
                isCorrect: false
              }
            ]
          }
        )
      )
    setData([...arr])
    }
    getAPI()

  }, [])

  // console.log(data[0]?.answers[0].value)

  const elements = data.map(item => (
    <div>
    <Question 
      key={item.id}
      question={item.question} 
      // answers={item.answers.value} 
    />
    <hr/>
    </div>
  )
  )


  return (
    <div>
      <div className='questions container mt-5'>
        {elements}
      </div>
      <div className='mt-5 text-center'>
        <button className='btn btn-primary'>Check Answers</button>
      </div>
    </div>
  )
}

export default App