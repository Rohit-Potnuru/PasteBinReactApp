import {
  Link,
  useParams
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function ViewPaste() {
    const { id } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const storedContent = localStorage.getItem(id);
        if (storedContent) {
            setContent(storedContent);
        }
    }, [id]);

    return (
        <div>
            <pre>{content}</pre>
            <Link to="/">Create New Paste</Link>
        </div>
    );
}

export default ViewPaste;