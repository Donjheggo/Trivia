import React from 'react'

const Question = (props) => {
  return (
    <div>
        <div>
            <h5>{props.question}</h5>
        </div>

        {/* <div className='d-flex gap-3'>
            {props.answers.map(item => <button key={item} className='btn btn-secondary'> {item} </button>)}
        </div> */}
    </div>
  )
}

export default Question