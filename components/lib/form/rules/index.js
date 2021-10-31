import required from "./Required"
import email from "./Email"
import phone from "./Phone"
import uniqueName from "./UniqueName"
import uniqueAffiliateEmail from "./UniqueAffiliateEmail"
import uniqueEmployerEmail from "./UniqueEmployerEmail"
import uniqueEmployeeEmail from "./UniqueEmployeeEmail"

const rules = {
    email                : email,
    phone                : phone,
    required             : required,
    uniqueName           : uniqueName,
    uniqueAffiliateEmail : uniqueAffiliateEmail,
    uniqueEmployeeEmail  : uniqueEmployeeEmail,
    uniqueEmployerEmail  : uniqueEmployerEmail
}

export default rules