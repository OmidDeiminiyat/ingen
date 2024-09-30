import { NavLink } from "react-router-dom";
import React from 'react';
import style from './Footer.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';



export function Footer(){
    const location = useLocation();
  const [activePath, setActivePath] = useState('active');


  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);


    return(
        <>
            <footer className={style.footer}>
                <ul>
                    <li>
                        <NavLink to="/Login" className={({isActive}) => isActive ? style.active : '' }>  </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? style.active : '' }  >  </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? style.active : 'test' }  >  </NavLink>
                    </li>
                </ul>
            </footer>
        </>
    );
} 