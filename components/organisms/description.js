
import Image from "@atoms/image";

import styles from "@styles/organisms/Description.module.css"

export default function Description()
{
    return <div className={styles.ImageWrapper}>
        <Image 
            src="/images/sharer-graphic.jpg"
            alt="Steps to be a sharer!" />
    </div>
}
