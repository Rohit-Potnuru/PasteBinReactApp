import { UPDATE, UPDATE_CONFIRM } from '../helpers/endpoint'

/**
* @typedef {Object} UpdateAPIRequestData
* @property {string} userId - The UserID.
* @property {string} contentType - The type of content to register.
* @property {number} expiryTime - The expiry time.
* @property {string} pasteBinId - The ID for pasteBin.
*/

/**
* @typedef {Object} UpdateAPIResponseData
* @property {string} pasteBinId - The ID for pasteBin.
* @property {string} accessURL - The s3 url to access.
*/

/**
* Makes an API call.
* @param {UpdateAPIRequestData} data - The request data.
* @returns {Promise<UpdateAPIResponseData>} The API response.
*/
export async function callUpdateDataAPI(data) {
    console.log("Update request body: ", JSON.stringify(data))
    try {
        const response = await fetch(UPDATE, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Update API request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw new Error(` Update API request failed: ${error.message}`);
    }
}

/**
* @typedef {Object} UpdateConfirmAPIRequestData
* @property {string} userId 
* @property {string} pasteBinId
*/

/**
* Makes an API call.
* @param {UpdateConfirmAPIRequestData} data - The request data.
* @returns {Promise<UpdateAPIResponseData>} The API response.
*/
export async function updateConfirmAPI(data) {
    console.log("Update confirm request body: ", JSON.stringify(data))
    try {
        const response = await fetch(UPDATE_CONFIRM, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Update confirm API request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw new Error(` Update confirm API request failed: ${error.message}`);
    }
}