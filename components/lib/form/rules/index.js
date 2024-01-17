import email from "./Email"
import phone from "./Phone"
import maxLength from "./MaxLength"
import noSpaces from "./NoSpaces"
import urlTokens from "./UrlTokens"
import maxSize from "./MaxSize"
import fileType from "./FileType"
import uniqueName from "./UniqueAffiliateName"
import uniqueAffiliateName from "./UniqueAffiliateName"
import uniqueEmployerEmail from "./UniqueEmployerEmail"
import uniqueEmployeePhone from "./UniqueEmployeePhone"

const rules = {
    email                : email,
    phone                : phone,
    maxLength            : maxLength,
    noSpaces             : noSpaces,
    maxSize              : maxSize,
    fileType             : fileType,
    urlTokens            : urlTokens,
    uniqueName           : uniqueName,
    uniqueAffiliateName  : uniqueAffiliateName,
    UniqueEmployeePhone  : uniqueEmployeePhone,
    uniqueEmployerEmail  : uniqueEmployerEmail
}

export default rules