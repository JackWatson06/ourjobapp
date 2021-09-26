import axios from "axios"

const API_TOKEN = "AIzaSyCW1ZElfP-G8SpZZHauARjFXBqH-VLY4c4"

const search = (value, setOptions) =>
{
    axios({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${ value }&key=${API_TOKEN}`,
    })
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    })
}

export default search
