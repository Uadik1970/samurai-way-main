import { renderTree } from "../render"

export type TsarRootState = {
    state: RootState
}
export type RootState = {
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
type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const state: RootState = {
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
            { id: 1, message: '555' },
            { id: 1, message: '666' },
        ]
    }


}
export const addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 6,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)

}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree(state)
} 