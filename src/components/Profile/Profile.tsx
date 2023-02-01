import React, { FC } from 'react'
import { ProfilePageType } from '../../redux/state'
import { PostPropsType } from '../../Types/Profile/PostPropsType'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (arg: string) => void
}


export const Profile: FC<PostsPropsType> = ({ profilePage, addPost, updateNewPostText }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} addPostCallback={addPost} updateNewPostText={updateNewPostText} newPostText={profilePage.newPostText} />
        </div>
    )
}
