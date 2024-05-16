/**
 * We simply need a paragraph which represents some chunk of text. Yes I know this is simple. But it represents
 * an abstration of the paragraph tag in the HTML spec. We may be able to make easy changes when we abstract it... maybe not
 * maybe this is too far in the level of abstracting simple concepts. IDK we'll find out.
 */

import styles from "@styles/atoms/Paragraph.module.css"

export default function Paragraph({text}){
    return <p className={styles.Paragraph}>{ text }</p>
}