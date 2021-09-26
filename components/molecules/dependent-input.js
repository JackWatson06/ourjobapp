import fs from "../lib/form/FormStateTracker"
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