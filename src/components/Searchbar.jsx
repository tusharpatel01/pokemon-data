import React from 'react';

const Searchbar = ({ searchQuery, onSearch }) => {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search Pokemon"
        style={{
          width: '300px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ddd',
        }}
      />
    </div>
  );
};

export default Searchbar;
