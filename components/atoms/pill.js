import styles from "@styles/atoms/Pill.module.css"
import Image from 'next/image'

export default function Pill({item, remove}){
    return <div className={styles.selected_option_item}>
                <span>{item}</span>
                <Image src="images/svg/x.svg" alt="X" onClick={() => remove() } />
            </div>

}
