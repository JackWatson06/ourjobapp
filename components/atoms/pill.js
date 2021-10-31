
import styles from "@styles/atoms/Pill.module.css"

export default function Pill({item, remove}){
    return <div className={styles.selected_option_item}>
                <span>{item}</span>
                <img src="images/svg/x.svg" onClick={() => remove() } />
            </div>

}
