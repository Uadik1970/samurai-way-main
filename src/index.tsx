import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateType, TsarRootState, store } from './redux/store';
import { rerenderEntireTree } from './render';





// // subscribe(rerenderEntireTree)
// rerenderEntireTree(store.getState())
// store.subscribe(rerenderEntireTree)
store.subscribe(rerenderEntireTree)
rerenderEntireTree()
