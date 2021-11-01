import fs from "@lib/form/FormStateTracker"

import React, { useState, useEffect, useRef } from "react"

import Pill from "./pill"

import styles from "@styles/atoms/Select.module.css"
import axios from "axios"
import Image from 'next/image'

export default function SelectInput({ label, multi_select, name, endpoint, list, validators, formState })
{
    const [selected,     setSelected]     = useState([])
    const [options,      setOptions]      = useState([])
    const [search,       setSearch]       = useState("")
    const [showDropDown, setShowDropDown] = useState(false)

    const selectRef   = useRef()
    const searchRef   = useRef()
    const wrapperRef  = useRef()
    const optionsRef  = useRef()
    const dropdownRef = useRef()

    const validate = () => fs.onBlurValidation(formState, name)

    dropdownRef.current = showDropDown;

    // This can be removed by spliting the select multiple with the default select.
    const error = fs.getError( name, formState.form )
    const value = (() => {
        return fs.getValue( name, formState.form ) === "" && multi_select ?
            [] :
            fs.getValue( name, formState.form )
    })();


    // Get the options from an endpoint if we are using the options from an endpoint.
    const searchOptions = (search) => {
        // If we search while we are in single select mode then default to empty. This if statement needs to be removed
        // multi select can be it's own component
        if(!multi_select)
        {
            fs.setValue("", name, formState)
        }
        // If we are searching for options against an endpoint.
        if(endpoint)
        {
            axios.get(`${endpoint}?name=${search}`)
                .then(function (response) {
                    setOptions( response.data.map( (responseData) => ({
                                value: responseData.id,
                                name: responseData.name
                            })
                        )
                    )
                })
        }
        //Search through the options regularly.
        else
        {
            setOptions(list);
        }

        setSearch(search)
    }


    /**
     * Item we clicked in the options. If we have select a multiple then merge with the current multiple.
     * @param {object} item Item we have selected
     */
    const selectOption = (item) => {
        
        if ( !multi_select) 
        {
            // Where we are just a regular dropdown. Remove focus, and hide drodown.
            fs.setValue(item.value, name, formState)
            validate()

            setShowDropDown(false)
            setSearch(item.name)
        }
        else if( !value.includes(item.value) )
        {
            // If we are a multi select then set the options that are selected.
            fs.setValue([ ...value, item.value], name, formState)
            setSelected([ ...selected, item.name])
        }
    }

    /**
     * Remove the item that we want to remove from the pill values.
     * @param {object} item Item we have selected to remove
     */
    const removeSelected = (index) => {
        return () => {
            value.splice(index, 1)
            selected.splice(index, 1)
        
            fs.setValue([ ...value], name, formState)
            validate()
        }
    }

    /**
     * Check to see if the blur event comes from outside our own select box or not.
     * @param {event} e Blue event
     */
    const onBlurInput = (e) => {
        if( e.relatedTarget != null ){
            setShowDropDown(false)
            validate()
        }
        return
    }

    // Add the input to the form state.
    useEffect(() => {
        fs.initInput(name, validators, formState, multi_select ? [] : "")
        searchOptions("")
    }, [])

    // Called once to add the event listener for clicking anywhere in the document. Then we 
    useEffect(() => {
        document.addEventListener("click", (e) => {
            // Make sure the dropdown is not something we click on.
            if (wrapperRef.current && !wrapperRef.current.contains(e.target) && dropdownRef.current) 
            {
                setShowDropDown(false); // Hide the dropdwon when we click off
                validate()
            }
        });

        // Why do we return function here... how does that work?
        return () => {
            document.removeEventListener("click", null)
        }
    }, [])

    return (
        <div className={styles.select_wrapper} ref={wrapperRef}>
            {/* Only enable the pill select for multile select you can see this in a large ternary operator. */}
            {multi_select ?
                <div className={styles.selected_options_wrapper}>
                    {selected.map((item, index) => {
                        // We use a CSS transition for deleting the items from the multiselct... kinda grows not a huge fan.
                        return <Pill key={index} item={item} remove={removeSelected(index)} />
                    })}
                </div> : null }

            <div className={error != "" && !showDropDown ? `${styles.input_wrapper} ${styles.error_border}` : `${styles.input_wrapper}`} ref={selectRef}>


                {/* Input */}
                <div className={styles.search_wrapper}>

                    {/* When we have the span focused and no values than make it active. */}
                    <span 
                        className={search === "" ? styles.label : `${styles.active_label} ${styles.label}`} 
                        onClick={() => searchRef.current.focus()}>{label}</span>

                    {/* Active styling when we are not focused. Otherwise it is basic text change. */}
                    <input type="text" className={styles.text_input}
                        // Text value paramters. These will handle the searching in the API endpoint.
                        onChange={(e) => searchOptions(e.target.value) }
                        onFocus={() => setShowDropDown(true)}
                        onBlur={(e) => onBlurInput(e) }
                        ref={searchRef}

                        value={search}
                    />
                    {/* These will need to be stored in a public directory... When we click these arrows we also show the dropdown. */}
                    <Image 
                        src={showDropDown ? "/images/svg/active_drop_down_arrows.svg" : "/images/svg/drop_down_arrows.svg"} 
                        alt="^"
                        width={35}
                        height={35} 
                        onClick={() => searchRef.current.focus()} />
                </div>


                {/* I need to figure out what refs are. */}
                <div className={`${styles.options_wrapper} ${showDropDown && optionsRef.current.hasChildNodes() ? 
                                                            styles.options_wrapper_opened : 
                                                            styles.options_wrapper_closed}`} ref={optionsRef}>


                        {/* Default options for the select multiple */}
                        { options.length === 0 && <div className={styles.option_item}>
                                <span>None Found</span>
                            </div>
                        }

                         {/* Map the current options we have */}
                        {options.map((item, index) => {
                            // If the item includes the value then we will  want to filter based on it... this will need to change.
                            return <div key={index} className={styles.option_item} onClick={(e) => selectOption(item)}>
                                    <span key={index}>{item.name}</span>
                                </div>;
                    })}
                </div>
            </div>
            <span className={styles.error_msg}>{error != "" && !showDropDown  ? error : null}</span>
        </div>
    );
};
