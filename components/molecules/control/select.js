import React, { useState, useEffect, useRef, useCallback } from "react"
import axios from "axios"

import Border from "@atoms/input/border"
import Dropdown from "@atoms/input/dropdown"
import InputText from "@atoms/input/input-text"
import Pill from "@atoms/input/pill"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import style from "./Select.module.css"

import validate from "@lib/form/validate"

//https://axios-http.com/docs/cancellation
let source = axios.CancelToken.source()

export default function Select({ label, name, endpoint, list, validators, multiple = false, required = true, notify })
{
    // States that we are using for this select 
    // Hmmm... an select needs to keep track of quite a bit of state. I wonder if their is a way to simplify this?
    const [pills,     setPills] = useState([])
    const [options, setOptions] = useState([])
    const [value,     setValue] = useState([]) // Default to an empty array for potential of multi select input.
    const [search,   setSearch] = useState("") 
    const [error,     setError] = useState("") 
    const [touched, setTouched] = useState(false)
    const [focused, setFocused] = useState(false)

    const selectRef = useRef()
    const inputRef  = useRef()

    /**
     * Send a notification to a higher level component that this input is good to go ... only if we are correctly validated.
     */
    const validateInput = useCallback( async (newValue) => {
        const error = await validate(newValue, required, validators)

        if(notify != null)
        {
            notify(name, newValue, error === "")
        }

        setError(error)
    }, [name, validators, notify, required])

    // Since debouce is a stateful action (we have to know the current state of the timer) so we just load it into state.
    const [validator] = useState(() => validateInput)  

    // Focus on the search input.
    const focusOnInput = (e) => {
        inputRef.current.focus()
    }

    const searchOptions = useCallback(
        (search) => {
            // If we are searching for options against an endpoint.
            if(endpoint)
            {
                // We should store the API stuff in a seperate file... or maybe a custom use API hook.
                source.cancel()
                source = axios.CancelToken.source()
        
                axios.get(`${endpoint}?name=${search}`, { cancelToken: source.token })
                    .then(function (response) {
                        setOptions( response.data.map( (responseData) => ({
                                    value: responseData.id,
                                    name: responseData.name
                                })
                            )
                        )
                    })
                    .catch( (e) => console.error(e) )
            }
            //Search through the options regularly.
            else
            {
                setOptions(list)
            }
        }, 
        [endpoint, list, setValue]
    )

    /**
     * Handle a update on the text input change.
     */
    const onSearch = useCallback(
        (search) => {
            searchOptions(search);
            setSearch(search)
            setValue([])
        },
        [searchOptions, setSearch, setValue]
    )
    
    /**
     * Item we clicked in the options. If we have select a multiple then merge with the current multiple.
     * @param {object} item Item we have selected
     */
    const onChange = (item) => {

        // If we are in single selection mode.
        if ( !multiple) 
        {
            // Where we are just a regular dropdown. Remove focus, and hide drodown.
            setValue(item.value)
            setSearch(item.name)
            setFocused(false)
        }
        else if( !value.includes(item.value) )
        {
            // If we are a multi select then set the options that are selected.
            setPills([...pills, item])
            setValue([...value, item.value])
        }
    }

    /**
     * Remove the item that we want to remove from the pill values.
     * @param {object} item Item we have selected to remove
     */
    const removeSelected = (index) => {
        return () => {
            value.splice(index, 1)
            pills.splice(index, 1)
        
            setValue([...value])
            setPills([...pills])
            
            validate()
        }
    }

    /**
     * Check to see if the blur event comes from outside our own select box or not.
     * @param {event} e Blue event
     */
    const onFocus = (focus, e) => {

        if(!touched)
        {
            setTouched(true);
        }

        // If we are coming into the component from somewhere grant focus.
        if(focus)
        {
            return setFocused(true);
        }

        // Only hide the component if we are coming from a known component (i.e. tabbing through).
        if(e.relatedTarget != null)
        {
            return setFocused(false);
        }
    }

    /**
     * Determine if we want to show the error. We really only want to do this after the first interaction with the component.
     */
    const errorState = () => {
        return error != "" && !focused && touched
    }

    /**
     * Run the notification on start so we can make sure the optional inputs are taken care of.
     */
    useEffect(() => {
        validator(value)
    }, [validator, value])

    useEffect(() => {
        searchOptions("")
    }, [searchOptions])

    // Called once to add the event listener for clicking anywhere in the document. Then we 
    useEffect(() => {
        document.addEventListener("click", (e) => {
            // Make sure the dropdown is not something we click on.
            if (selectRef.current && !selectRef.current.contains(e.target)) 
            {
                setFocused(false); // Hide the dropdown when we click off.
            }
        });

        // Why do we return function here... how does that work?
        return () => {
            document.removeEventListener("click", null)
        }
    }, [setFocused])


    return (
        <div className={style.SelectWrapper} ref={selectRef}>
            
            {/* Multi-Select */}
            {multiple ?
                <div className={style.PillsContainer}>
                    {pills.map((item, index) => {
                        // We use a CSS transition for deleting the items from the multiselct... kinda grows not a huge fan.
                        return <Pill key={index} item={item} remove={removeSelected(index)} />
                    })}
                </div> : null }
                
            {/* Search box */}
            <Border focused={focused} error={errorState()}>
                <div className={style.IconInputContainer} onClick={ e => focusOnInput(e) }>
                    <InputText label={label} type="search" name={name} value={search} onFocus={onFocus} onChange={onSearch} ref={inputRef} />
                    <FontAwesomeIcon className={`${style.InputIcon} ${focused ? style.Flipped : ''}`} icon={ faChevronDown }/>
                </div>
            </Border>

            {/* Dropdown popup  */}
            <Dropdown open={focused} options={options} onChange={onChange} />

            <span className={style.ErrorSpan}>{errorState() ? error : null}</span>
        </div>
    );
};
