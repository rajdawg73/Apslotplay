import { useState, useMemo } from 'react';

export default function CasinosPage({ store }) {
  const { casinos, machines, addCasino, updateCasino, deleteCasino } = store;

  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editLocation, setEditLocation] = useState('');

  const machineCounts = useMemo(() => {
    const counts = {};
    casinos.forEach((c) => (counts[c.id] = 0));
    machines.forEach((m) => {
      (m.casinoIds || []).forEach((cid) => {
        if (counts[cid] !== undefined) counts[cid]++;
      });
    });
    return counts;
  }, [casinos, machines]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    addCasino({ name: newName.trim(), location: newLocation.trim() });
    setNewName('');
    setNewLocation('');
  };

  const startEdit = (casino) => {
    setEditingId(casino.id);
    setEditName(casino.name);
    setEditLocation(casino.location || '');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName('');
    setEditLocation('');
  };

  const saveEdit = () => {
    if (!editName.trim()) return;
    updateCasino(editingId, {
      name: editName.trim(),
      location: editLocation.trim(),
    });
    cancelEdit();
  };

  const handleDelete = (casino) => {
    if (
      window.confirm(
        `Delete "${casino.name}"? It will be removed from all machines.`,
      )
    ) {
      deleteCasino(casino.id);
    }
  };

  return (
    <>
      <h1 className="page-title" style={{ marginBottom: 24 }}>
        Casinos
      </h1>

      <form className="inline-form" onSubmit={handleAdd}>
        <div className="form-group">
          <label className="form-label">Casino Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g. Bellagio"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g. Las Vegas, NV"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      {casinos.length === 0 ? (
        <div className="empty-state">
          <h3>No casinos yet</h3>
          <p>Add a casino above to start tracking where you find machines.</p>
        </div>
      ) : (
        <div className="casino-list">
          {casinos.map((casino) => (
            <div key={casino.id} className="casino-card">
              {editingId === casino.id ? (
                <div
                  style={{ display: 'flex', gap: 10, flex: 1, flexWrap: 'wrap' }}
                >
                  <input
                    type="text"
                    className="form-input"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    style={{ flex: 1, minWidth: 150 }}
                  />
                  <input
                    type="text"
                    className="form-input"
                    value={editLocation}
                    onChange={(e) => setEditLocation(e.target.value)}
                    placeholder="Location"
                    style={{ flex: 1, minWidth: 150 }}
                  />
                  <button
                    className="btn btn-primary btn-small"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <div className="casino-info">
                    <h3>{casino.name}</h3>
                    {casino.location && <p>{casino.location}</p>}
                    <p className="casino-machine-count">
                      {machineCounts[casino.id] || 0} machine
                      {machineCounts[casino.id] !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="casino-actions">
                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => startEdit(casino)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-small"
                      onClick={() => handleDelete(casino)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
