import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Notifications.css';

const Notifications = () => {
    const [user] = useContext(userContext)

    return (
        <div className='notification text-black' id='notification'>
            <h4 className='pt-2 ps-4 m-0'>Notification</h4>
            <div className='sub-notification px-4 m-0'>
                   {
                    !user?.isActive ? <p>Your Account is not active. Please Active Your Account. <Link to="/dashboard/investment">Acive Now</Link></p> :
                    <p>No</p>
                   }
                    {/* <p>Herro, Users we are gooing to intruduce to your our new porject</p>
                    <p>Lorem ipsum  adipisicing elit. Possimus dolore, molestias quo cum debitis minus aut rem eum. Fugiat ducimus dolor deleniti rerum accusamus mollitia veniam adipisci. Amet, aut illum.</p> */}

                    {/* <p> start, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ipsum porro molestias provident, quia unde eos libero nihil quidem rem? Ab labore provident doloribus eligendi minus sapiente laboriosam temporibus consequatur.</p>
                <p>Herro, Users we are gooing to intruduce to your our new porject</p>
                <p>Lorem ipsum  adipisicing elit. Possimus dolore, molestias quo cum debitis minus aut rem eum. Fugiat ducimus dolor deleniti rerum accusamus mollitia veniam adipisci. Amet, aut illum.</p> */}

                    {/* <p> start, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ipsum porro molestias provident, quia unde eos libero nihil quidem rem? Ab labore provident doloribus eligendi minus sapiente laboriosam temporibus consequatur.</p>
                    <p>Herro, Users we are gooing to intruduce to your our new porject</p>
                    <p>Lorem ipsum  adipisicing elit. Possimus dolore, molestias quo cum debitis minus aut rem eum. Fugiat ducimus dolor deleniti rerum accusamus mollitia veniam adipisci. Amet, aut illum.</p> */}
            </div>
        </div>
    );
};

export default Notifications;