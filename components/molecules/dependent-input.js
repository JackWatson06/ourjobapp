import fs from "../lib/FormStateTracker"
import { useEffect } from "react"

export default function DependentInput(props)
{
    let component = null

    // Don't include the name input if we don't have dependent value just yet.
    for(const equals of Object.keys(props.renders) )
    {
        let currentValue = fs.getValue(props.dependsOn, props.formState.form)

        if( equals === currentValue )
        {
            component = props.renders[equals]
        }

        useEffect(() => 
        {
            if( equals != currentValue )
            {
                fs.removeInput( props.renders[equals].props.name, props.formState)
            }
        }, [])
    }

    return component
}