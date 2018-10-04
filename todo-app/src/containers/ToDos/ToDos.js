
import React , { Component } from 'react';
import InpElement from '../../components/InputElement/InputElement';
import ToDo from '../../components/ToDo/ToDo';
import classes from './ToDos.css';

class ToDos extends Component {

    state = {
        toDos: [
            { text: 'Hi!'}
        ]
    }

    onBlurOutHandler = (toDoText) => {
        let toDos = [...this.state.toDos];
        toDos.push({
            text: toDoText
        })
        this.setState({ toDos: toDos });
    }

    onButtonPressHandler = (toDoText) => {
        let toDos = [...this.state.toDos];
        toDos.push({
            text: toDoText
        })
        this.setState({ toDos: toDos }); 
    }

    editToDo = (todoText) => {
        // console.log("[EDIT] " + todoText);
    }

    deleteToDo = (elIndex) => {
        let toDos = [...this.state.toDos];
        toDos.splice(elIndex, 1);
        this.setState({ toDos: toDos });
    }


    render() {

        let toDos = this.state.toDos.map((todo, ind) => {
            let todoText = todo.text;
            return (
                <ToDo 
                    key={ind}
                    text={todoText}
                    edit={() => this.editToDo(todoText)}
                    delete={() => this.deleteToDo(ind)}
                />
            );
        })

        return (
            <div className={classes.ToDos}>
                <InpElement 
                    change={this.onBlurOutHandler}
                    addToDo={this.onButtonPressHandler}
                />
                <div>
                    {toDos}
                </div>
            </div>
        );
    }

}

export default ToDos;