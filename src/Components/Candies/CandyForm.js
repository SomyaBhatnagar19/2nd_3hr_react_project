import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './CandyForm.module.css';

const CandyForm = (props) => {

        const [enteredCandyName, setCandyName] = useState("");
        const [enteredCandyDescription, setCandyDescription] = useState("");
        const [enteredPrice, setPrice] = useState("");


        const addCandyHandler = (event) => {
            event.preventDefault();
             props.onAdd(enteredCandyName, enteredCandyDescription, enteredPrice);
            setCandyName("");
            setCandyDescription("");
            setPrice("");
        }
        
        const setEnteredCandyName = (event) => {setCandyName(event.target.value)}
        const setEnteredCandyDescription = (event) => {setCandyDescription(event.target.value)}
        const setEnteredPrice = (event) => {setPrice(event.target.value)}

    return (
        <Card className={classes.input}>
            <form onSubmit={addCandyHandler}>
                <label htmlFor="candyName">Candy Name: </label>
                <input id="candyName" type="text" value={enteredCandyName} onChange={setEnteredCandyName}/>
                <label htmlFor="candyDescription">Candy Description: </label>
                <input id="candyDescription" type="text" value={enteredCandyDescription} onChange={setEnteredCandyDescription}/>
                <label htmlFor="candyPrice">Candy Price: </label>
                <input id="price" type="number" value={enteredPrice} onChange={setEnteredPrice}/>
                <button type="submit">Add</button>
            </form>
        </Card>
    );
};

export default CandyForm;
