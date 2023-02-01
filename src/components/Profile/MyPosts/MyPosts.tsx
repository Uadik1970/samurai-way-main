import React, { FC, LegacyRef } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { PostsPropsType } from '../Profile'
import { ProfilePageType, updateNewPostText } from '../../../redux/state'
import { PostPropsType } from '../../../Types/Profile/PostPropsType'

type MyPostsPropsType = {
    posts: PostPropsType[]
    addPostCallback: (postMessage: string) => void
    updateNewPostText: (arg: string) => void
    newPostText: string
}

export const MyPosts: FC<MyPostsPropsType> = ({ posts, addPostCallback, newPostText }) => {

    const postsElements = posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount} />)

    let addPostttttt = () => {
        addPostCallback(newPostText)
    }

    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // addPost(text ? text : '')
        updateNewPostText(e.currentTarget.value)
    }
    return (
        <div>
            <div>My posts</div>
            <div>
                <div>
                    <textarea value={newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addPostttttt}>add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
