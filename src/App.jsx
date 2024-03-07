import { useState } from "react"
import Header from "./Components/Header"
import Input from "./Components/Input"
import Result from "./Components/Results"

function App() {

  const[userInput, setUserInput] = useState(
    {
      initialInvestment : 10000,
      annualInvestment : 500,
      expectedReturn : 5,
      duration : 12,
    }
  )

  const handleOnChange = (inputType,newValue) => {
    setUserInput( (prevValue) => {
      return {
        ...prevValue,
        [inputType] : +newValue

      }
    } ) 
  }

  const isValid = userInput.duration > 0;


  return (
    <>
    <Header/>
    <Input userInput={userInput} handleOnChange={handleOnChange} />
    {!isValid && <p className="center">Please enter a Valid duration</p>}
    { isValid && <Result userInput = {userInput}/>}
    </>
    )
}

export default App
