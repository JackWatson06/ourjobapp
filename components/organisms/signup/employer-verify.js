
import Column from "@templates/column"
import HeaderMedium from "@atoms/text/header-md"
import LinkButton from "@molecules/link-button"

export default function EmployerVerify({formData, response})
{
    return <>
        <HeaderMedium title={ `A verification link has been sent to ${formData.email}` } />
        <p><small>Remember to check spam!</small></p>
        <LinkButton title="Return to Homepage" link="/" />
    </>
}
