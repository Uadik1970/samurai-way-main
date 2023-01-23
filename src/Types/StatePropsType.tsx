import { AppPropsType } from "./AppPropsType"
import { PostPropsType } from "./Profile/PostPropsType"
import { MessagePropsType } from "./Dialogs/MessageType"
import { DialogItemPropsType } from "./Dialogs/DialogItemType"

export type StatePropsType = {
    state: State11111PropsType
}

export type State11111PropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


type ProfilePageType = {
    posts: PostPropsType[]
}

type DialogsPageType = {
    messages: MessagePropsType[]
    dialogs: DialogItemPropsType[]
}