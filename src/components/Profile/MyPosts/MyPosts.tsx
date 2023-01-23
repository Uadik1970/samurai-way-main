import React, { FC } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'

export const MyPosts: FC = () => {

    const posts = [
        { id: 1, message: 'Hi how are you', likeCount: 1 },
        { id: 2, message: 'Hi how are you', likeCount: 2 },
        { id: 3, message: 'Hi how are you', likeCount: 3 }
    ]
    const postsElements = posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} />)

    return (
        <div>
            <div>My posts</div>
            <div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <button>add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
