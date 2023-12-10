// ImageUpload.js
import React, {useState} from 'react';
import {storage, uploadBytes, getDownloadURL, ref} from '../firebase';

const ImageUpload = ({onImageUpload}) => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytes(storageRef, image);

        try {
            const snapshot = await uploadTask;
            const url = await getDownloadURL(snapshot.ref);
            onImageUpload(url);
            setProgress(0);
            setImage(null);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleChange}/>
            <br/>
            <button onClick={handleUpload}>Upload</button>
            <br/>
            <progress value={progress} max="100"/>
        </div>
    );
};

export default ImageUpload;
