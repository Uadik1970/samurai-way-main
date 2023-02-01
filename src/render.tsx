
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootState, state } from './redux/state';


export const renderTree = (state: RootState) => {
    ReactDOM.render(
        <App state={state} />,
        // <App posts={posts} messages={messages} dialogs={dialogs} />,
        document.getElementById('root')
    );
}
