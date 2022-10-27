import React from 'react';
import EmojiPicker from 'emoji-picker-react';

const Imoji = ({setInput}) => {

    const handleImojiInput = (e) => {
        setInput(preInput => preInput + e.emoji)
    }
    


    return (
        <>
            <EmojiPicker onEmojiClick={handleImojiInput} id="emoji_picker" />
        </>
    );
};

export default Imoji;