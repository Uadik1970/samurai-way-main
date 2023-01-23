import { DialogItemPropsType } from "./Dialogs/DialogItemType"
import { MessagePropsType } from "./Dialogs/MessageType"
import { PostPropsType } from "./Profile/PostPropsType"

export type AppPropsType = {
    posts: PostPropsType[]
    messages: MessagePropsType[]
    dialogs: DialogItemPropsType[]
}