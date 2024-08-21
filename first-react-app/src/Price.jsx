export default function Price({oldPrice, newPrice}){
    let oldstyles={
        textDecorationLine:"Line-through",
    }
    let newstyles={
        fontWeight:"bold"
    }
    let styles={
        backgroundColor:"gold",
        height:"30px",
        borderBottomLeftRadius:"30px",
        borderBottomRightRadius:"30px",
        width:"100%"
    }
    return(
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span> 
            &nbsp;
            <span style={newstyles}>{newPrice}</span>
        </div>
    )
}