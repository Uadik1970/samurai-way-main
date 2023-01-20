import React from 'react'
import { Post } from './Post/Post'

export const MyPosts = () => {
    return (<div>
        <div>My posts</div>
        <div>
            <textarea name="" id=""></textarea>
            <button>add post</button>
        </div>
        <div className='posts'>
            <Post message='Hi how are you' likeCount={1} />
            <Post message='My first post' likeCount={10} />
        </div>
    </div>
    )
}
