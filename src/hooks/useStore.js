import { useState, useCallback } from 'react';
import * as storage from '../utils/storage';
import { sampleMachines, SEED_VERSION } from '../data/seedData';

const SEED_KEY = 'ap_slot_seed_version';

function seedIfNeeded() {
  const currentVersion = localStorage.getItem(SEED_KEY);
  if (currentVersion === String(SEED_VERSION)) return;

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
  const [favorites, setFavorites] = useState(() => storage.getFavorites());

  const refresh = useCallback(() => {
    setMachines(storage.getMachines());
    setCasinos(storage.getCasinos());
    setFavorites(storage.getFavorites());
  }, []);

  const updateMachine = useCallback(
    (id, updates) => {
      storage.updateMachine(id, updates);
      refresh();
    },
    [refresh],
  );

  const toggleFavorite = useCallback((id) => {
    storage.toggleFavorite(id);
    setFavorites(storage.getFavorites());
  }, []);

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
    favorites,
    updateMachine,
    toggleFavorite,
    addCasino,
    updateCasino,
    deleteCasino,
    refresh,
  };
}
