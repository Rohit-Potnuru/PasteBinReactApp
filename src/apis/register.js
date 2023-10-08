import { REGISTER, REGISTER_CONFIRM } from '../helpers/endpoint'

/**
* @typedef {Object} RegisterAPIRequestData
* @property {string} userId - The UserID.
* @property {string} contentType - The type of content to register.
* @property {number} expiryTime - The expiry time.
*/

/**
* @typedef {Object} RegisterAPIResponseData
* @property {string} pasteBinId - The ID for pasteBin.
* @property {string} accessURL - The s3 url to access.
*/

/**
* Makes an API call.
* @param {RegisterAPIRequestData} data - The request data.
* @returns {Promise<RegisterAPIResponseData>} The API response.
*/
export async function callRegisterAPI(data) {
    console.log("request body: ", JSON.stringify(data))
    try {
        const response = await fetch(REGISTER, {
            method: 'POST',
            //mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Register API request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw new Error(` Register API request failed: ${error.message}`);
    }
}


/**
* @typedef {Object} RegisterConfirmAPIRequestData
* @property {string} userId 
* @property {string} pasteBinId
*/

/**
* Makes an API call.
* @param {RegisterConfirmAPIRequestData} data - The request data.
* @returns {Promise<RegisterAPIResponseData>} The API response.
*/
export async function RegisterConfirmAPI(data) {
    console.log("request body: ", JSON.stringify(data))
    try {
        const response = await fetch(REGISTER_CONFIRM, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Register API request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw new Error(` Register API request failed: ${error.message}`);
    }
}