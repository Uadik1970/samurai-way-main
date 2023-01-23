import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Messages/Message'

export const Dialogs: FC = () => {

    const dialogData = [
        { id: 1, name: '111' },
        { id: 2, name: '222' },
        { id: 3, name: '333' }
    ]
    const messageData = [
        { id: 1, message: '444' },
        { id: 1, message: '555' },
        { id: 1, message: '666' },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogData.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>
            <div className={s.messages}>
                {messageData.map(m => <Message id={m.id} message={m.message} />)}
            </div>
        </div>
    )
}
