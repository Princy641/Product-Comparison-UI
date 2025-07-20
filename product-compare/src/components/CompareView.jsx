function CompareView({ selected, onClear, onRemove }) {
  const getDiff = (key) => {
    const values = selected.map(p => JSON.stringify(p[key]));
    return new Set(values).size > 1;
  };

  return (
    <div className="compare-box">
      <button onClick={onClear}>Clear All</button>
      <div className="compare-grid">
        {selected.map(p => (
          <div className="compare-card" key={p.id}>
            <button onClick={() => onRemove(p.id)}>X</button>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p className={getDiff('brand') ? 'diff' : ''}>{p.brand}</p>
            <p className={getDiff('price') ? 'diff' : ''}>{p.price}</p>
            <p className={getDiff('features') ? 'diff' : ''}>{p.features.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompareView;
