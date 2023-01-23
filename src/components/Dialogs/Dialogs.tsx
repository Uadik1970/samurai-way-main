import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Messages/Message'

export const Dialogs: FC = () => {

    const dialogs = [
        { id: 1, name: '111' },
        { id: 2, name: '222' },
        { id: 3, name: '333' }
    ]
    const messages = [
        { id: 1, message: '444' },
        { id: 1, message: '555' },
        { id: 1, message: '666' },
    ]

    const dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    const messagesElements = messages.map(m => <Message id={m.id} message={m.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
