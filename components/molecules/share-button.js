
import Button from "@atoms/button.js";

export default function ShareButton({ title, text, url }){
    
    const shareApi = () => {
        navigator.share({
            title: title,
            text: text,
            url: url,
        }).then(() => {
            console.log("Successfully shared");
        })
        .catch((error) => {
            console.error("Something went wrong", error);
        });
    }   

    return <Button title="Share" onClick={() => shareApi() }/>
}
