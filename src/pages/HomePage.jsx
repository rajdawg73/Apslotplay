import { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage({ store }) {
  const { machines, casinos, favorites, toggleFavorite } = store;
  const [search, setSearch] = useState(
    () => sessionStorage.getItem('ap_search') || '',
  );
  const [selectedCasino, setSelectedCasino] = useState('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [expandedNotes, setExpandedNotes] = useState({});

  const handleSearchChange = useCallback((e) => {
    const val = e.target.value;
    setSearch(val);
    sessionStorage.setItem('ap_search', val);
  }, []);

  const casinoMap = useMemo(() => {
    const map = {};
    casinos.forEach((c) => (map[c.id] = c));
    return map;
  }, [casinos]);

  const favSet = useMemo(() => new Set(favorites), [favorites]);

  const filtered = useMemo(() => {
    let result = machines;

    if (showFavoritesOnly) {
      result = result.filter((m) => favSet.has(m.id));
    }

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

    result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [machines, search, selectedCasino, showFavoritesOnly, favSet]);

  const toggleNotes = useCallback((id) => {
    setExpandedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleToggleFavorite = useCallback(
    (e, id) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(id);
    },
    [toggleFavorite],
  );

  return (
    <>
      <div className="search-container">
        <span className="search-icon" aria-hidden="true">
          &#128269;
        </span>
        <input
          type="search"
          className="search-input"
          placeholder="Search machines..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filter-bar">
        <button
          className={`filter-chip ${!showFavoritesOnly ? 'active' : ''}`}
          onClick={() => setShowFavoritesOnly(false)}
        >
          All
        </button>
        <button
          className={`filter-chip filter-chip-fav ${showFavoritesOnly ? 'active' : ''}`}
          onClick={() => setShowFavoritesOnly(true)}
        >
          Favorites
        </button>

        {casinos.length > 0 && (
          <>
            <span className="filter-divider" />
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
                onClick={() => setSelectedCasino(c.id)}
              >
                {c.name}
              </button>
            ))}
          </>
        )}
      </div>

      <div className="result-count">
        Showing {filtered.length} of {machines.length} machines
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <h3>
            {search || selectedCasino !== 'all' || showFavoritesOnly
              ? 'No machines match your filters'
              : 'No machines yet'}
          </h3>
          <p>
            {showFavoritesOnly
              ? 'Tap the star on any machine to add it to your favorites.'
              : 'Try a different search term or filter.'}
          </p>
        </div>
      ) : (
        <div className="machine-grid">
          {filtered.map((machine) => {
            const isFav = favSet.has(machine.id);
            const strategy = machine.strategy || {};
            const conditions = strategy.playConditions || [];
            const hasNotes = Boolean(strategy.notes);
            const notesExpanded = expandedNotes[machine.id];

            return (
              <div key={machine.id} className="machine-card">
                <div className="machine-card-header">
                  <button
                    className={`fav-btn ${isFav ? 'fav-active' : ''}`}
                    onClick={(e) => handleToggleFavorite(e, machine.id)}
                    aria-label={
                      isFav ? 'Remove from favorites' : 'Add to favorites'
                    }
                  >
                    {isFav ? '\u2605' : '\u2606'}
                  </button>
                  <Link
                    to={`/machine/${machine.id}`}
                    className="machine-card-name"
                  >
                    {machine.name}
                  </Link>
                  {machine.manufacturer && (
                    <span className="machine-card-manufacturer">
                      {machine.manufacturer}
                    </span>
                  )}
                </div>

                {strategy.description && (
                  <p className="machine-card-description">
                    {strategy.description}
                  </p>
                )}

                {conditions.length > 0 && (
                  <div className="machine-card-conditions">
                    {conditions.map((cond, i) => (
                      <span key={i} className="condition-badge">
                        {cond.label} {cond.operator} {cond.value}
                        {cond.unit ? ` ${cond.unit}` : ''}
                      </span>
                    ))}
                  </div>
                )}

                {hasNotes && (
                  <div className="machine-card-notes-section">
                    <button
                      className="notes-toggle"
                      onClick={() => toggleNotes(machine.id)}
                    >
                      {notesExpanded ? '\u25BC' : '\u25B6'} Notes
                    </button>
                    {notesExpanded && (
                      <p className="machine-card-notes">{strategy.notes}</p>
                    )}
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
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
