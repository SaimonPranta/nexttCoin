import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import failed from '../../../Functions/ResponseModal/failed';
import sucess from '../../../Functions/ResponseModal/sucesss';


const ImageUploadModal = ({ userID, setUser }) => {
    const [image, setImage] = useState(null)




    const handleInput = (e) => {
        setImage(e.target.files[0])
    }

    const handleImageUpload = (e) => {
        e.preventDefault()

        const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");
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
                        sucess("Porfile Picture Sucessfully Uploaded !")
                    }
                    if (data.failed) {
                        failed(data.failed)
                    }
                })
        } else {
        }
    }



    return (
        <div className='common-form-styles image_upload_modal' id='image_upload_modal'>
            <form autoComplete="off" onSubmit={handleImageUpload} >
                <ImCross />
                <input type="file" name="image" onChange={(e) => handleInput(e)} />
                <input type="submit" value="Set Porfile Picture" />
            </form>
        </div>
    );
};

export default ImageUploadModal;