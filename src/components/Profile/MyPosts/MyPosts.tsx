import React, { FC } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { ActionsType, } from '../../../redux/store'
import { PostPropsType } from '../../../Types/Profile/PostPropsType'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'

type MyPostsPropsType = {
    posts: PostPropsType[]
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPosts: FC<MyPostsPropsType> = ({ posts, newPostText, dispatch }) => {

    const postsElements = posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount} />)

    const handleAddPostClick = () => {
        dispatch(addPostAC(newPostText))
    }

    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value
        dispatch(updateNewPostTextAC(newPostText))
    }

    return (
        <div>
            <div>My posts</div>
            <div>
                <div>
                    <textarea
                        value={newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={handleAddPostClick}>add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
