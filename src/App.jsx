import React, { useRef } from 'react';
import './styles/App.css';

function App() {

  const rows = useRef();

  const changeRowColor = () => {
    // select the elements
    // console.log(rows.current.querySelectorAll('tbody tr'));
    const rowsRef = rows.current.querySelectorAll('tbody tr');
    rowsRef.forEach((row, index) => {
      if (index % 2 == 0) {
        row.style.backgroundColor = 'lightgrey';
      }
    })
  }

  return (
    <div>
      <table ref={rows} className='styledTable'>
        <thead>
          <tr>
            <th>SNO</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Sathish</td>
            <td>30</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Krish</td>
            <td>25</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Krish</td>
            <td>25</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Krish</td>
            <td>25</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Krish</td>
            <td>25</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Krish</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>

      <button onClick={changeRowColor}>Change Row Color</button>
    </div>
  )
}

export default App;