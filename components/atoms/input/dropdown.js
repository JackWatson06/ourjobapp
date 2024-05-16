/**
 * This class renders a dropdown for a select multiple input component. We keep it an individual atom here so that
 * we can reuse it between a regular select box as well as a select-multiple box.
 */

import style from "./Dropdown.module.css"

/**
 * Render a dropdown to the sreen.
 * @param {*} param0 
 */
export default function Dropdown({ open, options, onChange })
{
    // Determine if we are curerntly showing or hiding the dropdown.
    const showOrHide = () =>
    {
        if(open)
        {
            return style.OptionsContainer
        }

        return style.ClosedOptions
    }

    return  <div className={style.OptionsWrapper}>
        <div className={`${showOrHide()}`}>

            {/* Default options for the select multiple */}
            { options.length === 0 && <div className={style.Option}>
                    <span>None Found</span>
                </div>}

            {/* Map the current options we have */}
            {options.map((item, index) => {
                // If the item includes the value then we will  want to filter based on it... this will need to change.
                return <div key={index} className={style.Option} onClick={() => onChange(item)}>
                        <span key={index}>{item.name}</span>
                    </div>;
            })}
        </div>
    </div>
}
