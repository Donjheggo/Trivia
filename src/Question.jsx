import React from 'react'

const Question = (props) => {
  return (
    <div>
        <div>
            <h5>{props.question}</h5>
        </div>

        <div className='d-flex gap-3' onClick={props.selected} >
            {props.answers.map(item => <button key={item.value} className='btn btn-secondary' > {item.value} </button>)}
        </div>
    </div>
  )
}

export default Question