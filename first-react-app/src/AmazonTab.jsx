import AmazonProduct from './AmazonProduct.jsx';
//Activity : 
//Make a product tab with - 
//Title
//Description
//Price : old->new

function AmazonTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return(
        <div style={styles}>
            
        <AmazonProduct title="Dell Laptop" index={0}/>
        <AmazonProduct title="iPad gen1" index={1}/>
        <AmazonProduct title="AirPod Max" index={2}/>
        <AmazonProduct title="iPhone 15" index={3}/>
        
        </div>
    )
}
export default AmazonTab;