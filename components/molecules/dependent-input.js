/**
 * Original Author: Jack Watson
 * Created At: 10/1/2021
 * Purpose: The dependent input simply renders one of the passed in inputs when the depends on value equals the necessary
 * value for the first component. When it does the other input will display and it's value will start being tracked in the form
 * state tracker.
 */

import React, { useEffect } from "react"

export default function DependentInput( {name, dependsOn, dependsOnValue, formState, renders} )
{
    let component = null
    let shouldRender = false;

    // If we have an array test the entire array.
    if(Array.isArray(dependsOnValue))
    {
        shouldRender = dependsOnValue.includes( fs.getValue(dependsOn, formState.form))
    }
    else
    {
        shouldRender = fs.getValue(dependsOn, formState.form) === dependsOnValue
    }

    // ShouldRender
    if( shouldRender )
    {
        component = React.cloneElement( renders, {formState: formState} )
    }

    // We only want to remove when we are removing it from the virutal dom tree
    useEffect(() => 
    {
        if(!shouldRender)
        {
            fs.removeInput( name, formState)
        }
    }, [shouldRender, formState, name])

    return component
}