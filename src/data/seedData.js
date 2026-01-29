export const sampleCasinos = [
  { name: 'Bellagio', location: 'Las Vegas, NV' },
  { name: 'MGM Grand', location: 'Las Vegas, NV' },
  { name: 'Caesars Palace', location: 'Las Vegas, NV' },
  { name: 'Wynn', location: 'Las Vegas, NV' },
  { name: 'Mohegan Sun', location: 'Uncasville, CT' },
];

export const sampleMachines = [
  {
    name: 'Dragon Link',
    manufacturer: 'Aristocrat',
    strategy: {
      description:
        'Look for machines where the progressive meter values exceed a profitable threshold. The key numbers to watch are the minor and major jackpot meters.',
      playConditions: [
        { label: 'Minor Jackpot', operator: '>=', value: 150, unit: '$' },
        { label: 'Major Jackpot', operator: '>=', value: 800, unit: '$' },
      ],
      notes:
        'Best played at max bet. Check all denominations - penny machines reset lower.',
    },
    casinoIndexes: [0, 1, 3],
  },
  {
    name: 'Buffalo Link',
    manufacturer: 'Aristocrat',
    strategy: {
      description:
        'Similar to Dragon Link. Monitor the progressive jackpot meters for values that exceed the must-hit-by thresholds minus a profitable margin.',
      playConditions: [
        { label: 'Minor Jackpot', operator: '>=', value: 125, unit: '$' },
        { label: 'Major Jackpot', operator: '>=', value: 750, unit: '$' },
      ],
      notes: 'Look for penny denomination with higher-than-reset meters.',
    },
    casinoIndexes: [0, 2],
  },
  {
    name: 'Huff N Puff',
    manufacturer: 'Light & Wonder',
    strategy: {
      description:
        'Track the number of bricks collected on each piggy bank. The machine becomes +EV when enough bricks are accumulated.',
      playConditions: [
        { label: 'Bricks Collected', operator: '>=', value: 40, unit: 'bricks' },
      ],
      notes:
        'Count all visible bricks across all three houses. More bricks = higher EV.',
    },
    casinoIndexes: [1, 2, 4],
  },
  {
    name: 'Piggy Bankin',
    manufacturer: 'Light & Wonder',
    strategy: {
      description:
        'Monitor the piggy bank coin counter. The machine is a play when the bank reaches a high enough value.',
      playConditions: [
        { label: 'Piggy Bank Value', operator: '>=', value: 100, unit: 'coins' },
      ],
      notes: 'Higher coin counts = bigger potential bonus. Check the meter carefully.',
    },
    casinoIndexes: [0, 1, 2, 3],
  },
  {
    name: 'Panda Magic',
    manufacturer: 'Aristocrat',
    strategy: {
      description:
        'Look for accumulated multiplier wilds or elevated progressive meters that put the game in positive expected value territory.',
      playConditions: [
        { label: 'Wild Multiplier Stack', operator: '>=', value: 6, unit: 'wilds' },
      ],
      notes: 'Can be volatile. Stick to sessions and set stop-loss limits.',
    },
    casinoIndexes: [2, 4],
  },
];
