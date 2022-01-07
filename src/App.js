import { Routes, Route } from 'react-router-dom';

import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import About from './components/pages/About';
import AboutIconLink from './components/AboutIconLink';
import FeedbackProvider from './context/FeedbackContext';

const App = () => {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </FeedbackProvider>
    </>
  );
};

export default App;
