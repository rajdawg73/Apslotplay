const MACHINES_KEY = 'ap_slot_machines';
const CASINOS_KEY = 'ap_slot_casinos';
const FAVORITES_KEY = 'ap_slot_favorites';

function generateId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

// --- Machines ---

export function getMachines() {
  try {
    const data = localStorage.getItem(MACHINES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveMachines(machines) {
  localStorage.setItem(MACHINES_KEY, JSON.stringify(machines));
}

export function addMachine(machine) {
  const machines = getMachines();
  const newMachine = { ...machine, id: generateId(), createdAt: Date.now() };
  machines.push(newMachine);
  saveMachines(machines);
  return newMachine;
}

export function updateMachine(id, updates) {
  const machines = getMachines();
  const idx = machines.findIndex((m) => m.id === id);
  if (idx === -1) return null;
  machines[idx] = { ...machines[idx], ...updates, updatedAt: Date.now() };
  saveMachines(machines);
  return machines[idx];
}

export function getMachineById(id) {
  return getMachines().find((m) => m.id === id) || null;
}

// --- Casinos ---

export function getCasinos() {
  try {
    const data = localStorage.getItem(CASINOS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveCasinos(casinos) {
  localStorage.setItem(CASINOS_KEY, JSON.stringify(casinos));
}

export function addCasino(casino) {
  const casinos = getCasinos();
  const newCasino = { ...casino, id: generateId(), createdAt: Date.now() };
  casinos.push(newCasino);
  saveCasinos(casinos);
  return newCasino;
}

export function updateCasino(id, updates) {
  const casinos = getCasinos();
  const idx = casinos.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  casinos[idx] = { ...casinos[idx], ...updates };
  saveCasinos(casinos);
  return casinos[idx];
}

export function deleteCasino(id) {
  const casinos = getCasinos().filter((c) => c.id !== id);
  saveCasinos(casinos);
  const machines = getMachines().map((m) => ({
    ...m,
    casinoIds: (m.casinoIds || []).filter((cid) => cid !== id),
  }));
  saveMachines(machines);
}

export function getCasinoById(id) {
  return getCasinos().find((c) => c.id === id) || null;
}

// --- Favorites ---

export function getFavorites() {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(favIds) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favIds));
}

export function toggleFavorite(id) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
  } else {
    favs.splice(idx, 1);
  }
  saveFavorites(favs);
  return favs;
}

// --- Export / Import ---

export function exportAllData() {
  return JSON.stringify(
    {
      machines: getMachines(),
      casinos: getCasinos(),
      favorites: getFavorites(),
      exportedAt: new Date().toISOString(),
    },
    null,
    2,
  );
}

export function importAllData(jsonString) {
  const data = JSON.parse(jsonString);
  if (data.machines) saveMachines(data.machines);
  if (data.casinos) saveCasinos(data.casinos);
  if (data.favorites) saveFavorites(data.favorites);
}
