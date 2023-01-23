import React, { FC } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { PostsPropsType } from '../Profile'

export const MyPosts: FC<PostsPropsType> = ({ posts }) => {

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
