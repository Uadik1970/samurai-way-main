import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

export const Dialogs: FC = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/111' >111</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/222' >222</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/333' >333</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/444' >444</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/555' >555</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>yo</div>
                <div className={s.message}>hello</div>
                <div className={s.message}>world</div>
                <div className={s.message}>!!!</div>
            </div>
        </div>
    )
}
