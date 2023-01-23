import React, { FC } from 'react'
import { DialogsPropsType } from '../../Types/Dialogs/DialogsPropsType'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Messages/Message'

export const Dialogs: FC<DialogsPropsType> = ({ messages, dialogs }) => {

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
