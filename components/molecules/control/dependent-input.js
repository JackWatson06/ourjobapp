/**
 * Original Author: Jack Watson
 * Created At: 10/1/2021
 * Purpose: The dependent input simply renders one of the passed in inputs when the depends on value equals the necessary
 * value for the first component. When it does the other input will display and it's value will start being tracked in the form
 * state tracker.
 */
import React, { useState } from "react"

export default function DependentInput( {independentInput, dependentInputs, dependsOnValues, notify} )
{
    // Validation.
    if(dependentInputs.length != dependsOnValues.length)
    {
        throw new Error("Dependent inputs passed into the dependent input field must have the same count as the dependsOnValue parameter.")
    }

    // Get an array of how many dependent input we haves. Start off with not showing any.
    const [active, setActive]               = useState(dependentInputs.map(() => false))
    const [defaultStates, setDefaultStates] = useState(dependentInputs.map(() => []))

    // whenever the independentInput gets notified of a change we will want to check to see if it matches any of the dependsOnValues
    const independentOnChange = (name, value, inputValid) => {
        // Make sure the parent form still knows about the state of the child.
        notify(name, value, inputValid)

        for(let i = 0; i < dependsOnValues.length; i++)
        {
            const dependsValue = dependsOnValues[i]  
            const checkInArray = Array.isArray(dependsValue) && dependsValue.includes(value)
            const checkValueMatch = value === dependsValue
            const dependentMatch = checkInArray || checkValueMatch

            if(!active[i] && dependentMatch)
            {
                // Enable / Disable all other fields
                active[i] = true
            }
            else if(active[i] && !dependentMatch)
            {
                active[i] = false

                if(defaultStates[i].length != 0)
                {
                    notify(defaultStates[i][0], "", true)
                }
            }
        }        

        setActive([...active])
    }

    // Independent input should render at all times.
    return <>
        {/* Render the input that does not depend on anything */}
        {React.cloneElement(independentInput, {notify: independentOnChange})}

        {dependentInputs.map((inputState, i) => {

            // Function which updates the state of the variable.
            const dependentOnChange = (name, value, inputValid) => {
                notify(name, value, inputValid)

                // Only set the default state on the first notification if we don't have it already.
                if(! defaultStates.some((state) => state[0] === name))
                {
                    defaultStates[i] = [name, value, inputValid]
                    setDefaultStates([...defaultStates])
                }
            }
            
            if(active[i]){
                return <React.Fragment key={i}>
                    {React.cloneElement(inputState, {notify: dependentOnChange})}
                </React.Fragment>
            }
        })}
    </>
}