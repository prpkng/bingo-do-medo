import React, { useState } from 'react';
import './Card.css'

function createGrid(gridSize: number): Array<React.ReactNode> {
    let grid: Array<React.ReactNode> = [];

    for (let i: number = 0; i < Math.pow(gridSize, 2); i++) {
        grid.push(<div className='block' key={i.toString()}></div>);
    }
    return grid;
}



function OptionsCard() {

    const [selected, setSelected] = useState('s1');

    const handleOnChange = (data: React.ChangeEvent<HTMLInputElement>) => {
        console.log(data.target.id);        
        setSelected(data.target.id);
    }

    return (
        <div className='card'>
            <div className="grid-size">
                <div className="top-part">
                    <h2 id='txt'>Tamanho da Tabela:</h2>
                    <div className="editbtn"></div>
                    <div className="sizes">
                        <input type="radio" name="sizes" id="s1" checked={selected === 's1'} onChange={handleOnChange}/>
                        <label htmlFor="s1" className='s1 size' id='size-label'> 3x3
                            <div className="blocks">
                                {createGrid(3)}
                            </div>
                        </label>
                        <input type="radio" name="sizes" id="s2" checked={selected === 's2'} onChange={handleOnChange}/>
                        <label htmlFor="s2" className='s2 size' id='size-label'> 4x4
                            <div className="blocks">
                                {createGrid(4)}
                            </div>
                        </label>
                        <input type="radio" name="sizes" id="s3" checked={selected === 's3'} onChange={handleOnChange}/>
                        <label htmlFor="s3" className='s3 size' id='size-label'> 5x5
                            <div className="blocks">
                                {createGrid(5)}
                            </div>
                        </label>
                    </div>
                </div>
                <h2 className="qnt-bingos">Quantidade de Bingos: {0}</h2>
                <h2 className="ext">Extensões:
                    <div className="onda"></div>
                </h2>
            </div>
        </div>
    );

}
export default OptionsCard;