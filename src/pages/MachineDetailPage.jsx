import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { showToast } from '../utils/toast';

export default function MachineDetailPage({ store }) {
  const { id } = useParams();
  const { machines, casinos, favorites, toggleFavorite, updateMachine } = store;

  const machine = useMemo(
    () => machines.find((m) => m.id === id),
    [machines, id],
  );

  const favSet = useMemo(() => new Set(favorites), [favorites]);

  if (!machine) {
    return (
      <div className="empty-state">
        <h3>Machine not found</h3>
        <p>This machine may have been removed.</p>
        <Link to="/" className="btn btn-primary">
          Back to Machines
        </Link>
      </div>
    );
  }

  const isFav = favSet.has(machine.id);
  const strategy = machine.strategy || {};
  const conditions = strategy.playConditions || [];
  const machineCasinoIds = machine.casinoIds || [];

  const handleToggleCasino = (casinoId) => {
    const current = machine.casinoIds || [];
    const updated = current.includes(casinoId)
      ? current.filter((cid) => cid !== casinoId)
      : [...current, casinoId];
    updateMachine(machine.id, { casinoIds: updated });
    showToast('Casino updated');
  };

  return (
    <>
      <Link to="/" className="detail-back">
        &larr; Back to Machines
      </Link>

      <div className="detail-header">
        <div className="detail-title-row">
          <button
            className={`fav-btn fav-btn-lg ${isFav ? 'fav-active' : ''}`}
            onClick={() => toggleFavorite(machine.id)}
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFav ? '\u2605' : '\u2606'}
          </button>
          <h1 className="detail-title">{machine.name}</h1>
        </div>
        {machine.manufacturer && (
          <p className="detail-manufacturer">by {machine.manufacturer}</p>
        )}
      </div>

      {strategy.description && (
        <div className="detail-section">
          <h2 className="detail-section-title">Strategy</h2>
          <p className="detail-description">{strategy.description}</p>
        </div>
      )}

      {conditions.length > 0 && (
        <div className="detail-section">
          <h2 className="detail-section-title">Play Conditions</h2>
          <div className="conditions-list">
            {conditions.map((cond, i) => (
              <div key={i} className="condition-row">
                <span className="condition-label">{cond.label}</span>
                <span className="condition-value">
                  {cond.operator} {cond.value}
                  {cond.unit ? ` ${cond.unit}` : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {strategy.notes && (
        <div className="detail-section">
          <h2 className="detail-section-title">Notes</h2>
          <p className="detail-notes">{strategy.notes}</p>
        </div>
      )}

      {casinos.length > 0 && (
        <div className="detail-section">
          <h2 className="detail-section-title">Found At</h2>
          <p className="detail-section-hint">
            Tap a casino to toggle it for this machine.
          </p>
          <div className="casino-toggle-list">
            {casinos.map((c) => (
              <button
                key={c.id}
                className={`casino-toggle-chip ${machineCasinoIds.includes(c.id) ? 'active' : ''}`}
                onClick={() => handleToggleCasino(c.id)}
              >
                {machineCasinoIds.includes(c.id) ? '\u2713 ' : ''}
                {c.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
