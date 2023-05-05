import React, { FC } from 'react'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Messages/Message'
import { ActionsType, DialogsPageType } from '../../redux/store'
import { addNewMessageAC, updateMessagebodyAC } from '../../redux/dialogs-reducer'

type DialogsPropType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}
export const Dialogs: FC<DialogsPropType> = ({ dialogsPage, dispatch }) => {

    const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
    const messagesElements = dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message} />)

    const handleSendMessageClick = () => {
        dispatch(addNewMessageAC(dialogsPage.newMessageBody))
    }
    const onChangeMessageBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = e.currentTarget.value
        dispatch(updateMessagebodyAC(newMessageBody))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={dialogsPage.newMessageBody}
                            onChange={onChangeMessageBody}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={handleSendMessageClick}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
