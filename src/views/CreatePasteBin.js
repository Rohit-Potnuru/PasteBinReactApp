import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CreatePasteBin() {
    const [content, setContent] = useState('');

    const savePaste = () => {
        if (content.trim()) {
            const id = uuidv4();
            localStorage.setItem(id, content);
            window.location.href = `/${id}`;
        }
    };

    return (
        <div>
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Paste your content here..."
            />
            <button onClick={savePaste}>Save</button>
        </div>
    );
}

export default CreatePasteBin;