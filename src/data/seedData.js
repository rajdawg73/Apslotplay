export const sampleCasinos = [];

export const SEED_VERSION = 2;

export const sampleMachines = [
  {
    name: '88 Fortunes Emperor\'s Coins',
    manufacturer: 'Light & Wonder',
    strategy: {
      description:
        'Features a must-hit-by free games feature with a counter that starts at 8 and must hit by 18. The counter increases when special gold coin symbols randomly land on the fifth reel.',
      playConditions: [
        { label: 'Free Games Counter', operator: '>=', value: 15, unit: '' },
      ],
      notes:
        'Extremely volatile — big wins and big losses. The bonus usually pays well (~40x bet avg), but collecting the 18 coins can be painfully slow. The counter has a glowing outline at 15+. Feature usually hits right at 18, sometimes earlier. Available in five denominations (1¢, 2¢, 5¢, 10¢, $1) — check each one. Have a large bankroll for higher denoms. Many APs play at 14 or 13, but data suggests it is not +EV until 15.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Block Bonanza: Hawaii / Rio',
    manufacturer: 'Light & Wonder',
    strategy: {
      description:
        'Features colored blocks with credit values above the reels. Blocks correspond to matching reel positions. When a dollar symbol lands in each of the first three reels, you win the credit value of the corresponding blocks. Play when block values are much higher than usual.',
      playConditions: [
        { label: 'Yellow block in columns 1-3 (not smallest 16.6x)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR total blocks value (cols 1-3) / bet size', operator: '>=', value: 38, unit: 'x bet' },
      ],
      notes:
        'Common game — most hustlers unaware of it. Extremely high variance. Block value order (low to high): purple, blue, red, green, yellow. Blue diamond dollar symbols boost block values. Blocks drop down over time — stop if numbers no longer favorable. Dollar symbols must land in order from reel 1. Free games bonus triggers block wins frequently. Two themes: Hawaii (surfer = dollar symbol in bonus) and Rio (more dollar symbols in bonus). Large prizes on reels 4-5 but very hard to hit — don\'t chase. Consider a "desperation game" when no other plays available.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Buffalo Link',
    manufacturer: 'Aristocrat',
    strategy: {
      description:
        'Features a must-hit-by bonus triggered by accumulating buffalo heads. The counter begins at 100 and the feature must hit before 1800. Counter is displayed above the fifth reel.',
      playConditions: [
        { label: 'Buffalo Counter (recommended)', operator: '>=', value: 1610, unit: '' },
        { label: 'Buffalo Counter (breakeven)', operator: '>=', value: 1234, unit: '' },
      ],
      notes:
        'Notorious in the AP community — extremely volatile. Buffalo heads accrue quickly (~1.7/spin), but bonus is where the volatility lies. Feature is hold & spin or 8 free games. Hold & spin more consistent; free games feast or famine but can retrigger to 100+ spins. Grand jackpot requires 20 buffalos — common to tease at 19. Trick to check bet levels without paying: insert $1, touch 200 credits button to see counter, press return to game, repeat for all levels. Very common machine in casinos. RTP 92.54%–95%. Many APs play above 1000, but recommended entry is 1610+.',
    },
    casinoIndexes: [],
  },
];
