/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: The link button allows the use of a button component which then links to whatever endpoint we pass in.
 */

import Router from 'next/router'

export default function LinkButton(props)
{
    const link = () => {
        Router.push( props.link )
    }

    return <button onClick={ (e) => link() }> {props.title} </button>
}