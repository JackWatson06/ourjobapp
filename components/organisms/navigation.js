/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: Navigation bar for the signup pages.
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

import Logo from "@atoms/logo";
import styles from '@styles/organisms/Navigation.module.css'

export default function Navigation()
{
    return <div className={ styles.Navigation }>

            {/* Items on left side of navigation */}
            <Logo />

            {/* Items on right side of navigation */}
            <div>
                <FontAwesomeIcon icon={ faQuestion } />
            </div>

    </div>
}
