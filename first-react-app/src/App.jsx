import './App.css'
//Importing a component in a separate file

import Button from "./button";
//render the component
function App() {
  return (
    //React fragments <></> allows you to group multiple components into single element.
    <>
    <Button/>

    
    <img/>
    </>
  )
}

export default App
