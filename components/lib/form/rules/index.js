import required from "./Required"
import email from "./Email"
import uniqueName from "./UniqueName"
import uniqueAffiliateEmail from "./UniqueAffiliateEmail"
import uniqueEmployerEmail from "./UniqueEmployerEmail"
import uniqueEmployeeEmail from "./UniqueEmployeeEmail"

const rules = {
    email                : email,
    required             : required,
    uniqueName           : uniqueName,
    uniqueAffiliateEmail : uniqueAffiliateEmail,
    uniqueEmployeeEmail  : uniqueEmployeeEmail,
    uniqueEmployerEmail  : uniqueEmployerEmail
}

export default rules