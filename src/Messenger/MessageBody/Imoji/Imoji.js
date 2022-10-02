import React from 'react';
import EmojiPicker from 'emoji-picker-react';

const Imoji = ({setInput}) => {

    const handleImojiInput = (e) => {
        console.log(e.emoji )
        setInput(preInput => preInput + e.emoji)
    }
    


    return (
        <>
            <EmojiPicker onEmojiClick={handleImojiInput} id="emoji_picker" />
        </>
    );
};

export default Imoji;