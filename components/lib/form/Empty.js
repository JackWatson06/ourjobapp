/**
 * Original Author: Jack watson
 * Created Date: 7/11/2021
 * Purpose: The required status in our system stands out from other rules. The reason being is due to the fact that the form
 * needs to know when to submit the current page based to change colors. It keeps internally a track of the state that each
 * page on the form is in. In order to know this state we need to be aware of the components that are specifcially marked
 * required or not required. Which means there is logic suronding those parameters so we decided to pull out that logic seperately.
 * I feel in differenlty about this since being required is still a 'rule' on the form. It's a rule on the form level though
 * not the individual level and maybe thats the difference.
 */

 /**
  * Check to make sure the input is not required.
  * @param {string} value Value we are checking
  */
export default function empty(value)
{
    if( value === undefined || value === null || value === "" || value.length === 0)
    {
        return true
    }

    return false
}
