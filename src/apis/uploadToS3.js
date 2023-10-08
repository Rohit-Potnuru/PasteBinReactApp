export async function callUploadAPI(url, data) {
    console.log("Upload to s3 request body: ", JSON.stringify(data))
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"data": data}),
        });

        if (!response.ok) {
            throw new Error(`Upload API request failed with status ${response.status}`);
        }

        console.log("Upload API response code: ", response.status);
        return "Success";
    } catch (error) {
        throw new Error(` Upload API request failed: ${error}`);
    }
}