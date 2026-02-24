import React, { useState, useMemo, useCallback } from 'react';
import { FixedSizeList } from 'react-window';
import SearchBox from '../components/SearchBox';
import ExpensiveItem from '../components/ExpensiveItem';
import { generateProducts } from '../utils';

// Generate 2000 items once outside the component
const allProducts = generateProducts(2000);

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // useCallback to prevent function recreation
  const handleSearch = useCallback((query) => {
    setSearchTerm(query);
  }, []);

  // useMemo to cache filtered results
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Row component for react-window
  const Row = ({ index, style }) => (
    <ExpensiveItem 
      data={filteredProducts[index]} 
      style={style} 
    />
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Virtualized Product List ({filteredProducts.length} items)</h2>
      
      <SearchBox onSearch={handleSearch} />

      <div style={{ border: '1px solid #ccc' }}>
        {/* The fixed size list renders only what is visible on screen */}
        <FixedSizeList
          height={600}
          width="100%"
          itemCount={filteredProducts.length}
          itemSize={50}
        >
          {Row}
        </FixedSizeList>
      </div>
    </div>
  );
};

export default ProductList;