import FormNavigation from "@molecules/navigation/form-navigation"
import Header from "@organisms/header"
import styles from "@styles/templates/Column.module.css"

export default function Column({content})
{
    return <>
        <Header navigation={ <FormNavigation/> } />

        <div className={styles.Column} >
            { content }
        </div>
    </>
}
