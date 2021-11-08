
import Image from "@atoms/image";

import profilePic from '../../public/images/sharer-graphic.jpg'

import styles from "@styles/organisms/Description.module.css"

export default function Description()
{
    return <div className={styles.ImageWrapper}>
        <Image 
            src={profilePic}
            alt="Steps to be a sharer!"
            placeholder="blur"
             />
    </div>
}
