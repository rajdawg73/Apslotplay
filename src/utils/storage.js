const MACHINES_KEY = 'ap_slot_machines';
const CASINOS_KEY = 'ap_slot_casinos';

function generateId() {
  return crypto.randomUUID();
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

export function deleteMachine(id) {
  const machines = getMachines().filter((m) => m.id !== id);
  saveMachines(machines);
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
  // Also remove this casino from any machine's casinoIds
  const machines = getMachines().map((m) => ({
    ...m,
    casinoIds: (m.casinoIds || []).filter((cid) => cid !== id),
  }));
  saveMachines(machines);
}

export function getCasinoById(id) {
  return getCasinos().find((c) => c.id === id) || null;
}
