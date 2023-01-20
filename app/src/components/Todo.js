import React, { useState } from "react";

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {//Se guardan esos objetos como parámetros.
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);//El estado actual va a ser el objeto title
    const [tempValue, setTempValue] = useState(title);//El estado actual va a ser el objeto title
    const [completedState, setCompleted] = useState(completed);//El estado actual va a ser el objeto completado

    const handleDivDoubleClick = () => {//Funcion doble click donde su estado futuro es cuando de el doble click
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;//constante key guarda el codigo de la tecla cuando es pulsada

        if(key === 13) {//Si key es igual a 13 que es el codigo de la tecla enter entonces:
            editTodoItemProp({ title: tempValue });//El objeto guarda la propiedad title con estado normal, tomando el valor del input 
            setValue(tempValue);//Su estado futuro cambia cuando haya tomado el valor del input sea vacio o con strings
            setIsEditing(false);//Cuando se da enter deja de funcionar la funcion doble click
        } else if(key === 27) {//Si el codigo del teclado es igual a 27 que es el escape
            setTempValue(value);//Su estado futuro guarda el valor del contenido del h2
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {//Funcion cuando el valor input cambia
        setTempValue(e.target.value);//modifica el tarjet
    };

    const handleButtonClick = () => {//Cuando se de click
        setCompleted((oldCompleted) => {//Estado futuro h2 se muestre un string vacio. Guarda un parametro "oldCompleted" 
            const newState = !oldCompleted;//donde su nuevo estado es "no completado"
            editTodoItemProp({ completed: newState });//Se llama al parametro del "editTodoItemProp" que guarda una propiedad que es la constante newState
            return newState;
        });
    };

    return (
        <div className="row">
            {
            isEditing ?
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input
                            onChange={handleInputOnChange}//Funcion cuando el valor input cambia
                            onKeyDown={handleInputKeyDown}//Se ejecuta la funcion cuando se presione la tecla
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div>
                </div> :
                <>
                    <div className="column five wide" onDoubleClick={handleDivDoubleClick}> {/* Funcion del doble click */}
                        <h2 className={"ui header" + (completedState ? " green" : "")}>{value}</h2>{/*el estado está completo se mostrará verde, si no un string vacio*/}
                    </div>

                    <div className="column one wide">
                        <button
                            className={"ui button circular icon" + (completedState ? " blue" : " green")}
                            onClick={handleButtonClick}//Cuando se de click se mostrará en un string vacío
                        >
                            <i className="white check icon"></i>
                        </button>
                    </div>

                    <div className="column one wide">
                        <button
                            onClick={removeTodoItemProp}//funcion que falta
                            className="ui button circular icon red"
                        >
                            <i className="white remove icon"></i>
                        </button>
                    </div>
                </>
            }
        </div>
    );
};

export default Todo;