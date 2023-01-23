import { DialogItemPropsType } from "./DialogItemType"
import { MessagePropsType } from "./MessageType"

export type DialogsPropsType = {
    messages: MessagePropsType[]
    dialogs: DialogItemPropsType[]
}