import { useState, useCallback } from 'react';
import * as storage from '../utils/storage';
import { sampleCasinos, sampleMachines } from '../data/seedData';

const SEED_KEY = 'ap_slot_seeded';

function seedIfNeeded() {
  if (localStorage.getItem(SEED_KEY)) return;

  const casinoIds = sampleCasinos.map((c) => storage.addCasino(c).id);
  sampleMachines.forEach((m) => {
    const { casinoIndexes, ...rest } = m;
    storage.addMachine({
      ...rest,
      casinoIds: casinoIndexes.map((i) => casinoIds[i]),
    });
  });

  localStorage.setItem(SEED_KEY, 'true');
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
