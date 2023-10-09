import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { savePaste, uploadToS3 } from './CreatePasteBin';
import { getDataAPI, getDataFromS3 } from '../apis/getData';
import {callUpdateDataAPI, updateConfirmAPI} from '../apis/update'

export async function getData(id) {
    try {
        const storedContent = await getDataAPI(id);
        const pasteBinData = await getDataFromS3(storedContent.accessURL);
        return pasteBinData.data;
    } catch (error) {
        console.error('Error fetching data from s3:', error);
        return null; // Handle errors
    }
}

export async function updateConfirmation(pasteBinId) {
    const updateConfirmAPIRequestData = {
        userId: 'Guest',
        pasteBinId: pasteBinId
    };
    const response = await updateConfirmAPI(updateConfirmAPIRequestData);
    console.log('Update Confirm API Response:', response);
    return response;
};

export async function updatePaste(content, id) {

    if (content.trim()) {

        try {
            const updateAPIRequestData = {
                contentType: 'application/json',
                expiryTime: 0,
                pasteBinId: id,
                userId: 'Guest',
            };
            const updateAPIResponseData = await callUpdateDataAPI(updateAPIRequestData);
            console.log('Update API Response:', updateAPIResponseData);

            await uploadToS3(updateAPIResponseData.accessURL, content);

            await updateConfirmation(updateAPIResponseData.pasteBinId);

            window.location.href = `/${updateAPIResponseData.pasteBinId}`;

        } catch (error) {
            console.error('Error in savePaste:', error.message);
        }
    }
};

function ViewPaste() {
    const { id } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const storedContent = await getData(id);
            if (storedContent) {
                setContent(storedContent);
            }
        };

        fetchData();
    }, [id]);

    const handleSave = async () => {
        await savePaste(content, id);
    };

    const handleUpdate = async () => {
        await updatePaste(content, id);
    };

    return (
        <div>
            <div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Paste your content here..."
                />
                <button onClick={handleSave}>Save</button>
            </div>
            <button onClick={handleUpdate}>Update</button>
            <br />
            <br />
            <Link to="/">Create New Paste</Link>
        </div>
    );
}

export default ViewPaste;