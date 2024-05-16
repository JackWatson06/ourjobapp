import style from "./Border.module.css"

export default function Border({focused, error, children})
{
    /*
    * Determine the border that we would like to apply to the input.
    */
    const border = () => {
        if( !error  && focused)
        {
            return `${style.InputFocused}`
        } 
        else if( error )
        {
            return `${style.InputError}`
        }
    }

    return <div className={ `${style.BorderWrapper} ${border()}` }>
        {children}
    </div >
}

