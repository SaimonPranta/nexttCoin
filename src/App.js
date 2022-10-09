import { createContext, useEffect, useState } from 'react';
import './App.css';
import './Common_CSS/form_css.css';
import './Common_CSS/tabel_css.css';



import Routess from './Routes/Routess';

export const userContext = createContext();
export const adminContex = createContext()

function App() {
  const [user, setUser] = useState({})
  const [allUser, setAllUser] = useState([])





  useEffect(() => {
    const cooki = document.cookie.split("=")[1];
    if (cooki) {
      fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/user`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          authorization: `Bearer ${cooki}`
        }
      }).then(res => res.json())
        .then(data => {
          data.password = null
          setUser(data);
        })
    }
  }, []);

  useEffect(() => {
    if (user?.role === "admin") {
      const cooki = document.cookie.split("=")[1];
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
    }
  }, [user]);

  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
        <adminContex.Provider value={[allUser, setAllUser]}>
          <Routess />
        </adminContex.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
