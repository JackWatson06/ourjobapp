import axios from "axios"

const search = (value, setOptions) =>
{
    axios({
        method: 'get',
        url: `https://api.unijobapp.com/api/v1/places?name=${ value }`
    })
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    })
}

export default search
