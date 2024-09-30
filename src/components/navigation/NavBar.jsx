import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import style from './NavBar.module.scss'
import React from "react"
export const Navigation = ({children}) => {
    return (
        <>
            <nav className={style.mainNav}>
                <hgroup>
                    <h1>INGN</h1>
                </hgroup>
                <ul>
                    {children}
                </ul>
                <div>
                    <FontAwesomeIcon icon={faUser} className={style.MyIcone}  />
                    <FontAwesomeIcon icon={faBars} className={style.MyIcone}  />
                </div>
            </nav>
        </>
    )
}