
import React, { Component } from 'react';
import {Button} from '../../components/Button/Button';
import { InputButton } from '../../components/Input/InputButton';
import { ClearButton } from '../../components/ClearButton/ClearButton';
import * as math from 'mathjs';
import  './Calculator.css';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.inputClearHandler = this.inputClearHandler.bind(this);
    }

    inputClearHandler() {
        this.setState({
            input: ''
        });
    }

    addToInput = (val) => {
        if(val === "X"){
            val = '*';
        }
        if(isNaN(val) && isNaN(this.state.input[this.state.input.length-1])){
            return;
        }
        this.setState( (state, props) => ({
            input: state.input + val
        }));
    }

    handleKeyInput = (event) => {
        console.log(event.charCode);
    }

    handleEqual = () => {
        if(isNaN(this.state.input[this.state.input.length-1])){
            this.setState( (state, props) => ({
                input: "Math Error"
            }));
            setTimeout(this.inputClearHandler, 1000);
        }
        else {
            this.setState( (state, props) => ({
                input: math.eval(state.input)
            }));
        }
    }

    render(){
        return (
            <div className="Calculator" onKeyDown={() => this.handleKeyInput()}>
                <div className="calc-wrapper">
                    <InputButton input={this.state.input}></InputButton>
                    <div className="row">
                        <Button  handleClick={this.addToInput}>7</Button>                    
                        <Button handleClick={this.addToInput}>8</Button>                    
                        <Button handleClick={this.addToInput}>9</Button>                    
                        <Button handleClick={this.addToInput}>/</Button>  
                    </div>
                    <div className="row">                  
                        <Button handleClick={this.addToInput}>4</Button>                    
                        <Button handleClick={this.addToInput}>5</Button>                    
                        <Button handleClick={this.addToInput}>6</Button>                    
                        <Button handleClick={this.addToInput}>X</Button>
                    </div>    
                    <div className="row">                                    
                        <Button handleClick={this.addToInput}>1</Button>                    
                        <Button handleClick={this.addToInput}>2</Button>                    
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>  
                    <div className="row">                                    
                        <Button handleClick={this.addToInput}>.</Button>                    
                        <Button handleClick={this.addToInput}>0</Button>                    
                        <Button handleClick={this.handleEqual}>=</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>  
                    <div className="row">
                        <ClearButton handleClear={this.inputClearHandler}>Clear</ClearButton>
                    </div>                  
                </div>         
            </div>
        );
    }

}

export default Calculator;