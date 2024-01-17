/**
 * Original Author: Jack Watson
 * Created Date: 10/17/2021
 * Purpose: This class simply renders a pill to the frontend.
 */

import Image from 'next/image'

import style from "./Pill.module.css"

export default function Pill({item, remove}){
    return <div className={style.Pill}>
                <span>{item.name}</span>
                <Image 
                    src="/images/svg/x.svg" 
                    alt="X" 
                    onClick={() => remove() } 
                    width={5}
                    height={5} />
            </div>

}
