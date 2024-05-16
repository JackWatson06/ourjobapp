/**
 * The link button allows the use of a button component which then links to whatever endpoint we pass in.
 */

import Button from '@atoms/button'
import Router from 'next/router'

export default function LinkButton( {link, title} ){
    const clickLink = () => {
        Router.push( link )
    }

    return <Button onClick={ clickLink } active={true} title={title}/>
}