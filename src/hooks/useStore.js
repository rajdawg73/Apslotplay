import { useState, useCallback } from 'react';
import * as storage from '../utils/storage';
import { sampleMachines, SEED_VERSION } from '../data/seedData';

const SEED_KEY = 'ap_slot_seed_version';

function seedIfNeeded() {
  const currentVersion = localStorage.getItem(SEED_KEY);
  if (currentVersion === String(SEED_VERSION)) return;

  // Add any machines that don't already exist (matched by name)
  const existingNames = new Set(storage.getMachines().map((m) => m.name));

  sampleMachines.forEach((m) => {
    if (!existingNames.has(m.name)) {
      const { casinoIndexes, ...rest } = m;
      storage.addMachine({ ...rest, casinoIds: [] });
    }
  });

  localStorage.setItem(SEED_KEY, String(SEED_VERSION));
}

export function useStore() {
  seedIfNeeded();

  const [machines, setMachines] = useState(() => storage.getMachines());
  const [casinos, setCasinos] = useState(() => storage.getCasinos());

  const refresh = useCallback(() => {
    setMachines(storage.getMachines());
    setCasinos(storage.getCasinos());
  }, []);

  const addMachine = useCallback(
    (machine) => {
      storage.addMachine(machine);
      refresh();
    },
    [refresh],
  );

  const updateMachine = useCallback(
    (id, updates) => {
      storage.updateMachine(id, updates);
      refresh();
    },
    [refresh],
  );

  const deleteMachine = useCallback(
    (id) => {
      storage.deleteMachine(id);
      refresh();
    },
    [refresh],
  );

  const addCasino = useCallback(
    (casino) => {
      const created = storage.addCasino(casino);
      refresh();
      return created;
    },
    [refresh],
  );

  const updateCasino = useCallback(
    (id, updates) => {
      storage.updateCasino(id, updates);
      refresh();
    },
    [refresh],
  );

  const deleteCasino = useCallback(
    (id) => {
      storage.deleteCasino(id);
      refresh();
    },
    [refresh],
  );

  return {
    machines,
    casinos,
    addMachine,
    updateMachine,
    deleteMachine,
    addCasino,
    updateCasino,
    deleteCasino,
    refresh,
  };
}
