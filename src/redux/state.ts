
export const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi how are you', likeCount: 1 },
            { id: 2, message: 'Hi how are you', likeCount: 2 },
            { id: 3, message: 'Hi how are you', likeCount: 3 },
        ],
    },
    // messagePage: {
    //     dialogs: [
    //         { id: 1, name: '111' },
    //         { id: 2, name: '222' },
    //         { id: 3, name: '333' }
    //     ],
    //     messages: [
    //         { id: 1, message: '444' },
    //         { id: 1, message: '555' },
    //         { id: 1, message: '666' },
    //     ]
    // }
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
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
} 