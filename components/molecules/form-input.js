/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: The form input represnts a composition of both the input field, as well as the label field.
 */
import Label from "@atoms/text/label"
import React from "react"

export default function FormInput(props)
{
    const id = props.id != undefined ? `input-${Math.random() * Number.MAX_SAFE_INTEGER}` : undefined;
    const control = React.Children.toArray(props.children)[0];

    return <div>
        <Label forId={id} text={props.text} />
        { React.cloneElement( control, { id: id, formState : props.formState } ) }
    </div>   
}
