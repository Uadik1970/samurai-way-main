import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { AppPropsType } from './Types/AppPropsType';


const App: FC<AppPropsType> = ({ posts, messages, dialogs }) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path={'/dialogs'} render={() => <Dialogs messages={messages} dialogs={dialogs} />} exact />
          <Route path={'/profile'} render={() => <Profile posts={posts} />} exact />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
