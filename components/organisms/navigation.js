/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: Navigation bar for the signup pages.
 */

import Router from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faQuestion } from '@fortawesome/free-solid-svg-icons'

import Logo from "@atoms/logo";
import styles from '@styles/organisms/Navigation.module.css'

export default function Navigation()
{
    const navigate = (link) => {
        Router.push( link )
    } 


    return <div className={ styles.NavigationContainer }>

            {/* Items on left side of navigation */}
            <Logo />

            {/* Items on right side of navigation */}
            <div className={styles.IconContainer}>
                <FontAwesomeIcon className={styles.NavigationIcon} onClick={() => navigate("/")} icon={ faHome } />
                <FontAwesomeIcon className={styles.NavigationIcon} icon={ faQuestion } />
            </div>

    </div>
}
