import React from 'react';
// import './App.css';
import Header from './Header';
import MainView from './MainView';
// import Nav from './Nav';
import Footer from './Footer';
import CharactersData from './CharactersData';
import Loading from './Loading';
import ErrorHandling from './ErrorHandling';

const App = () => {
  return (
    <div>
      <Header />
      <CharactersData>
        {({ characters, loading, errMsg }) => (
          <Loading loading={loading}>
            <ErrorHandling errMsg={errMsg}>
              {/* <Nav characters={characters} /> */}
              <MainView characters={characters} />
            </ErrorHandling>
          </Loading>
        )}
      </CharactersData>
      <Footer />
    </div>
  )
}

export default App;
