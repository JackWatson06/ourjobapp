/**
 * Header for a element in html. This represents the level 3 header. Which we can use as a sub header.
 */

import styles from "@styles/atoms/Header.module.css";

export default function HeaderMedium( {title} ){
    return <h2 className={styles.Header}>{ title }</h2>
}
