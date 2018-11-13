import React, { Component } from 'react';
import * as Constants from  '../../constants/constants'

class WordInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: ""
        }
    }

    handleSubmit = () =>{
        alert('A word was submitted: ' + this.state.inputText);
    };

    handleChange = (event) => {

        this.setState({inputText : this.state.inputText + this.validate(event.target.value)})
    };

    validate(text){
        let char = text[text.length-1];
        if(Constants.ALPHABET.indexOf(char.toLowerCase()) !== -1){
            return char
        }
        return ""
    }


    render(){
        return(
            <div className="WordInput">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Загадайте слово
                        <input type="text" value={this.state.inputText} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Загадати" />
                </form>
                <span>
                    можна вводити лише літери кирилиці (А-Я) та пробіл
                </span>
            </div>
        )

    }
}

export default WordInput