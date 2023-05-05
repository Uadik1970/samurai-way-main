import { ActionsType, ProfilePageType } from "./store";


export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 6,
                message: action.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}


export const addPostAC = (newPostText: string) => ({ type: "ADD-POST", newPostText }) as const
export const updateNewPostTextAC = (newPostText: string) => ({ type: "UPDATE-NEW-POST-TEXT", newPostText }) as const