/////=======  props in type script   =========///////////
import React from 'react'

interface PropsType {
    name : string,
    salary: number,
    isEligible: boolean
}

function Home(props:PropsType) {
  return (
    <div>
      <p>i am  <b> {props.name} </b> </p>
      
      {props.isEligible ? <p>you are eligible to vote <b>{props.salary} </b></p> : <p>you can not vote</p>}
    
    <p>my pament<b>{props.salary}</b></p>
      
    </div>
  )
}

export default Home
