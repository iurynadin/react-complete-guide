import React, { Component } from 'react';
import Validation from "../Validation/Validation";
import Char from '../Char/Char';

class Assingment4 extends Component {

    state = {
        userInput: ''
    }

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
    }

    deleteCharHandler = (index) => {
        console.log(index);
        /* get an array of characters */
        const text = this.state.userInput.split(''); 
        // remove item from array
        text.splice(index,1);
        this.setState({userInput: text.join('')});
    }

    render() {
        
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char 
                character={ch} 
                key={index} 
                clicked={() => this.deleteCharHandler(index)}
            />
        });

        return (
            <div className="App">
                <h2>Assignment</h2>
                <input 
                    type="text" 
                    onChange={this.inputChangedHandler}  
                    value={this.state.userInput} 
                />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length} />
                {charList}
            </div>
        )
    }
}

export default Assingment4;