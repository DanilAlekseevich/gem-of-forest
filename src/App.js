import React, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './Sections/Main';
import { Actions } from './Sections/Actions';
// import { Houses } from './Sections/Houses';
import { About } from './Sections/About';
// import { Review } from './Sections/Review';
// import { Promo } from './Sections/Promo';
import { Gallery } from './Sections/Gallery';
import { Way } from './Sections/Way';
import { Rules } from './Sections/Rules';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import './sass/app.scss';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  }

  const showModal = () => {
    setModalOpen(true);
  }

  return (
    <div className="App">
      <Modal open={modalOpen} close={closeModal} />
      <Header />
      <Main showModal={showModal} />
      <Actions />
      {/*<Houses />*/}
      <About />
      {/*<Review />*/}
      {/*<Promo />*/}
      <Gallery />
      <Way />
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
