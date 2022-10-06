import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';


const ImageUploadModal = ({userID, setUser}) => {
    const [image, setImage] = useState(null)




    const handleInput = (e) => {
        setImage(e.target.files[0])
    }

    const handleImageUpload = (e) => {
        e.preventDefault()

        const cooki = document.cookie.split("=")[1];
        if (image && cooki) {
            const formData = new FormData()
            formData.append('image', image)
            formData.append('id', userID)

            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/profile_pic`, {
                method: 'POST',
                body: formData,
                headers: {
                    authorization: `Bearer ${cooki}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.data) {
                        setUser(data.data)
                        const image_upload_modal = document.getElementById("image_upload_modal")
                        image_upload_modal.classList.remove("active_image_upload_modal")
                    } else {
                    }
                })
        } else {
        }
    }



    return (
        <div className='common-form-styles image_upload_modal' id='image_upload_modal'>
            <form autocomplete="off" onSubmit={handleImageUpload} >
                <ImCross />
                <input type="file" name="image" onChange={(e) => handleInput(e)} />
                <input type="submit" value="Set Porfile Picture" />
            </form>
        </div>
    );
};

export default ImageUploadModal;