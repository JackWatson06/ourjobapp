
import Paragraph from "@atoms/text/paragraph"
import React from "react"

import styles from "@styles/molecules/Question.module.css"

export default function Question({question, formState, input})
{
    return <div>
        <div className={styles.QuestionWrapper}>
            <Paragraph text={question} />
        </div>
        { React.cloneElement( input, {formState: formState} ) }
    </div>
}
