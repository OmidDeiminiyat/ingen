import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from 'react';
import style from './NavBar.module.scss'
import { Button } from '@mui/material';
import { Login } from "../../pages/Login";
export const Navigation = ({children}) => {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <>
            <nav className={style.mainNav}>
                <hgroup>
                    <h1>INGN</h1>
                </hgroup>
                <ul className={style.firstUl} >
                    {children}
                </ul>
                <div>
                    <FontAwesomeIcon icon={faUser} className={style.MyIcone}  variant="contained" color="primary" onClick={handleClickOpen} />
                    <FontAwesomeIcon icon={faBars} className={style.MyIcone} />
                  
                </div>
                <Login open={open} handleClose={handleClose} />
            </nav>
        </>
    )
}