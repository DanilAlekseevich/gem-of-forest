import React from 'react';

import { Header } from './components/Header';
import { Main } from './Sections/Main';
import { Actions } from './Sections/Actions';
import { Houses } from './Sections/Houses';
import { About } from './Sections/About';
import { Review } from './Sections/Review';
import { Promo } from './Sections/Promo';
import { Gallery } from './Sections/Gallery';
import { Way } from './Sections/Way';
import { Rules } from './Sections/Rules';
import { Footer } from './components/Footer';
import './sass/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Actions />
      <Houses />
      <About />
      <Review />
      <Promo />
      <Gallery />
      <Way />
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
