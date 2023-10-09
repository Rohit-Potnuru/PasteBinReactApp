import { HEADERS } from '../helpers/API.js'

export async function APICall(url, data, method, headers = HEADERS) {
    console.log("Upload to s3 request body: ", JSON.stringify(data))
    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: data
        });

        if (!response.ok) {
            throw new Error(`Upload API request failed with status ${response.status}`);
        }

        console.log(method + " API response code: ", response.status);
        return response;
    } catch (error) {
        throw new Error(` Upload API request failed: ${error}`);
    }
}