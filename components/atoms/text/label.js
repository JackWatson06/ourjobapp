
/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: Label simply rerpesents some piece of text typically used in a form input in order to label the input that 
 * the user is currently using this control for.
 */

export default function Label( { forId, label } ){
    return <label htmlFor={ forId } >{ label }</label>
}
