import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { addPost, TsarRootState, updateNewPostText } from './redux/state';
// import { StatePropsType } from './Types/StatePropsType';


const App: FC<TsarRootState> = ({ state }) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path={'/dialogs'} render={() => <Dialogs messages={state.dialogsPage.messages} dialogs={state.dialogsPage.dialogs} />} exact />
          <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />} exact />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
