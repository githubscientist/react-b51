import React, { useState } from 'react';
import '../styles/Keyboard.css';
import '../styles/LetterGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function Keyboard() {

  const [squares, setSquares] = useState(Array(28).fill(''));

    return (
        <div className='keyboardGrid'>
            <div className='row'>
                <button className='rectangle'>{ <strong>Q</strong> }</button>
                <button className='rectangle'>{ <strong>W</strong> }</button>
                <button className='rectangle'>{ <strong>E</strong> }</button>
                <button className='rectangle'>{ <strong>R</strong> }</button>
                <button className='rectangle'>{<strong>T</strong>}</button>
                <button className='rectangle'>{<strong>Y</strong> }</button>
                <button className='rectangle'>{ <strong>U</strong> }</button>
                <button className='rectangle'>{ <strong>I</strong> }</button>
                <button className='rectangle'>{ <strong>O</strong> }</button>
                <button className='rectangle'>{ <strong>P</strong> }</button>
            </div>

            <div className='row'>
                <button className='rectangle'>{ <strong>A</strong> }</button>
                <button className='rectangle'>{ <strong>S</strong> }</button>
                <button className='rectangle'>{ <strong>D</strong> }</button>
                <button className='rectangle'>{ <strong>F</strong> }</button>
                <button className='rectangle'>{ <strong>G</strong> }</button>
                <button className='rectangle'>{ <strong>H</strong> }</button>
                <button className='rectangle'>{ <strong>J</strong> }</button>
                <button className='rectangle'>{ <strong>K</strong> }</button>
                <button className='rectangle'>{ <strong>L</strong> }</button>
            </div>

            <div className='row'>
                <button className='square'>{ <strong>ENTER</strong> }</button>
                <button className='rectangle'>{ <strong>Z</strong> }</button>
                <button className='rectangle'>{ <strong>X</strong> }</button>
                <button className='rectangle'>{ <strong>C</strong> }</button>
                <button className='rectangle'>{ <strong>V</strong> }</button>
                <button className='rectangle'>{ <strong>B</strong> }</button>
                <button className='rectangle'>{ <strong>N</strong> }</button>
                <button className='rectangle'>{ <strong>M</strong> }</button>
                <button className='square'><FontAwesomeIcon icon={faDeleteLeft} size='xl'/></button>
            </div>
      </div>
  )
}

export default Keyboard;