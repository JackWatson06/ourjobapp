import FooterNavigation from "@molecules/footer-navigation";
import FooterSocials from "@molecules/footer-socials";

import style from "@styles/organisms/Footer.module.css"

export default function Footer()
{
    return <div className={style.FooterContainer}>
        <h2 className={style.Header}>Navigation</h2>
        <div className={style.NavigationWrapper}>
            <FooterNavigation />
        </div>        
        
        <h2 className={style.Header}>Follow Us</h2>
        <FooterSocials />

        <p className={style.Moto}>Lets get back to work!</p>
        <p className={style.Copyright}><small>© 2021 OurJob.App</small></p>
    </div>;
}
