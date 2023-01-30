import React, { FC } from 'react'
import { PostPropsType } from '../../Types/Profile/PostPropsType'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export type PostsPropsType = {
    posts: PostPropsType[]
    addPost: (postMessage: string) => void
}


export const Profile: FC<PostsPropsType> = ({ posts, addPost }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost} />
        </div>
    )
}
