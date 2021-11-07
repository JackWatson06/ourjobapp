import LinkButton from "@molecules/link-button"

import style from "@styles/organisms/Signup.module.css";

export default function Signup()
{
    return <div className={style.SignupContainer}>
        <LinkButton title="Find a job" link="/employee" />
        <LinkButton title="Find employees " link="/employer" />
        <LinkButton title="Share" link="/sharer" />
    </div>
}
