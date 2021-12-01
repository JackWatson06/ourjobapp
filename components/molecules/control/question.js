/**
 * Original Author: Jack Watson
 * Created Date: 10/30/2021
 * Purpose: This component represents a question component which simply houses a input with a text statment above it.
 */

import React from "react"

import styles from "./Question.module.css"

export default function Question({question, input, notify})
{
    return <div>
        <div className={styles.QuestionWrapper}>
            <p>{question}</p>
        </div>
        { React.cloneElement( input, {notify: notify} ) }
    </div>
}
