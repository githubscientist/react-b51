import React, { useState } from 'react';
import '../styles/LetterGrid.css';

function LetterGrid() {

    const [squares, setSquares] = useState(Array(30).fill(''));

    return (
        <div className='letterGrid'>
            <div className='row'>
                <button className='square'>{ squares[0] }</button>
                <button className='square'>{ squares[1] }</button>
                <button className='square'>{ squares[2] }</button>
                <button className='square'>{ squares[3] }</button>
                <button className='square'>{ squares[4] }</button>
            </div>

            <div className='row'>
                <button className='square'>{ squares[5] }</button>
                <button className='square'>{ squares[6] }</button>
                <button className='square'>{ squares[7] }</button>
                <button className='square'>{ squares[8] }</button>
                <button className='square'>{ squares[9] }</button>
            </div>

            <div className='row'>
                <button className='square'>{ squares[10] }</button>
                <button className='square'>{ squares[11] }</button>
                <button className='square'>{ squares[12] }</button>
                <button className='square'>{ squares[13] }</button>
                <button className='square'>{ squares[14] }</button>
            </div>

            <div className='row'>
                <button className='square'>{ squares[15] }</button>
                <button className='square'>{ squares[16] }</button>
                <button className='square'>{ squares[17] }</button>
                <button className='square'>{ squares[18] }</button>
                <button className='square'>{ squares[19] }</button>
            </div>

            <div className='row'>
                <button className='square'>{ squares[20] }</button>
                <button className='square'>{ squares[21] }</button>
                <button className='square'>{ squares[22] }</button>
                <button className='square'>{ squares[23] }</button>
                <button className='square'>{ squares[24] }</button>
            </div>

            <div className='row'>
                <button className='square'>{ squares[25] }</button>
                <button className='square'>{ squares[26] }</button>
                <button className='square'>{ squares[27] }</button>
                <button className='square'>{ squares[28] }</button>
                <button className='square'>{ squares[29] }</button>
            </div>
      </div>
  )
}

export default LetterGrid;