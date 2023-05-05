import React, { FC } from 'react'
import { ActionsType, ProfilePageType } from '../../redux/store'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export type PostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}


export const Profile: FC<PostsPropsType> = ({ profilePage, dispatch }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={profilePage.posts}
                dispatch={dispatch}
                newPostText={profilePage.newPostText}
            />
        </div>
    )
}
