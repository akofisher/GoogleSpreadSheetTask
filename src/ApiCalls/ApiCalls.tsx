import axios from 'axios';

const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1LiWjTw8exAaOKmoq7ISiPwDD8ow2p-sQ3SSInEzKNfc/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyApQtWMLEiRLi4yz_OWwsyyxGEHf5fFb7A';



const apiCall = async (method = 'GET', data = null, headers = {}) => {
    try {
        // const url = `${BASE_URL}/${endpoint}`;
        const response = await axios({
            method: method,
            url: BASE_URL,
            data: data,
            headers: headers,
        });

        return response.data;
    } catch (error) {
        console.error(`API call error for ${BASE_URL}:`, error);
        throw error;
    }
};



export { apiCall };
