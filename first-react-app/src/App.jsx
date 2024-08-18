import './App.css'
//Importing a component in a separate file
import Title from "./Title.jsx"

//render the component
function App() {
  return (
    //React fragments <></> allows you to group multiple components into single element.
    <>
    <Title/> 
    <Title/> 
    <img/>
    </>
  )
}

export default App
