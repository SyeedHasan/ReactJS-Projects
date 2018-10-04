
import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import classes from './ToDo.css';

class ToDo extends Component {

    state = {
        editable: false,
        editedText: this.props.text
    };

    stateHandler = () => {
        console.log("[CLICKED!]");
        let editable = this.state.editable;
        this.setState({
            editable: !editable
        })

    }

    editText = (event) => {
        console.log(event.target.value);
        this.setState({
            editedText: event.target.value
        });
    }

    render()
    { 
        
        // let text = this.state.editedText ? this.state.editedText : this.props.text;
        
        let todo = this.state.editable 
        ? <input onClick={this.stateHandler} onChange={this.editText} value={this.state.editedText} autoFocus /> 
        : <p onClick={this.stateHandler}>{this.state.editedText}</p>

        return (
            <div className={classes.ToDo}>    
                {/* <p>{this.props.text}</p> */}
                {todo}
                <Controls edit={this.props.edit} delete={this.props.delete} />
                <br />
            </div>
        );
    }
            
}
export default ToDo;