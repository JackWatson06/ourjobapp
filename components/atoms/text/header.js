
/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: Header for a element in html. This represents the level 3 header. We'll want to think about how we actually
 * do that since how do we encapsulate the idea of 1-5 different headers sizes. Maybe we make the actual name header more semantic
 * when we have a use case for it.
 */

export default function Header( {title} )
{
    return <h1>{ title }</h1>
}
