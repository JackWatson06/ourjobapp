/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: The link button allows the use of a button component which then links to whatever endpoint we pass in.
 */

import Router from 'next/router'

export default function Button( { onClick, title } ){
    return <button onClick={(e) => onClick(e) }> {title} </button>
}