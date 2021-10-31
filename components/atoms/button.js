/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: The link button allows the use of a button component which then links to whatever endpoint we pass in.
 */

import style from "@styles/atoms/Button.module.css";

export default function Button( { onClick, title, loading, active = true } ){

    return loading ? <p> Loading... </p>:
        <button className={ active ? `${style.button} ${style.active}` : `${style.button}` } 
                onClick={(e) => onClick(e) }
                disabled={!active}> {title} </button>
}