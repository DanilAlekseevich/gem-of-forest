import React from 'react';

import { Header } from './components/Header';
import { Main } from './Sections/Main';
import { Actions } from './Sections/Actions';
// import { Actions } from './components/Sections/Actions';
// import { Houses } from './components/Sections/Houses';
import './sass/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Actions />
      {/* <Houses /> */}
    </div>
  );
}

export default App;
