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
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
    )
}