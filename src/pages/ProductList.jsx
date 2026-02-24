import React, { useState, useMemo, useCallback } from 'react';
import { Virtuoso } from 'react-virtuoso'; // NEW: Modern virtualization library
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
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Virtualized Product List ({filteredProducts.length} items)</h2>
      
      <SearchBox onSearch={handleSearch} />

      <div style={{ border: '1px solid #ccc', height: '600px' }}>
        {/* Virtuoso handles the list automatically */}
        <Virtuoso
          style={{ height: '100%' }}
          totalCount={filteredProducts.length}
          itemContent={(index) => (
            <ExpensiveItem 
              data={filteredProducts[index]} 
              style={{ height: '50px', width: '100%' }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ProductList;