import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { userContext } from '../../../App';
import cookieExpires from '../../../Functions/cookieExpires';
import inputHandler from '../../../Functions/inputHandler';
import failed from '../../../Functions/ResponseModal/failed';
import sucess from '../../../Functions/ResponseModal/sucesss';
import Header from '../../Header/Header';

const Login = () => {
    const [inputUser, setInputUser] = useState({});
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state ? location.state.from.pathname : "/"

    // useEffect(() => {
    //     user._id && navigate(from, { replace: true })
    //     const cooki = document.cookie.split("=")[1];
    //     console.log(cooki)
    //     if (cooki) {
    //         fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/user`, {
    //             method: "GET",
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //                 authorization: `Bearer ${cooki}`
    //             }
    //         }).then(res => res.json())
    //             .then(data => {
    //                 data._id && navigate(from, { replace: true })
    //                 data.password = null
    //                 setUser(data)
    //             })
    //     }
    // }, []);
    useEffect(() => {
        const cooki = document.cookie.split("=")[1];
        if (user._id) {
            user._id && navigate(from, { replace: true })
        } else {
            if (cooki) {
                fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/user`, {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        authorization: `Bearer ${cooki}`
                    }
                }).then(res => res.json())
                    .then(data => {
                        data._id && navigate(from, { replace: true })
                        data.password = null
                        setUser(data);
                    })
            }
        }

    }, []);


    const fromInputHandler = (e) => {
        inputHandler(e, inputUser, setInputUser)
    }

    const handleLogin = (e) => {
        e.preventDefault()


        if (inputUser.singInPhoenNumber && inputUser.signInPassword) {
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/logIn`, {
                method: "post",
                body: JSON.stringify(inputUser),
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    document.cookie = `token = ${data.token}; ${cookieExpires(3)}; path=/`;
                    if (data.data) {
                        data.data.password = null;
                        setUser(data.data)
                        navigate(from, { replace: true })
                    }
                    if (data.sucess) {
                        sucess(data.sucess)
                    }
                    if (data.failed) {
                        failed(data.failed)
                    }
                })
        }
    }

    return (
        <main className=''>
            <Header />
            <div className='container'>
                <section className='authentication m-auto'>
                    <form onSubmit={handleLogin} autoComplete="off">
                        <h6>Login</h6>
                        <label>Phone Number</label>
                        <input type="text" name="singInPhoenNumber" placeholder="Phone Number" value={inputUser.singInPhoenNumber ? inputUser.singInPhoenNumber : ""} required autoComplete="off" onChange={fromInputHandler} />

                        <label>Password</label>
                        <input type="password" name="signInPassword" placeholder="Password" value={inputUser.signInPassword ? inputUser.signInPassword : ""} required autoComplete="off" onChange={fromInputHandler} />


                        <input type="submit" value="Login" required autoComplete="off" />
                        
                        <div className='form-navigation d-flex text-white'><p>Don't have an account? <Link to="/register"><span>Register an account</span></Link></p></div>
                    </form>
                </section>
            </div>
            <ToastContainer />
        </main>
    );
};

export default Login;