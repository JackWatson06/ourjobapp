/**
 * Original Author: Jack Watson
 * Created At: 10/1/2021
 * Purpose: The dependent input simply renders one of the passed in inputs when the depends on value equals the necessary
 * value for the first component. When it does the other input will display and it's value will start being tracked in the form
 * state tracker.
 */

import fs from "@lib/form/FormStateTracker"
import { useEffect } from "react"

export default function DependentInput(props)
{
    let component = null
    let shouldRender = fs.getValue(props.dependsOn, props.formState.form) === props.dependsOnValue

    if( shouldRender )
    {
        component = props.renders
    }

    // We only want to remove when we are removing it from the virutal dom tree
    useEffect(() => 
    {
        if(!shouldRender)
        {
            fs.removeInput( props.renders.props.name, props.formState)
        }
    }, [shouldRender])

    return component
}