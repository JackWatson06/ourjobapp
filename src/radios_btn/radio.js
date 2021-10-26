import React, { useState } from "react";
import styles from "./styles.module.css";

const Radio = ({ value, setValue, label }) => {

    return (
        <div className={styles.radio_wrapper}>
            <div className={styles.radio_input} onClick={() => { setValue(label); }}>
                <div className={value === label ? `${styles.active_dot} ${styles.dot}` : styles.dot}></div>
            </div>
            <span className={styles.radio_label}>{label}</span>
        </div>
    );
};


export default Radio;