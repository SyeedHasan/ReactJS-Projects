
import React, { Component } from 'react';
import classes from './InpElement.css';
import Aux from '../../hoc/Auxiliary';

class InpElement extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleKeyPress = (event) => {
        if(event.charCode == 13) 
        {
            this.setState({
                value: event.target.value
            });
        
            this.props.addToDo(this.state.value);
            this.resetState();

        }
    }

    resetState = () => {
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <Aux>
                <div className={classes.InpElement}>
                    <input 
                        onChange={this.handleChange}
                        onKeyPress={ (event) => {
                            this.handleKeyPress(event);
                        }}
                        // onBlur={(event) => this.props.change(event.target.value)}
                        placeholder="So, what do you want to do?"
                        value={this.state.value}>
                    </input>
                </div>

                <div style={{display: 'block'}}>
                    <div className={classes.AddToDo}>
                        <button
                            onClick={() =>{
                                this.props.addToDo(this.state.value); 
                                this.resetState();
                                return;
                            }}
                            className={classes.Button}>
                            Add to-do
                        </button>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default InpElement;