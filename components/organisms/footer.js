import FooterNavigation from "@molecules/footer-navigation"

import style from "@styles/organisms/Footer.module.css"

export default function Footer()
{
    return <div className={style.FooterContainer}>
        <FooterNavigation />

        <p className={style.Moto}>Lets get back to work!</p>
        <p className={style.Copyright}><small>© 2021 OurJob.App</small></p>
    </div>;
}
