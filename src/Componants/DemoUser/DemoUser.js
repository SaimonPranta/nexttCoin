import React, { useContext } from 'react';
import { userContext } from '../../App';
import './DemoUser.css';
import domeUser from "../../Assets/DamyData/DameyData.json";
import { useNavigate } from 'react-router-dom';
import {FaAngleDoubleRight} from 'react-icons/fa';



const DemoUser = () => {
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate()
    console.log(user)

    const hadleDemoUser = () => {
        setUser(domeUser)
        setTimeout(() => {
            navigate("/dashboard/my_account", { replace: true })
        }, 1);
    }

    return (
        <div className='demo-user container pt-5 d-flex justify-content-center align-items-center'>
            <button onClick={hadleDemoUser}>Try Free Demo <FaAngleDoubleRight /> </button>
        </div>
    );
};

export default DemoUser;