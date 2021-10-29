import required from "./Required"
import email from "./Email"
import uniqueName from "./NameCheck"

const rules = {
    email    : email,
    required : required,
    uniqueName: uniqueName 
}

export default rules