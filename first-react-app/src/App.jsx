import './App.css'
//Importing a component in a separate file
import Title from "./Title.jsx"
import Box from "./MsgBox.jsx";
import AmazonTab from "./AmazonTab.jsx";
import Button from "./button";
import Counter from "./counter.jsx";
import LikeButton from "./likeButton";
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

    <Button/>
    <Counter/>
    <br></br>
    <LikeButton/>

    
    <img/>
    </>
  )
}

export default App
