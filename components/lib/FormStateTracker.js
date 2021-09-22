/**
 * Original Author: Jack Watson
 * Created Date: 9/20/21
 * Purpose: The purpose of this class is to manage the form state object that we are storing in the multi-page-form.
 * Individual input components will intereact with the state through this class. We are going to want to think of
 * a way to make this generic.
 * 
 */

import { useEffect } from "react"

/**
 * Get the value from the input state data. Since the state is stored in a array we have to search the array...
 * maybe we can index the array with the input?
 * @param {object} props React properties object
 * @param {string} property Value we are targeting from within the input state data
 */
export const getValue = (props, property) => {

    // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
    let foundObject = props.form.find(inputState => inputState.name === property)
    return foundObject != undefined && foundObject.hasOwnProperty("value") ? 
        foundObject.value : 
        "";
}

/**
 * Get the value for the current input. If we have none then return an empty string.
 * @param {object} props React properties object
 * @param {string} property Name of the input we are storing the state of
 */
export const getState = (props, property) => {

    // When we first load up the input element we will need to start to keep track of it's state in the
    // forms overally state property.
    useEffect( () => {

        let newInputState = {
            "name"  : property,
        }

        // So I think we have to use push here since setForm is an async function and react will batch form requests
        // together so if we try to use the spread operator we will be spreading it with the old value.
        props.form.push(newInputState)
        props.setForm( props.form )

    }, []);

    // Serach for the current elements state by using the name field. Then pull that value out of the state.
    return getValue(props, property);
}

/**
 * Handle a state changge in the input state array stored on the multipage form.
 * @param {event} e Event for updating the state change
 * @param {object} props React properties object
 * @param {string} property Name of the input we are storing state for
 */
export const handleStateChange = (e, props, property) => {

    // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
    let stateIndex = props.form.findIndex(inputState => inputState.name === property)

    // Array returns a referance to the object. So we have to deep copy
    let deepCopy = props.form.map(inputState => ({...inputState}))
    let inputState = deepCopy.splice(stateIndex, 1)[0];

    inputState.value = e.target.value

    props.setForm( [...deepCopy, inputState] )
}
