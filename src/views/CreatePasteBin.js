import React, { useState } from 'react';
import { callRegisterAPI, RegisterConfirmAPI } from '../apis/register'
import { callUploadAPI } from '../apis/uploadToS3'

const registerAPIRequestData = {
    userId: 'Sreeja',
    contentType: 'application/json',
    expiryTime: 1,
};

export async function uploadToS3(url, data) {
    const response = await callUploadAPI(url, data);
    console.log('Upload API Response:', response);
    return response;
};

export async function registerConfirmation(pasteBinId) {
    const registerConfirmAPIRequestData = {
        userId: 'Sreeja',
        pasteBinId: pasteBinId
    };
    const response = await RegisterConfirmAPI(registerConfirmAPIRequestData);
    console.log('Register Confirm API Response:', response);
    return response;
};


export async function savePaste(content) {

    if (content.trim()) {

        try {
            const registerResponse = await callRegisterAPI(registerAPIRequestData);

            await uploadToS3(registerResponse.accessURL, content);

            await registerConfirmation(registerResponse.pasteBinId);

            window.location.href = `/${registerResponse.pasteBinId}`;
            
        } catch (error) {
            console.error('Error in savePaste:', error.message);
        }
    }
};

function CreatePasteBin() {
    const [content, setContent] = useState('');

    const handleSave = async () => {
        await savePaste(content);
    }
    return (
        <div>
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Paste your content here..."
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default CreatePasteBin;