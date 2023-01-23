import React, { FC } from 'react'
import { PostPropsType } from '../../Types/Profile/PostPropsType'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export type PostsPropsType = {
    posts: PostPropsType[]
}


export const Profile: FC<PostsPropsType> = ({ posts }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    )
}
