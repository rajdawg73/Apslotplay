export const sampleCasinos = [];

export const SEED_VERSION = 3;

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
  {
    name: 'Captain Riches / Tiki Fortune / Mine Blast',
    manufacturer: '',
    strategy: {
      description:
        'Features coin holders above reels 2, 3 and 4. When three coins fill a holder, that reel turns wild for the next three spins. This game is a borderline AP trap — the first two coins land quickly but the third is much harder to get. Understand how it really works before playing.',
      playConditions: [
        { label: 'Multipliers in reels 2+3 coin holders total', operator: '>=', value: 10, unit: 'x (count non-multiplier coins as 1x)' },
        { label: 'OR active wilds in reels 2 or 3', operator: '=', value: 'Yes', unit: '(glowing gold border WITH coins above)' },
        { label: 'OR active wilds in reel 4 with multiplier coins (2x/3x)', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'BORDERLINE AP TRAP. Two coins above all reels is extremely common — NOT automatically +EV. Game rules state coin collection chances differ based on coins already collected (third coin is much harder). Treasure chests/tiki heads above reels are cosmetic — jackpot bonus is not more likely with more prizes revealed. Can check without betting by tapping bet level on touchscreen. RTP 85%–96.07%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Cash Falls: Huo Zhu / Pirate\'s Trove / Island Bounty / Outback Bounty',
    manufacturer: '',
    strategy: {
      description:
        'Features coins with credit prizes that land in the reels. When a coin lands, a 3-spin counter appears. New coins reset the counter. If an entire reel fills with coins before the counter hits zero, you win all credit prizes in that reel.',
      playConditions: [
        { label: 'Simple: Reels 3, 4 or 5 one coin away', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR reels 1 and 2 both one coin away', operator: '=', value: 'Yes', unit: '' },
        { label: 'Advanced: Total coin value in reels 1 away / bet', operator: '>=', value: 6, unit: 'x bet' },
        { label: 'For reels 2 coins away: total / bet', operator: '>=', value: 25, unit: 'x bet' },
      ],
      notes:
        'Not very lucrative overall but losses are minimal since you know spins remaining. Avoid chasing reels needing more than 2 coins. Coins often block line hits — most payout comes from filling reels. Bet pad shows glowing blue outline for bet levels with a reel one coin away. Multiple denominations — check them all. One of the most popular games in casinos right now.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Coin Combo: Hurricane Horse / Perfect Peacock',
    manufacturer: '',
    strategy: {
      description:
        'Features persistent wilds that randomly appear on reels 3, 4 and 5. The wilds move up one row every spin until they move off screen. In Hurricane Horse the wilds are purple Chinese characters. In Perfect Peacock the wilds are blue peacocks that say "WILD".',
      playConditions: [
        { label: 'Two wilds in the middle reel (not top row)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR one wild in middle reel + one in reel 4', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR two wilds each in reels 4 and 5', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Do NOT count wilds on the top row — they will be gone next spin. Only Hurricane Horse and Perfect Peacock offer an advantage (not Carnival Cow, Marvelous Mouse or Terrific Tiger). Wilds appear frequently so plays are common to find. Ignore the bowls with gold coins — "accumulation of coin over time in bowls is for presentation purposes only."',
    },
    casinoIndexes: [],
  },
  {
    name: 'Dice Seeker: Flappers & Dappers / Heroes & Villains / Viking Invasion',
    manufacturer: 'Gaming Arts',
    strategy: {
      description:
        'Features rectangles above the reels containing characters, credit values and treasure chests. Each rectangle has a hit point counter. When a dice symbol lands on a reel, the die number removes hit points from the rectangle above. After HP reaches zero, you win the prize.',
      playConditions: [
        { label: 'Any large (2x3) character HP remaining', operator: '<=', value: 3, unit: 'HP' },
        { label: 'OR two large (2x3) characters HP remaining', operator: '<=', value: 5, unit: 'HP each' },
      ],
      notes:
        'Only chase large 2x3 characters — they have the most valuable prizes and double the chance of landing dice (two reels wide). Prize pick offers 3 options: usually one large and two small credit values, occasionally free games. Line hits are terrible — most payout comes from dice feature. Free games bonus is volatile. Can check without ticket: tap menu icon in lower left, use arrows to cycle bet levels. Usually comes in multiple denominations — check all.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Dragon Lights: Fortune Skies / Mystical Falls / Secret Fortress',
    manufacturer: '',
    strategy: {
      description:
        'Features four progressive free games meters — mini, minor, major and mega. Free games increase when corresponding symbols land in the fifth reel. These are NOT must-hit-bys — completely random when they trigger. Extremely volatile — only for experienced APs with large bankrolls.',
      playConditions: [
        { label: 'Mini (purple)', operator: '>=', value: 25, unit: 'free games' },
        { label: 'Minor (blue)', operator: '>=', value: 37, unit: 'free games' },
        { label: 'Major (yellow)', operator: '>=', value: 56, unit: 'free games' },
        { label: 'Mega (red) — don\'t directly chase', operator: '>=', value: 86, unit: 'free games' },
      ],
      notes:
        'WARNING: Uncapped progressive — extremely dangerous. Chasing uncapped progressives is the most common way APs get destroyed. Set a loss budget and stick to it. Flames appear on numbers at average hit point but does NOT mean +EV. All meters capped at 200 max but won\'t necessarily trigger there. Multipliers in bonuses: mini up to 3x, minor 5x, major 8x, mega 15x. All three themes (Fortune Skies, Mystical Falls, Secret Fortress) use the same strategy. RTP 85.9%–95%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Fat Fortunes: Fat Cat / Puffy Penguin / Jelly Jams',
    manufacturer: '',
    strategy: {
      description:
        'Features a bonus triggered when six fish scatter symbols land. Fish that first appear above the reels are persistent and move down one position every spin. Persistent fish have a shining/gleaming animation every few seconds — this is the key to identifying them.',
      playConditions: [
        { label: 'Fish symbols above the reels', operator: '>=', value: 2, unit: '' },
        { label: 'OR persistent fish (shiny) on next spin', operator: '>=', value: 3, unit: '(don\'t count non-shiny or bottom row)' },
      ],
      notes:
        'Under-the-radar game most APs don\'t know about. Only check when no other hustlers nearby. Persistent fish come in stacks — two above reels is always excellent. Max 2 fish above reels at once, max 4 persistent fish on reels. Need at least 2 regular fish symbols plus persistent fish to trigger bonus. Orange fish with credit prizes can also be persistent (they shine too). Penguin/cat face symbol is wild with 2x multiplier. Bonus usually pays very well. Multiple denominations — check all.',
    },
    casinoIndexes: [],
  },
];
