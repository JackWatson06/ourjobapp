import PrimaryNavigation from "@molecules/navigation/primary-navigation"
import Header from "@organisms/header"
import styles from "@styles/templates/Column.module.css"

export default function Column({content})
{
    return <>
        <Header navigation={ <PrimaryNavigation/> } />

        <div className={styles.Column} >
            { content }
        </div>
    </>
}
