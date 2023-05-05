
import { ActionsType, DialogsPageType } from "./store";


export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            let newMessage = {
                id: 4,
                message: action.newMessageBody,
                likeCount: 0
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.newMessageBody
            return state
        default:
            return state
    }
}

export const addNewMessageAC = (newMessageBody: string) => ({ type: "ADD-NEW-MESSAGE", newMessageBody }) as const
export const updateMessagebodyAC = (newMessageBody: string) => ({ type: "UPDATE-NEW-MESSAGE-BODY", newMessageBody }) as const
