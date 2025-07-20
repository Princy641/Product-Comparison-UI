import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import CompareView from './components/CompareView';
import { products } from './components/data/products';
import './App.css'

function App() {
  const [selected, setSelected] = useState(() => {
    const stored = localStorage.getItem("compareItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(selected));
  }, [selected]);

  const clearAll = () => setSelected([]);
  const removeItem = (id) => setSelected(selected.filter(p => p.id !== id));

  return (
    <div className="container">
      <h1>Compare Products</h1>
      <ProductList
        products={products}
        selected={selected}
        onCompareChange={setSelected}
      />
      {selected.length >= 2 && (
        <CompareView
          selected={selected}
          onClear={clearAll}
          onRemove={removeItem}
        />
      )}
    </div>
  );
}

export default App;
