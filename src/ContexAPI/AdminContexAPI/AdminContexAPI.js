import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const adminContex = createContext()

const AdminContexAPI = () => {
    const [allUser, setAllUser] = useState([])

    useEffect(() => {
        const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");
        if (cooki) {
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/admin/users`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.data) {
                        setAllUser(data.data);
                    }
                })
        }
    }, []);


    return (
        <>
            <adminContex.Provider value={[allUser, setAllUser]}>

            </adminContex.Provider>
        </>
    );
};

export default AdminContexAPI;