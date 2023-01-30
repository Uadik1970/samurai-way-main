import React, { FC, LegacyRef } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { PostsPropsType } from '../Profile'

export const MyPosts: FC<PostsPropsType> = ({ posts }) => {

    const postsElements = posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div>
            <div>My posts</div>
            <div>
                <div>
                    <textarea ref={newPostElement} name="" id=""></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
