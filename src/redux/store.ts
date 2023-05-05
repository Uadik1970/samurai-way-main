import { addNewMessageAC, dialogsReducer, updateMessagebodyAC } from "./dialogs-reducer";
import { addPostAC, profileReducer, updateNewPostTextAC } from "./profile-reducer";

export const store: TsarRootState = {
    state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you', likeCount: 1 },
                { id: 2, message: 'Hi how are you', likeCount: 2 },
                { id: 3, message: 'Hi how are you', likeCount: 3 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: '111' },
                { id: 2, name: '222' },
                { id: 3, name: '333' }
            ],
            messages: [
                { id: 1, message: '444' },
                { id: 2, message: '555' },
                { id: 3, message: '666' },
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this.state
    },
    subscribe(observer: () => any) {
        this.callSubscriber = observer
    },
    callSubscriber(state: RootStateType) {
        console.log("statae");
    },
    // addPost(newPostText: string) {
    //     let newPost: PostType = {
    //         id: 6,
    //         message: newPostText,
    //         likeCount: 0
    //     }
    //     this.state.profilePage.posts.push(newPost)
    //     this.state.profilePage.newPostText = ''
    //     this.callSubscriber(this.state)
    // },
    // updateNewPostText(newText: string) {
    //     this.state.profilePage.newPostText = newText
    //     this.callSubscriber(this.state)
    // },
    // addNewMessage(newMessageBody) {
    //     let newMessage: PostType = {
    //         id: 4,
    //         message: newMessageBody,
    //         likeCount: 0
    //     }
    //     this.state.dialogsPage.messages.push(newMessage)
    //     this.state.dialogsPage.newMessageBody = ''
    //     this.callSubscriber(this.state)
    // },
    // updateMessagebody(newMessageBody: string) {
    //     this.state.dialogsPage.newMessageBody = newMessageBody
    //     this.callSubscriber(this.state)
    // },

    dispatch(action: ActionsType) {
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.callSubscriber(this.state)
    }
}




export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof updateMessagebodyAC>

export type TsarRootState = {
    state: RootStateType
    subscribe: (observer: () => void) => void
    callSubscriber: (state: RootStateType) => void
    dispatch: (action: any) => void
    getState: () => RootStateType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    // addNewMessage: (newMessageBody: string) => void
    // updateMessagebody: (newMessageBody: string) => void
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}

