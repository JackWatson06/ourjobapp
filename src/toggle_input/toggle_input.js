import React, { useState } from "react";
import styles from "./styles.module.css";


const ToggleInput = ({ isLeft, isRight, handleToggle, leftLabel, rightLabel }) => {



    return (
        <div className={styles.toggle_input_wrapper}>
            <span className={styles.label}>{leftLabel}</span>
            <div className={styles.toggle_input} onClick={handleToggle}>
                <div className={isRight === true ? `${styles.activeDot} ${styles.dot}` : isLeft === true ? styles.dot : null}></div>
            </div>
            <span className={styles.label}>{rightLabel}</span>
        </div>
    );
};
export default ToggleInput;