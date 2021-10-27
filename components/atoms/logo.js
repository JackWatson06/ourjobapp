
/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: The logo represents the our job app logo.
 */

export default function Logo(props){
    return <div>
        <Image 
            src="/images/svg/gray_logo.svg"
            alt="ALC"
            width={40}
            height={40}
        />
        <span>UJA</span>
    </div>
}