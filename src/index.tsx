import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const posts = [
  { id: 1, message: 'Hi how are you', likeCount: 1 },
  { id: 2, message: 'Hi how are you', likeCount: 2 },
  { id: 3, message: 'Hi how are you', likeCount: 3 }
]
const dialogs = [
  { id: 1, name: '111' },
  { id: 2, name: '222' },
  { id: 3, name: '333' }
]
const messages = [
  { id: 1, message: '444' },
  { id: 1, message: '555' },
  { id: 1, message: '666' },
]

ReactDOM.render(
  <App posts={posts} messages={messages} dialogs={dialogs} />,
  document.getElementById('root')
);