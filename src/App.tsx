import React from 'react';
import OptionsCard from "./OptionsCard"
import PageHeader from "./Header"
import './App.css';


class App extends React.Component{
  render(): React.ReactNode {
    return (
      <div className="App">
        <div className='page'>
          <div className='page-blur'></div>
          
          <PageHeader />
          <OptionsCard />
  
        </div>
      </div>
    )
  }
}

export default App;
