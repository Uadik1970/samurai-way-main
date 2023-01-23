import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { DialogItemPropsType } from '../../../Types/Dialogs/DialogItem'
import s from './DialogItem.module.css'


export const DialogItem: FC<DialogItemPropsType> = ({ id, name }) => {
    return (<div className={s.dialog}>
        <NavLink to={`/dialog/${id}`} >{name}</NavLink>
    </div>)
}
