//EVENTS IN REACT
function printHello(eventObject){
    console.log("Hello");
    console.log(eventObject);
}
function printBye(){
    console.log("Bye");
}
export default function Button(){
    return (
        <div>
            <button onClick={printHello}>
                Click Me
            </button>
            <p onMouseOver = {printBye}>This is a paragraph and when you hover on it, Bye is printed on your console!</p>
            <button onDoubleClick={printHello}>Double click me</button>
        </div>
    )
}