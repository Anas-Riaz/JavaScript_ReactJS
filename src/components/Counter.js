
import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state ={
            Count : 0 ,
        };
    }


    increment() { 
        this.setState({
            Count : this.state.Count + 1,
        });
    }

    
    render(){
        return (
            <div>
                <h3>Message:{this.state.Count}</h3>
                <button onClick={()=> this.increment()}>Click</button>
            </div>
        );
    }
}

export default Counter;