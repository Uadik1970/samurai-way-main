import React, { FC } from 'react'
import { MessagePropsType } from '../../../Types/Dialogs/Message'
import s from './Message.module.css'

export const Message: FC<MessagePropsType> = ({ message }) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}
