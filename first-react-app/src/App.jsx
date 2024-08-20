import './App.css'
//Importing a component in a separate file
import Title from "./Title.jsx"
import ProductTab from './ProductTab.jsx'

//render the component
function App() {
  return (
    //React fragments <></> allows you to group multiple components into single element.
    <>
    <Title/> 
    <ProductTab/>
    <img/>
    </>
  )
}

export default App
