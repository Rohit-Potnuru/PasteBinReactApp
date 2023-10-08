import { GET_API } from '../helpers/endpoint'

/**
* @typedef {Object} getDataAPIRequestData
* @property {string} pasteBinId - The ID for pasteBin.
*/

/**
* @typedef {Object} getDataAPIResponseData
* @property {string} pasteBinId - The ID for pasteBin.
* @property {string} accessURL - The s3 url to access.
*/

/**
* Makes an API call.
* @param {getDataAPIRequestData} data - The request data.
* @returns {Promise<getDataAPIResponseData>} The API response.
*/
export async function getDataAPI(pasteBinId) {
    try {
        const response = await fetch(GET_API + '/' + pasteBinId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Get API request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        throw new Error(` Get API request failed: ${error}`);
    }
}

/**
* @typedef {Object} getS3DataRequest
* @property {string} pasteBinId - The ID for pasteBin.
*/

/**
* @typedef {Object} getS3DataResponse
* @property {string} data - The ID for pasteBin.
*/

/**
* Makes an API call.
* @param {getS3DataRequest} data - The request data.
* @returns {Promise<getS3DataResponse>} The API response.
*/
export async function getDataFromS3(pasteBinUrl) {
    try {
        const response = await fetch(pasteBinUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Get data from s3 request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        throw new Error(` Get data from s3 request failed: ${error}`);
    }
}