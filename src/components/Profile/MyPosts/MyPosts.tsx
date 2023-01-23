import React, { FC } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'

export const MyPosts: FC = () => {
    return (<div>
        <div>My posts</div>
        <div>
            <div>
                <textarea name="" id=""></textarea>
            </div>
            <div>
                <button>add post</button></div>
        </div>
        <div className={s.posts}>
            <Post message='Hi how are you' likeCount={1} />
            <Post message='My first post' likeCount={10} />
        </div>
    </div>
    )
}
