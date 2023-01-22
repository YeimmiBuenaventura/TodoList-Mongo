//impor UseState in react for use in funcionality later
import React, { useState } from "react";
//import stylesheet for stylisated the input and button later
import "../styles/form.css";

//create controller in the const Form and we pass addTodo
const Form = ({ addTodo }) => {
    //in to cont Form importated proops inputValue and setInputValue 
    //Use useState to asignated the state clear
    const [inputValue, setInputValue] = useState("");
    //capture action of insert valor in inpit
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    //capture action of sumbmit infortmaiton of input
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return;
        //add value in new list down
        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    
    return (
        //return input and buttom for data to be added to the todo list
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column_five_wide">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Ingresa tu tarea"
                            id="input_add" />
                    </div>
                    
                    <div className="column one wide">
                        <button type="submit" className="ui_button_circular_icon_green">+</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

//export componet form
export default Form;