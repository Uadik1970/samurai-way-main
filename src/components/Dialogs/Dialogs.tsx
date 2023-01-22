import React, { FC } from 'react'
import s from './Dialogs.module.css'

export const Dialogs: FC = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Vlad</div>
                <div className={s.dialog}>Lena</div>
                <div className={s.dialog}>Max</div>
                <div className={s.dialog}>Oleg</div>
                <div className={s.dialog}>Viktor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>yo</div>
                <div className={s.message}>hello</div>
                <div className={s.message}>world</div>
                <div className={s.message}>!!!</div>
            </div>
        </div>
    )
}
