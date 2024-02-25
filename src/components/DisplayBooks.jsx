import React, { useState } from 'react';
import './DisplayBooks.css';

function DisplayBooks() {
  const [filter, setFilter] = useState('');

  const handleInputChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  };

  const filterTable = () => {
    const rows = [
      { name: 'Alfreds Futterkiste', country: 'Germany' },
      { name: 'Berglunds snabbkop', country: 'Sweden' },
      { name: 'Island Trading', country: 'UK' },
      { name: 'Koniglich Essen', country: 'Germany' },
      { name: 'Laughing Bacchus Winecellars', country: 'Canada' },
      { name: 'Magazzini Alimentari Riuniti', country: 'Italy' },
      { name: 'North/South', country: 'UK' },
      { name: 'Paris specialites', country: 'France' },
    ];

    return rows.map((row, index) => (
      <tr key={index} style={{ display: row.name.toUpperCase().includes(filter) ? '' : 'none' }}>
        <td>{row.name}</td>
        <td>{row.country}</td>
      </tr>
    ));
  };

  return (
    <>
    <div className='bookdisplay'>
      <input
        type="text"
        className="myInput"
        onChange={handleInputChange}
        placeholder="Search for names.."
        title="Type in a name"
      />
      <table className="myTable">
        <thead>
          <tr className="header">
            <th style={{ width: '60%' }}>Name</th>
            <th style={{ width: '40%' }}>Country</th>
          </tr>
        </thead>
        <tbody>{filterTable()}</tbody>
      </table>
    </div>
    </>
  );
}

export default DisplayBooks;
