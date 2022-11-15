import React from 'react';

import { Header } from './components/Header';
import { Main } from './Sections/Main';
import { Actions } from './Sections/Actions';
import { Houses } from './Sections/Houses';
import { About } from './Sections/About';
import { Review } from './Sections/Review';
import { Promo } from './Sections/Promo';
import './sass/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Actions />
      {/* <Houses />  */}
      <About />
      {/* <Review /> */}
      <Promo />
    </div>
  );
}

export default App;
