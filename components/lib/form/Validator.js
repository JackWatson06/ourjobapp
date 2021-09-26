// import fs from "./FormStateTracker"

const validate = (value, displayName, rules) => {

    let message = "";

    // Try each rule that we have.
    for (const rule of rules)
    {
        if( !rule.validate( value) )
        {
            message = rule.message( displayName );
            break;
        }
    } 

    return message;

}

export default validate