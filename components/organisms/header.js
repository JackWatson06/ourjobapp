import Logo from "@atoms/logo";
import styles from '@styles/organisms/Header.module.css'

export default function Navigation({ navigation })
{
    return <div className={ styles.TopHeader }>
            <Logo />

            {navigation}
    </div>
}
