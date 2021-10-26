import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const SelectInput = ({ multi_select, options, selectedOptions, label, value, handleChange, handleSelection, deleteSelection = false }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const input_ref = useRef();
    const wrapper_ref = useRef();
    const options_ref = useRef();
    useEffect(() => {


        document.addEventListener("click", (e) => {
            if (wrapper_ref.current && !wrapper_ref.current.contains(e.target)) {
                setShowDropDown(false);
                if (multi_select === true) {
                    handleChange("")
                }

            }
        });
        return () => {
            document.removeEventListener("click");
        }
    }, []);



    useEffect(() => {
        if (showDropDown === false && isFocused === false) {
            if ((options.includes(value) === true && value != "" && multi_select === false) || multi_select === true && selectedOptions.length > 0) {
                setTimeout(() => {
                    input_ref.current.className = `${styles.active_input_wrapper} ${styles.select_input_wrapper}`;
                }, 100);
            } else {
                input_ref.current.className = `${styles.select_input_wrapper}`
            }
        }
        else {
            input_ref.current.className = `${styles.select_input_wrapper}`
        }

    }, [showDropDown, isFocused]);


    return (
        <div className={styles.select_wrapper} ref={wrapper_ref}>
            {multi_select === true ?
                <TransitionGroup component="div" className={styles.selected_options_wrapper}
                    style={selectedOptions.length > 0 ? {
                        border: "1px dashed #848484",
                        borderBottom: "none"
                    } : null}

                >

                    {selectedOptions.map((item, index) => (
                        <CSSTransition
                            timeout={500}
                            key={item}
                            classNames="item"

                        >
                            <div className={styles.selected_option_item}>
                                <span>{item}</span>
                                <img src="/svgs/x.svg" onClick={async () => {
                                    deleteSelection(item, multi_select)
                                }} />
                            </div>

                        </CSSTransition>
                    ))}

                </TransitionGroup>

                : null}

            <div className={styles.select_input_wrapper} ref={input_ref}>



                <div className={styles.input_wrapper_parent} >
                    <div className={styles.input_wrapper}>
                        <span
                            className={value != "" || isFocused === true ?
                                `${styles.activeLabel} ${styles.label}` : styles.label}>{label}</span>

                        <input type="text" className={value != "" || isFocused === true ? `${styles.active_text_input} ${styles.text_input}` : styles.text_input}
                            onChange={handleChange}

                            value={value}
                            onFocus={() => { setIsFocused(true); setShowDropDown(true) }}
                            onBlur={() => { setIsFocused(false); }}
                        />
                        <img src={showDropDown === true ? "/svgs/activeDropDownArrows.svg" : "/svgs/dropDownArrows.svg"} onClick={() => { setShowDropDown(!showDropDown); }} />
                    </div>
                </div>

                <div className={`${styles.options_wrapper} option_item`} id="options_wrapper"
                    ref={options_ref}
                    style={showDropDown === true && options_ref.current.hasChildNodes() === true ?
                        {
                            maxHeight: "9.44rem",
                            borderTop: "solid 1px #4a4a4a"

                        } : { maxHeight: 0 }}>
                    {options.map((item, index) => {

                        if (item.includes(value)) {

                            return (
                                <>

                                    <div className={`${styles.option_item} `} key={index}
                                        onClick={async () => {
                                            if (selectedOptions.includes(item) === false) {

                                                await handleSelection(item, multi_select);
                                                if (multi_select === false) {
                                                    setIsFocused(false);
                                                    setShowDropDown(false);

                                                }
                                            }
                                        }}>
                                        <span className="">{item}</span>
                                    </div>
                                </>

                            );
                        }
                    })}
                </div>

            </div >
        </div >

    );

};



export default SelectInput;