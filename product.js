import { useState } from "react";
function Product(props) {
   let [done,isDone] = useState('incomplete')
   function check() {
    isDone('completed')
   }
   
    return (
        <div className="product">
            <img src={props.url}></img>
            <h1>{props.day}</h1>
            <h2>{props.topic}</h2>
            <h3>{done}</h3>
            <button onClick={check}>done</button>
        </div>
    );
}

export default Product;
