import './App.css'
//Importing a component in a separate file
import Title from "./Title.jsx"
import Box from "./MsgBox.jsx";
import AmazonTab from "./AmazonTab.jsx";
//render the component
function App() {
  return (
    //React fragments <></> allows you to group multiple components into single element.
    <>
    <Title/> 
    <Box userName="Eriana" textColor="pink"/>
    <Box userName="Sofia" textColor="blue"/>
    <h2>Blockbuster Deals</h2>
    <AmazonTab/>

    
    <img/>
    </>
  )
}

export default App
