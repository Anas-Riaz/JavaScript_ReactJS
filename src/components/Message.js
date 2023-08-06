import {Component} from 'react';


const displayMessage = ()=> {
    return 'I need Help!'
}

class Message extends Component{
    render(){
        return <h2>Message: {this.props.MessageCount}</h2>
    }
}

export default Message;