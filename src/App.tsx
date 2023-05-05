import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { ActionsType, RootStateType, TsarRootState } from './redux/store';
// import { StatePropsType } from './Types/StatePropsType';

type AppPropsType = {
  store: TsarRootState
  dispatch: (action: ActionsType) => void

}

const App: FC<AppPropsType> = ({ store, dispatch }) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path={'/dialogs'} render={() =>
            <Dialogs dialogsPage={store.state.dialogsPage}
              dispatch={dispatch.bind(store)} />} exact
          />
          <Route path={'/profile'} render={() =>
            <Profile profilePage={store.state.profilePage}
              dispatch={dispatch.bind(store)} />} exact
          />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
