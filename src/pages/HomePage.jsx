import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage({ store }) {
  const { machines, casinos } = store;
  const [search, setSearch] = useState('');
  const [selectedCasino, setSelectedCasino] = useState('all');

  const casinoMap = useMemo(() => {
    const map = {};
    casinos.forEach((c) => (map[c.id] = c));
    return map;
  }, [casinos]);

  const filtered = useMemo(() => {
    let result = machines;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          (m.manufacturer && m.manufacturer.toLowerCase().includes(q)),
      );
    }

    if (selectedCasino !== 'all') {
      result = result.filter(
        (m) => m.casinoIds && m.casinoIds.includes(selectedCasino),
      );
    }

    return result;
  }, [machines, search, selectedCasino]);

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Machines</h1>
        <Link to="/machine/new" className="btn btn-primary">
          + Add Machine
        </Link>
      </div>

      <div className="search-container">
        <span className="search-icon">&#128269;</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search machines by name or manufacturer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {casinos.length > 0 && (
        <div className="filter-bar">
          <span className="filter-label">Casino:</span>
          <button
            className={`filter-chip ${selectedCasino === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCasino('all')}
          >
            All
          </button>
          {casinos.map((c) => (
            <button
              key={c.id}
              className={`filter-chip ${selectedCasino === c.id ? 'active' : ''}`}
              onClick={() =>
                setSelectedCasino(selectedCasino === c.id ? 'all' : c.id)
              }
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="empty-state">
          <h3>
            {search || selectedCasino !== 'all'
              ? 'No machines match your search'
              : 'No machines yet'}
          </h3>
          <p>
            {search || selectedCasino !== 'all'
              ? 'Try a different search term or casino filter.'
              : 'Add your first slot machine to get started.'}
          </p>
          {!search && selectedCasino === 'all' && (
            <Link to="/machine/new" className="btn btn-primary">
              + Add Machine
            </Link>
          )}
        </div>
      ) : (
        <div className="machine-grid">
          {filtered.map((machine) => (
            <Link
              key={machine.id}
              to={`/machine/${machine.id}`}
              className="machine-card"
            >
              <div className="machine-card-header">
                <span className="machine-card-name">{machine.name}</span>
                {machine.manufacturer && (
                  <span className="machine-card-manufacturer">
                    {machine.manufacturer}
                  </span>
                )}
              </div>

              {machine.strategy?.playConditions?.length > 0 && (
                <div className="machine-card-conditions">
                  {machine.strategy.playConditions.map((cond, i) => (
                    <span key={i} className="condition-badge">
                      {cond.label}: {cond.operator} {cond.value}
                      {cond.unit ? ` ${cond.unit}` : ''}
                    </span>
                  ))}
                </div>
              )}

              {machine.casinoIds?.length > 0 && (
                <div className="casino-tags">
                  {machine.casinoIds
                    .map((cid) => casinoMap[cid])
                    .filter(Boolean)
                    .map((c) => (
                      <span key={c.id} className="casino-tag">
                        {c.name}
                      </span>
                    ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
