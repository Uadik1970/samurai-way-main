import React from 'react'
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div >
                <a href='/profile' className={s.item}>Profile</a>
            </div>
            <div>
                <a href='/dialogs' className={s.item}>Messages</a>

            </div>
            <div>
                <a className={s.item}>Music</a>
            </div>
            <div>
                <a className={s.item}>Settings</a>
            </div>
        </nav>
    )
}

