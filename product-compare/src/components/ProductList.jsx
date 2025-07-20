function ProductList({ products, selected, onCompareChange }) {
  const handleToggle = (product) => {
    const isSelected = selected.find(p => p.id === product.id);
    if (isSelected) {
      onCompareChange(selected.filter(p => p.id !== product.id));
    } else if (selected.length < 3) {
      onCompareChange([...selected, product]);
    }
  };

  return (
    <div className="grid">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.brand}</p>
          <p>{product.price}</p>
          <ul>
            {product.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <label>
            <input
              type="checkbox"
              checked={!!selected.find(p => p.id === product.id)}
              onChange={() => handleToggle(product)}
            />
            Add to Compare
          </label>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
