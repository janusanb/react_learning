import React from "react"
import ReactDOM from "react-dom"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const heldChecker = dice.every(eachDie => eachDie.isHeld === true)
    const valueChecker = dice.every(eachDie => eachDie.value === dice[0].value)
    if (heldChecker && valueChecker) {
      setTenzies(true)
      console.log("You won!")
    }
  }, [dice])


  function generateNewDie() {
    return {
      "value": Math.ceil(Math.random() * 6),
      "isHeld": false,
      "id": nanoid()
    }
  }

  function allNewDice() {
    const dieArray = []
    for (let i = 0; i<10; i++) {
      dieArray.push(generateNewDie())
    }
    return dieArray
  }

  function restart() {
    setDice(allNewDice())
    setTenzies(false)
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()

    }))
  }

  function holdDice(id) {
      setDice(prevDice => prevDice.map(die => {
        return die.id === id ? 
          {...die, isHeld: !die.isHeld} : 
          die

        
      }))
  }

  const diceElements = dice.map(eachDie => {
    return (
      // By making this an anon function then adding in the id,
      // each id is automatically connected.
      // This could have also been done by passing the id 
      // and then accepting it on the other side
      <Die 
        key={eachDie.id}
        value={eachDie.value}
        isHeld={eachDie.isHeld}
        holdDice={() => holdDice(eachDie.id)} />
    )
  })

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
      Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      {!tenzies && <button className="roll-dice" onClick={rollDice}>Roll</button>}
      {tenzies && <button className="roll-dice" onClick={restart}>New Game</button>}
    </main>
  )
  
}

