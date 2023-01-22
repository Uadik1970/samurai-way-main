import React, { FC } from 'react'
import s from "./Header.module.css"



export const Header: FC = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
        </header>
    )
}
