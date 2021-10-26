/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: We simply need a paragraph which represents some chunk of text. Yes I know this is simple. But it represents
 * an abstration of the paragraph tag in the HTML spec. We may be able to make easy changes when we abstract it... maybe not
 * maybe this is too far in the level of abstracting simple concepts. IDK we'll find out.
 */

export default function Paragraph({text})
{
    return <p>{ text }</p>
}