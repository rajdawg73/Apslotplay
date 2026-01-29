import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const emptyCondition = { label: '', operator: '>=', value: '', unit: '' };

export default function MachineFormPage({ store }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { machines, casinos, addMachine, updateMachine } = store;
  const isEdit = Boolean(id);

  const existing = useMemo(
    () => (isEdit ? machines.find((m) => m.id === id) : null),
    [machines, id, isEdit],
  );

  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [conditions, setConditions] = useState([{ ...emptyCondition }]);
  const [selectedCasinos, setSelectedCasinos] = useState([]);

  useEffect(() => {
    if (existing) {
      setName(existing.name || '');
      setManufacturer(existing.manufacturer || '');
      setDescription(existing.strategy?.description || '');
      setNotes(existing.strategy?.notes || '');
      setConditions(
        existing.strategy?.playConditions?.length > 0
          ? existing.strategy.playConditions.map((c) => ({ ...c }))
          : [{ ...emptyCondition }],
      );
      setSelectedCasinos(existing.casinoIds || []);
    }
  }, [existing]);

  const addCondition = () => {
    setConditions([...conditions, { ...emptyCondition }]);
  };

  const removeCondition = (idx) => {
    setConditions(conditions.filter((_, i) => i !== idx));
  };

  const updateCondition = (idx, field, value) => {
    const updated = [...conditions];
    updated[idx] = { ...updated[idx], [field]: value };
    setConditions(updated);
  };

  const toggleCasino = (casinoId) => {
    setSelectedCasinos((prev) =>
      prev.includes(casinoId)
        ? prev.filter((id) => id !== casinoId)
        : [...prev, casinoId],
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const validConditions = conditions.filter(
      (c) => c.label.trim() && c.value !== '',
    );

    const machineData = {
      name: name.trim(),
      manufacturer: manufacturer.trim(),
      strategy: {
        description: description.trim(),
        playConditions: validConditions.map((c) => ({
          ...c,
          value: Number(c.value),
        })),
        notes: notes.trim(),
      },
      casinoIds: selectedCasinos,
    };

    if (isEdit) {
      updateMachine(id, machineData);
      navigate(`/machine/${id}`);
    } else {
      addMachine(machineData);
      navigate('/');
    }
  };

  if (isEdit && !existing) {
    return (
      <div className="empty-state">
        <h3>Machine not found</h3>
        <Link to="/" className="btn btn-primary">
          Back to Machines
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link to={isEdit ? `/machine/${id}` : '/'} className="detail-back">
        &larr; {isEdit ? 'Back to Machine' : 'Back to Machines'}
      </Link>

      <h1 className="page-title" style={{ marginBottom: 24 }}>
        {isEdit ? 'Edit Machine' : 'Add New Machine'}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="detail-section">
          <h2 className="detail-section-title">Machine Info</h2>

          <div className="form-group">
            <label className="form-label">Machine Name *</label>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Dragon Link"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Manufacturer</label>
            <input
              type="text"
              className="form-input"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              placeholder="e.g. Aristocrat"
            />
          </div>
        </div>

        <div className="detail-section">
          <h2 className="detail-section-title">Strategy Guide</h2>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the overall strategy for this machine..."
            />
          </div>

          <div className="form-group">
            <label className="form-label">Play Conditions</label>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginBottom: 12,
              }}
            >
              Define the numbers/thresholds that make this machine a play.
            </p>

            {conditions.map((cond, idx) => (
              <div key={idx} className="form-row-mobile">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">What to check</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Minor Jackpot"
                    value={cond.label}
                    onChange={(e) =>
                      updateCondition(idx, 'label', e.target.value)
                    }
                  />
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr 1fr',
                    gap: 10,
                  }}
                >
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Op</label>
                    <select
                      className="form-input"
                      value={cond.operator}
                      onChange={(e) =>
                        updateCondition(idx, 'operator', e.target.value)
                      }
                    >
                      <option value=">=">&gt;=</option>
                      <option value=">">&gt;</option>
                      <option value="<=">&lt;=</option>
                      <option value="<">&lt;</option>
                      <option value="=">=</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Value</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="0"
                      value={cond.value}
                      onChange={(e) =>
                        updateCondition(idx, 'value', e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Unit</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. $"
                      value={cond.unit}
                      onChange={(e) =>
                        updateCondition(idx, 'unit', e.target.value)
                      }
                    />
                  </div>
                </div>
                {conditions.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger btn-small"
                    onClick={() => removeCondition(idx)}
                    style={{ alignSelf: 'flex-start' }}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              className="btn btn-secondary btn-small"
              onClick={addCondition}
            >
              + Add Condition
            </button>
          </div>

          <div className="form-group">
            <label className="form-label">Notes</label>
            <textarea
              className="form-textarea"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any additional tips or notes about playing this machine..."
            />
          </div>
        </div>

        {casinos.length > 0 && (
          <div className="detail-section">
            <h2 className="detail-section-title">Casinos</h2>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginBottom: 12,
              }}
            >
              Select which casinos have this machine.
            </p>
            <div className="checkbox-group">
              {casinos.map((casino) => (
                <label
                  key={casino.id}
                  className={`checkbox-item ${selectedCasinos.includes(casino.id) ? 'checked' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedCasinos.includes(casino.id)}
                    onChange={() => toggleCasino(casino.id)}
                  />
                  {casino.name}
                </label>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <button type="submit" className="btn btn-primary">
            {isEdit ? 'Save Changes' : 'Add Machine'}
          </button>
          <Link
            to={isEdit ? `/machine/${id}` : '/'}
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
