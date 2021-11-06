import required from "./Required"
import email from "./Email"
import phone from "./Phone"
import maxLength from "./MaxLength"
import noSpaces from "./NoSpaces"
import urlTokens from "./UrlTokens"
import maxSize from "./MaxSize"
import fileType from "./FileType"
import uniqueName from "./UniqueName"
import uniqueAffiliateEmail from "./UniqueAffiliateEmail"
import uniqueEmployerEmail from "./UniqueEmployerEmail"
import uniqueEmployeeEmail from "./UniqueEmployeeEmail"

const rules = {
    email                : email,
    phone                : phone,
    required             : required,
    maxLength            : maxLength,
    noSpaces             : noSpaces,
    maxSize              : maxSize,
    fileType             : fileType,
    urlTokens            : urlTokens,
    uniqueName           : uniqueName,
    uniqueAffiliateEmail : uniqueAffiliateEmail,
    uniqueEmployeeEmail  : uniqueEmployeeEmail,
    uniqueEmployerEmail  : uniqueEmployerEmail
}

export default rules