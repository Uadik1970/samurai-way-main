import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Messages/Message'

export const Dialogs: FC = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='111' id='1' />
                <DialogItem name='222' id='2' />
                <DialogItem name='333' id='3' />
            </div>
            <div className={s.messages}>
                <Message message='HI' />
                <Message message='HOW' />
                <Message message='are you' />
            </div>
        </div>
    )
}
