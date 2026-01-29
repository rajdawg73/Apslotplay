import { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function MachineDetailPage({ store }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { machines, casinos, deleteMachine } = store;

  const machine = useMemo(
    () => machines.find((m) => m.id === id),
    [machines, id],
  );

  const casinoMap = useMemo(() => {
    const map = {};
    casinos.forEach((c) => (map[c.id] = c));
    return map;
  }, [casinos]);

  if (!machine) {
    return (
      <div className="empty-state">
        <h3>Machine not found</h3>
        <p>This machine may have been deleted.</p>
        <Link to="/" className="btn btn-primary">
          Back to Machines
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm(`Delete "${machine.name}"? This cannot be undone.`)) {
      deleteMachine(machine.id);
      navigate('/');
    }
  };

  const strategy = machine.strategy || {};
  const conditions = strategy.playConditions || [];
  const machineCasinos = (machine.casinoIds || [])
    .map((cid) => casinoMap[cid])
    .filter(Boolean);

  return (
    <>
      <Link to="/" className="detail-back">
        &larr; Back to Machines
      </Link>

      <div className="detail-header">
        <h1 className="detail-title">{machine.name}</h1>
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

      {machineCasinos.length > 0 && (
        <div className="detail-section">
          <h2 className="detail-section-title">Found At</h2>
          <div className="casino-tags">
            {machineCasinos.map((c) => (
              <span key={c.id} className="casino-tag">
                {c.name}
                {c.location ? ` - ${c.location}` : ''}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="detail-actions">
        <Link
          to={`/machine/${machine.id}/edit`}
          className="btn btn-secondary"
        >
          Edit Machine
        </Link>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Machine
        </button>
      </div>
    </>
  );
}
