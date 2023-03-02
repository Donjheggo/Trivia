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
      const arr = await results.map(item => {
        const answers = [...item.incorrect_answers, item.correct_answer].map(answer => ({
          value: answer,
          isSelected: false,
          isCorrect: answer === item.correct_answer,
        }))
        return {
          id: nanoid(), 
          question: item.question, 
          answers,
        }
      })
      setData(arr)
    }
    getAPI()

  }, [])

  // console.log(data[0]?.answers[1].value)

  const [select, setSelect] = React.useState()

  const selectChoice = (id) => {
    console.log(id)
  }

  const elements = data.map(item => (
    <div key={item.id}>
    <Question 
      question={item.question} 
      answers={item.answers} 
      selected={() => (selectChoice(item.answers))}
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