import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, } from 'firebase/storage';
import { storage } from '../firebase';
import { v4 } from 'uuid';
import { client } from "@gradio/client";

const Upload = () => {
    const [imgSrc, setImgSrc] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImgSrc(file); // Store the file object
        }
    };

    const handleGoClick = async () => {
        if (imgSrc === null) {
            console.log('No Image found');
            return;
        }

        const imageRef = ref(storage, `images/${v4()}_${imgSrc.name}`);
        // storing img
        const BytesData = await uploadBytes(imageRef, imgSrc);
        // generating img url from firebase
        const url = await getDownloadURL(imageRef)
        
        console.log('Image uploaded successfully:', BytesData);
        console.log("URL fetched successfully: ", url)

        try {
            const response_0 = await fetch(url);
            const exampleImage = await response_0.blob();
    
            const app = await client("https://ahmad4raza-flying-shakespeare.hf.space/");
            const result = await app.predict("/predict", [
                exampleImage,
            ]);
    
            console.log(result.data);
    
        } catch (error) {
            console.error(error.message);
            
        }
    };

    return (
        <div className="group relative mt-24">
            <div className="relative h-80 w-full flex justify-center items-center overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                <img
                    id="img-sample"
                    src={imgSrc ? URL.createObjectURL(imgSrc) : 'https://cdn.discordapp.com/attachments/1075621727004016721/1147203867608612976/ad897301bfd9c1389174fe6f4eb0823b.gif'}
                    alt="sample img"
                    className="h-full w-1/2 object-cover object-center rounded-lg border-2 border-sky-500"
                />
            </div>

            <div className="mt-4 mb-4 flex flex-col justify-center items-center text-base font-semibold text-gray-900">
                <label htmlFor="input-file">Upload image here</label>
                <input
                    onChange={handleImageChange}
                    type="file"
                    accept="image/*"
                    name="input-file"
                    id="input-file"
                    className="my-3 sm:my-1 ml-10"
                />
                <button
                    onClick={handleGoClick}
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 border border-blue-700 rounded"
                >
                    Upload
                </button>
            </div>
        </div>
    );
};

export default Upload;
