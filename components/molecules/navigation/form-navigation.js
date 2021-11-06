import Router from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faQuestion } from '@fortawesome/free-solid-svg-icons'

import styles from '@styles/molecules/Navigation.module.css'

export default function FormNavigation()
{
    return <div className={styles.IconContainer}>
        <FontAwesomeIcon className={styles.NavigationIcon} onClick={() => Router.push("/")} icon={ faHome } />
        <FontAwesomeIcon className={styles.NavigationIcon} icon={ faQuestion } />
    </div>
}
