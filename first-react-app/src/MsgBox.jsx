export default function Box({userName, textColor}){
    let styles ={color : textColor};
    return(
        <h1 style ={styles}>hello, {userName}</h1>
    );
}