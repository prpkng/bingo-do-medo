import React from 'react';
import OptionsCard from "./OptionsCard"
import PageHeader from "./Header"
import './styles/App.css';
import Bingo from './BingoElement';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <div className='page'>
          <div className='page-blur'></div>

          <PageHeader />
          <div className="page-content">
            <OptionsCard />
            <Bingo />
          </div>

        </div>
      </div>
    )
  }
}

export default App;
