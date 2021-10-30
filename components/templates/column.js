import Navigation from "@organisms/navigation"
import styles from "@styles/templates/Column.module.css"

export default function Column({content})
{
    return <>
        <Navigation />

        <div className={styles.Column} >
            { content }
        </div>
    </>
}
