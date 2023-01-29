import React from 'react'
import './styles/App.css'
class PageHeader extends React.Component{
    render(){
        return (
        <header className='cell-header'>
          <div id='txt-and-logo'>
            <div className='cell-logo'></div>
            <h1>BINGO DO MEDO</h1>
          </div>
        </header>
        );
    }
}

export default PageHeader;