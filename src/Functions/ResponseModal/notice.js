
import { toast } from 'react-toastify';

const notice = () => {
    toast.error("Your Account are not Active, Please Active Your Account ! ", {
        position: "top-left",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

export default notice;