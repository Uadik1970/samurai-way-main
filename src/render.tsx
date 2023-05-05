import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/store';


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            store={store}
            dispatch={store.dispatch}
        />,
        document.getElementById('root')
    );
}
