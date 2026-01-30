export const sampleCasinos = [];

export const SEED_VERSION = 6;

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
  {
    name: 'Gift of the Nile / Dragon Flame',
    manufacturer: '',
    strategy: {
      description:
        'Features persistent wilds that move down one row every spin. Wilds can land in a queue above the reels (often in big stacks), so you can see them coming before they reach the active reel area.',
      playConditions: [
        { label: 'Single wild in reels 1-3 (top/middle row or directly above)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR two wilds in reels 1-3 in front 3 queue positions', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR two wilds same row in reels 1-3 in middle of queue', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR three wilds same row in reels 1-3 in back of queue', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR stack of 3+ wilds in reels 1-3 towards back of queue', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Focus on wilds in the first three reels only. The further back upcoming wilds are in the queue, the more wilds you need to justify the cost. Wilds in the queue don\'t always come from the very back — they can randomly appear anywhere, giving more chances for additional wilds. Three-of-a-kind with premium symbols pays fairly well. Free games bonus symbols are NOT persistent — only wilds are. Wilds from bonus do not transfer back to base game.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Golden Egypt Grand',
    manufacturer: '',
    strategy: {
      description:
        'Features coin holders above each reel. When a holder is filled, that reel turns wild for 2-4 spins depending on number of coins. Format: coins per reel (e.g. 1-2-0-0-0 = 1 coin reel 1, 2 coins reel 2, 0 in reels 3-5).',
      playConditions: [
        { label: 'Two of first 3 reels one coin away (e.g. 1-2-0-0-0)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR 6 coins in first 4 reels (e.g. 1-1-2-2-0)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR active wilds in reels 1-3 (gold border + coins)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR active wild reel 4 + reel 1-3 one coin away', operator: '=', value: 'Yes', unit: '(1-2 spins to combo)' },
        { label: 'OR active wilds in both reels 4 and 5', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Extremely common game found at most casinos. Only two pharaoh heads needed for a line hit. Free games bonus: choose 30 games (1 wild reel), 15 games (2 wild reels) or 5 games (3 wild reels) — all pay the same on average, just differ in volatility. Pick 30 games to lower variance if not in a hurry.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Golden Jungle Grand',
    manufacturer: '',
    strategy: {
      description:
        'Operates on a 10-game cycle collecting buddha symbols above each reel. After the 10th spin, reels with 2 buddhas turn wild. Format: buddhas per reel (e.g. 2-1-0-0-0). Always play if two of the first three reels are full (except game 10).',
      playConditions: [
        { label: 'Two full reels in first 3 (always, except game 10)', operator: '=', value: 'e.g. 2-2-0-0-0', unit: '' },
        { label: 'Game 10 of 10', operator: '=', value: 'NEVER play', unit: '' },
        { label: 'Game 9: One full reel in 1-3, or 3 buddhas in 1-4', operator: '=', value: 'e.g. 2-0-0-0-0 or 1-1-0-1-0', unit: '' },
        { label: 'Game 8: Full reel + 1 extra in 1-3, or 3 buddhas in 1-4', operator: '=', value: 'e.g. 2-1-0-0-0 or 1-0-1-1-0', unit: '' },
        { label: 'Games 3-7: Full reel + buddhas in other two of 1-3, or 3 in 1-4', operator: '=', value: 'e.g. 2-1-1-0-0 or 1-1-0-1-0', unit: '' },
        { label: 'Game 2: One full reel in 1-3, or 2 buddhas in 1-4', operator: '=', value: 'e.g. 2-0-0-0-0 or 1-1-0-0-0', unit: '' },
        { label: 'Game 1: Two buddhas in first 3 reels', operator: '=', value: 'e.g. 1-1-0-0-0', unit: '' },
      ],
      notes:
        'High variance "all or nothing" game — on spin 10 you either get shafted (1-2 wild reels) or make a killing (3-4 wild reels). Need 3+ of the first 4 reels wild for good profit. Only one buddha can land per reel per spin. Free games bonus is hard to land but pays handsomely. Full screen (blackout) of wilds pays 133.3x bet.',
    },
    casinoIndexes: [],
  },
  {
    name: 'IGT Classic Hits: Coyote Moon / Money Storm / Lobstermania Deluxe',
    manufacturer: 'IGT',
    strategy: {
      description:
        'Three titles each with three must-hit-by progressives (top/middle/bottom) across five bet levels — 15 progressives per machine. Breakeven entry points listed by bet level.',
      playConditions: [
        { label: 'Top progressive @ $0.50 bet', operator: '>=', value: 194, unit: '$' },
        { label: 'Top progressive @ $1.00 bet', operator: '>=', value: 388, unit: '$' },
        { label: 'Top progressive @ $1.50 bet', operator: '>=', value: 582, unit: '$' },
        { label: 'Top progressive @ $2.50 bet', operator: '>=', value: 970, unit: '$' },
        { label: 'Top progressive @ $5.00 bet', operator: '>=', value: 1940, unit: '$' },
        { label: 'Middle progressive @ $0.50 bet', operator: '>=', value: 48, unit: '$' },
        { label: 'Middle progressive @ $1.00 bet', operator: '>=', value: 96, unit: '$' },
        { label: 'Middle progressive @ $1.50 bet', operator: '>=', value: 144, unit: '$' },
        { label: 'Middle progressive @ $2.50 bet', operator: '>=', value: 240, unit: '$' },
        { label: 'Middle progressive @ $5.00 bet', operator: '>=', value: 480, unit: '$' },
        { label: 'Bottom progressive @ $0.50 bet', operator: '>=', value: 19, unit: '$' },
        { label: 'Bottom progressive @ $1.00 bet', operator: '>=', value: 38, unit: '$' },
        { label: 'Bottom progressive @ $1.50 bet', operator: '>=', value: 57, unit: '$' },
        { label: 'Bottom progressive @ $2.50 bet', operator: '>=', value: 95, unit: '$' },
        { label: 'Bottom progressive @ $5.00 bet', operator: '>=', value: 190, unit: '$' },
      ],
      notes:
        'Numbers above are breakeven — wait higher for bigger profit. Memorize bottom progressive numbers (chased most often). Quick math: meter needs ~95% of MHB — take 10% of progressive, halve it, subtract from MHB. Top progressive rarely worth chasing (locks you up for hours). Hit odds per spin: bottom 1/456, middle 1/3,829, top 1/58,257. Progressive meters also increase during free games. Only the "Deluxe" versions have MHBs — tap "Switch Games" if you don\'t see progressives. Check all bet levels without betting by tapping "Bet Per Line" on touchscreen. RTP ~91.4%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Jackpot Catcher: Sun / Moon',
    manufacturer: '',
    strategy: {
      description:
        'Features glowing rings that lock on the reels for three spins. If a credit value symbol lands within a glowing ring, you win that amount. Each ring has three internal segments showing spins remaining.',
      playConditions: [
        { label: 'Active glowing rings (green 2x=2, pink 3x=3)', operator: '>=', value: 5, unit: 'rings' },
      ],
      notes:
        'Very lucrative newer game most APs don\'t know about. Common to find plays and you can get in/out quickly with limited investment. Landing a second sun/moon in an active ring refills segments and upgrades multiplier: yellow -> green 2x -> pink 3x -> red 5x. Special Jackpot Catcher Spins (regular/deluxe/ultra) can cover the entire board. During free games bonus, accumulated rings stay the entire time and don\'t disappear.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Kraken Unleashed: Lobster Bay / Wild Vikings / Dive for Five',
    manufacturer: '',
    strategy: {
      description:
        'Features wood panels with credit prizes that land on reels and shift down one position every spin. Landing six wood panels triggers a hold & spin feature. Panels often first land in the top row then shift down in stacks up to four tall.',
      playConditions: [
        { label: 'Wood panels in top row', operator: '>=', value: 2, unit: '' },
        { label: 'OR 1 panel top row + 2 panels middle row', operator: '=', value: 'Yes', unit: '' },
        { label: 'Aggressive: Any panel in top row', operator: '=', value: 'Yes', unit: '(unless stack of 4 with bottom gone)' },
      ],
      notes:
        'One of the best under-the-radar games — most APs don\'t know about it. Common to find plays and can win big with limited investment. Losses are minimal (only a few spins needed). Wood panels only appear in reels 1-4. Smaller credit panels tend to come in taller stacks, making them more lucrative for triggering bonus. Good line hits are very infrequent — most payout comes from bonus. Usually comes in four denominations — check all bet levels on each.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Let\'s Spin / Let\'s Spin Vegas',
    manufacturer: 'Gaming Arts',
    strategy: {
      description:
        'Players need a Let\'s symbol in reel 1 and a Spin symbol in reel 2 to trigger a wheel spin. Both symbols persist for 3 additional spins after landing. Symbols start in bottom/middle/top row, move to top next spin, then down one row per spin. Consecutive Spin symbols in reels 3-5 add extra multipliers.',
      playConditions: [
        { label: 'Let\'s symbol in reel 1 (not bottom row)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR Spin symbol in reel 2 (not bottom row)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR Spin symbols in both reels 3 and 4 (not bottom row)', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Multipliers on concentric rings are MULTIPLIED together, not added. Ring max multipliers: 1st up to 4x, 2nd up to 5x, 3rd up to 8x, 4th up to 10x — max possible 1,600x. Let\'s symbol contains a 1-5x bet credit prize as the base amount. Rings also contain jackpots: mini (1st ring), minor (2nd), major (3rd), mega (4th). Bottom row symbols are risky — can\'t tell if first or last appearance. Safest to assume bottom row will disappear. Can check without ticket: tap menu icon, use arrows to cycle bet levels. Both Let\'s Spin and Let\'s Spin Vegas function the same.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Lucky Empress / Inca Empress',
    manufacturer: '',
    strategy: {
      description:
        'Features persistent multipliers on tile placeholders to the left of the rows. Tiles with question marks are collected (3 needed), then reveal multipliers (2x, 3x, 5x, 8x, 10x, or 12x). Bottom multiplier becomes active showing "10X NEXT PAY" etc. Active multiplier stays until a line hit triggers it.',
      playConditions: [
        { label: 'Any active 10x or 12x multiplier', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR active multipliers totaling', operator: '>=', value: 10, unit: 'x (e.g. two 5x, or 8x + 3x)' },
        { label: 'OR 10x/12x in queue — play 5x/8x in front to reach them', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Highly volatile — you will lose money most times you play. Line hits can be pathetic ($0.10), so even 10x may only win $1. But occasional $100+ wins make up for losses. Multipliers come up frequently — don\'t get tricked into perpetually chasing. Not worth chasing question mark tiles (may reveal 2x or 3x). Free games bonus is feast or famine. Inca Empress has no progressive jackpots unlike Lucky Empress. Lucky Empress RTP 85%–94%, Inca Empress RTP 85%–96%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Lucky Larry\'s Lobstermania 4 Link / Super Sally\'s Shrimpmania 4 Link',
    manufacturer: '',
    strategy: {
      description:
        'Features Loot Awards above reels 2, 3 and 4. Loot Awards activate when two coins are collected in that reel. Coins appear as sub-symbols on the bottom of regular symbols.',
      playConditions: [
        { label: 'One coin in each of the 3 Loot Awards', operator: '=', value: 'Yes', unit: '(stop after triggering one)' },
        { label: 'OR any active Loot Award (2 or 1 spins left)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR Bonus Loot Award present above any reel', operator: '=', value: 'Yes', unit: '(regardless of coins)' },
        { label: 'OR Jackpot Loot Award present (ideally with 1 coin)', operator: '=', value: 'Yes', unit: '' },
        { label: 'Completed Loot Awards: spin once to see replacement', operator: '=', value: 'See notes', unit: '' },
      ],
      notes:
        'One of the best new AP games. Ploppies don\'t understand it, so plays are common. Multiple active Loot Awards = huge wins. Awards trigger more on higher bets. Coins appear frequently — usually limited investment needed. Bonus Loot: choose bucket bonus (less volatile) or free games (hit or miss). Jackpot Loot can bust but has huge upside. For completed awards: spin once if 1 completed + 1 coin in other two, 2 completed, or 3 completed — hoping for Bonus/Jackpot replacement. Larry/Sally dances across screen right before landing 2nd coin for Bonus/Jackpot.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Madonna: Mighty Cash',
    manufacturer: '',
    strategy: {
      description:
        'Features multipliers above the reels that increment by 1x when a boost symbol lands (max 8x per reel). Landing 6+ star symbols triggers Mighty Cash hold-and-spin bonus where credit prizes are pre-multiplied by the reel\'s multiplier.',
      playConditions: [
        { label: 'Total of all multipliers above reels', operator: '>=', value: 21, unit: 'x' },
      ],
      notes:
        'High variance — advantage depends on triggering Mighty Cash bonus. Bring a large bankroll. Filling all squares in hold-and-spin awards a wheel spin for jackpots or 2x/3x total bonus multiplier. Spins in bonus = number of star symbols landed to trigger it. Boost star counts toward the 6 needed. After bonus, all multipliers clear and a few random ones are added. Boost symbols appear frequently so multipliers build quickly. Multiple denominations — check all. RTP 86.5%–91.9%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Ocean Magic Grand',
    manufacturer: 'IGT',
    strategy: {
      description:
        'Features wild bubbles that move up one row every spin. If a wild bubble lands on top of an Ocean Magic symbol, all surrounding symbols turn wild. Sunrise bubbles below the bottom row are key — often overlooked.',
      playConditions: [
        { label: 'Wild bubbles in reels 2 or 3 (incl. sunrise below)', operator: '=', value: 'Yes', unit: '(stop at 2nd row from top)' },
        { label: 'OR bubble in reel 1 + bubble in reel 4 within 1-2 rows', operator: '=', value: 'Yes', unit: '(stop at 2nd row from top)' },
        { label: 'OR sunrise bubbles in reels 1 or 4', operator: '=', value: 'Yes', unit: '(1 spin to check for more)' },
      ],
      notes:
        'Same strategy for regular and Bubble Boost mode — extra Boost cost is offset by streaky bubble behavior and foghorn potential. Sunrise bubbles (below bottom row) are the most important — often overlooked, tend to come in spurts. If bubble doesn\'t expand onto Ocean Magic symbol, you\'ll likely lose that play. But expanded bubbles or multiples = gigantic wins. Reels 2-3 bubbles most valuable (more room to expand). Top row bubbles less valuable. To identify persistent bubbles after expansion: switch bet level and back — expanded wilds disappear, real bubbles remain.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Pub Series: Anastasia\'s Tavern / Isabella\'s Tequileria / Kaleigh\'s Pub / Sofia\'s Cellar',
    manufacturer: 'Gaming Arts',
    strategy: {
      description:
        'Four titles with two persistent features: sticky wilds (alcoholic beverages that stay 2 extra spins) in reels 2-4, and an "on-the-house" meter on the bet pad that triggers free games when full.',
      playConditions: [
        { label: 'Active wilds in reels 2 or 3 (full/half-full glass)', operator: '=', value: 'Yes', unit: '(NOT empty/near-empty)' },
        { label: 'OR 3 active wilds in reel 4', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR on-the-house meter halfway into last segment (red showing)', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Do NOT play wilds where the glass looks empty or has tiny amount left — those disappear next spin. Sticky wilds appear randomly in reels 2-4 only, stay for 2 additional spins. Not all versions have the on-the-house meter (newer software update). Meter increments randomly, usually fills quickly from last segment. Can check without ticket: tap menu icon, use arrows to cycle bet levels. Symbols on reels won\'t change between bet levels, but sticky wilds (if present) will show on top.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Red Silk / Aztec Chief',
    manufacturer: '',
    strategy: {
      description:
        'Features coin holders above each reel. When two coins fill a holder, that reel turns wild for the next two spins. Similar to Golden Egypt but played much tighter — more payout goes to progressives/jackpot pick, so line hits with coins are less lucrative.',
      playConditions: [
        { label: 'Active wilds in reels 1-3 (gold border + coins above)', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR active wild reel 4 (2 spins left) + 2 coins in reels 1-3', operator: '=', value: 'Yes', unit: '(1 spin to try combo)' },
      ],
      notes:
        'DO NOT play like Golden Egypt. Having 1 coin in each of the first 3 reels is NOT +EV. Having 2 coins across reels is NOT +EV. More payout goes to progressives/jackpot pick than Golden Egypt, making line hits less valuable. Hundreds of logged sessions confirm this. Lanterns (Red Silk) and masks (Aztec Chief) above reels are cosmetic — jackpot bonus is NOT more likely with more revealed. Check without betting by tapping bet level. Red Silk defaults back to 75-credit bet; Aztec Chief stays on last checked level (easier to monitor). RTP 86%–95%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Regal Riches / Prosperity Pearl',
    manufacturer: '',
    strategy: {
      description:
        'Features MHB progressive wilds. Blue wilds occur in base game (counter above middle reel, resets to 5, MHB 50). Purple/green/yellow wilds occur during 10 free games (MHB: purple 75, green 100, yellow 125).',
      playConditions: [
        { label: 'Blue (base game)', operator: '>=', value: 8, unit: '' },
        { label: 'Purple (minor, free games)', operator: '>=', value: 61, unit: '' },
        { label: 'Green (major, free games)', operator: '>=', value: 84, unit: '' },
        { label: 'Yellow (mega, free games)', operator: '>=', value: 112, unit: '' },
      ],
      notes:
        'Numbers above are approximate breakeven — wait higher for more profit. Purple accumulates fastest, green slower, yellow slowest. Large bankroll needed for yellow chases. Avg payouts at MHB: purple 75x bet, green 150x bet, yellow 225x bet. During free games, wilds save a bunch for "grand finale" on final spin. Wilds on wilds become multipliers up to 5x — multiple multipliers on same row = huge payouts. Screen shakes when about to hit free games feature. Blue wilds don\'t show on bet pad — must tap bet levels to check. Rumors of Regal Riches being "nerfed" (blues don\'t run as high) vs Prosperity Pearl. RTP 85%–96%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Rich Little Piggies: Hog Wild / Meal Ticket',
    manufacturer: '',
    strategy: {
      description:
        'Features three progressive free games features — a blue pig (increasing free games), a yellow pig (chance to win jackpot prizes) and a red pig (guaranteed wilds in Hog Wild, or lowest paying symbols removed in Meal Ticket). Players land colored coins that build up the features on corresponding pigs. Pigs get fatter as features build. Triggered randomly — NOT must-hit-bys.',
      playConditions: [
        { label: 'Blue pig free games (regardless of others)', operator: '>=', value: 24, unit: 'free games' },
        { label: 'Blue pig free games (if yellow pig is fat)', operator: '>=', value: 22, unit: 'free games' },
        { label: 'Blue pig free games (if yellow AND red pigs equally fat)', operator: '>=', value: 20, unit: 'free games' },
      ],
      notes:
        'WARNING: Uncapped progressives — extremely dangerous and volatile. Since features aren\'t guaranteed to hit by a certain point, you can dig yourself into a deeper hole. Unless you trigger a pig quickly, your only hope is triggering two or three pigs at the same time. As pigs get fatter, they are NOT any more likely to hit. Blue pig free games capped at 100 — not guaranteed to hit at that number, just won\'t increase beyond it. Yellow pig (jackpot free games) can pay extremely well when combined with a built-up blue pig. If yellow or red pig triggers without blue, it defaults to 7 free games.',
    },
    casinoIndexes: [],
  },
  {
    name: 'River Dragons / Fire Wolf 2 / Forest Dragons / Winter of the Dragons / Wolf Queen',
    manufacturer: 'AGS',
    strategy: {
      description:
        'Features two must-hit-by progressive jackpots of $500 and $5,000. Breakeven entry points below are for an 86% RTP machine.',
      playConditions: [
        { label: '$500 progressive', operator: '>=', value: 483, unit: '$' },
        { label: '$5,000 progressive', operator: '>=', value: 4912, unit: '$' },
      ],
      notes:
        'Many APs take these at lower numbers — anything approaching $480 or $4,900 gets jumped on. Some play early for points/offers or to block other hustlers. Jackpots weighted to hit at the very top — realistic chance at $490 for $500 and $4,990 for $5,000. Can hit earlier but exceedingly rare. Always assume they\'ll go to the very end. Spin at lowest bet level to lower variance — higher bets = more gambling. $500 resets to $200. $5,000 resets to $2,000 or $4,000 depending on settings. Some "Xtreme Jackpots" variants of Wolf Queen and Winter of the Dragons don\'t have MHBs. Forest Dragons may not be weighted to hit at top (unconfirmed). Factor in taxes for $5,000 chase. Recommended bankroll: 5x the jackpot. RTP 86%–95%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Wheel of Fortune 4D More Money',
    manufacturer: '',
    strategy: {
      description:
        'Features multipliers above each reel that increase by 1x when a wild symbol lands. All line hits are multiplied by the active multiplier (highlighted with a border). After triggering, the multiplier resets to 1x. The border slides one space right each spin, cycling from reel 5 back to reel 1.',
      playConditions: [
        { label: 'Three yellow multipliers total', operator: '>=', value: 24, unit: 'x (stop after triggering one)' },
        { label: 'OR any yellow multiplier up next (border directly to left)', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Multipliers reset to 1x and max at 20x. They turn yellow at 6x. Important: highlighted multiplier doesn\'t reset immediately after a line hit — it resets after the NEXT spin. Check if last play was a win; if so, the multiplier will go away. Don\'t chase single yellow multipliers — it takes 5 spins to cycle back and isn\'t worth the cost. The active multiplier applies to ALL line wins regardless of which reels are involved in the hit.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Wheel of Fortune Wild Spin: Vacation / Night Life',
    manufacturer: '',
    strategy: {
      description:
        'Operates on a 10-game cycle. Gold frames accumulated during the cycle all turn wild on the 10th spin. Strategy depends on how far into the cycle and the position of locked frames.',
      playConditions: [
        { label: 'Game 10 of 10', operator: '=', value: 'NEVER play', unit: '' },
        { label: 'Game 9 of 10: frames in first 3 reels', operator: '>=', value: 1, unit: 'frame' },
        { label: 'Games 7-8: frames in first 3 reels, same row', operator: '>=', value: 2, unit: 'frames' },
        { label: 'Games 5-6: frames in first 4 reels, same row', operator: '>=', value: 3, unit: 'frames' },
        { label: 'Games 3-4: frames in first 3 reels (or 4 same row)', operator: '>=', value: 5, unit: 'frames' },
        { label: 'Games 1-2: frames in first 3 reels (or 4 same row)', operator: '>=', value: 6, unit: 'frames' },
      ],
      notes:
        'Check frequently — very popular game. Horizontally connected frames are much better than vertical (wheel bonus symbol in reels 2-4 can block line hits). Frames tend to land in vertical stacks, but horizontal alignment is what you want. More payout goes to wheel bonus and progressives, so line hits aren\'t quite as lucrative as similar games. Aim for 5-of-a-kind or 4-of-a-kind — 3-of-a-kind pays poorly. Earlier in cycle = focus on total frames in first 3 reels. Later in cycle = focus on horizontal alignment. Mid-cycle finds are often worth playing (getting 10-cycle return for half the cost). Game 9 abandoned is almost always worth one spin. Both themes (Vacation and Night Life) use the same strategy.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Wizard Riches',
    manufacturer: '',
    strategy: {
      description:
        'Complex game with multiple advantage opportunities: delayed wilds (purple-bordered symbols that turn wild next spin), countdown jackpots (icons above reels with HP counters), past mystery multipliers (bookcase on left showing last 5 wins), and future mystery multipliers (bookcase on right with upcoming multiplier).',
      playConditions: [
        { label: 'Delayed wilds: two connected L-R in first 4 reels', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR delayed wilds: three anywhere in first 3 reels', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR delayed wilds: four anywhere in first 4 reels', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR countdown jackpots: two icons on adjacent reels (or gap of one)', operator: '=', value: 'Yes', unit: '(with counters remaining)' },
        { label: 'OR past multiplier: any of last 5 wins (top of bookcase)', operator: '>=', value: 4, unit: 'x bet' },
        { label: 'OR past multiplier: any of last 5 wins (middle/bottom)', operator: '>=', value: 6, unit: 'x bet (8x for bottom)' },
        { label: 'OR future multiplier: 4x+ with empty shelf in purple border', operator: '=', value: 'Yes', unit: '(NOT if "Next Win" already highlighted)' },
      ],
      notes:
        'Very good game to hustle due to its confusing nature — lots of things to look for. Delayed wilds = low variance. Countdown jackpots and mystery multipliers = high variance. No free games bonus, so more payback weighted to advantage features. Mystery multipliers do NOT apply to jackpots. Last wins don\'t include jackpot or multiplier wins. Touch left bookcase to illuminate last 5 wins. Countdown jackpot icons: yellow indicators show spins remaining — no yellow = disappears next spin. Three adjacent jackpot symbols = mini, four = minor, five = major.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Wolf Peak / Cat Peak / Fu Ren Wu',
    manufacturer: '',
    strategy: {
      description:
        'Features expanding wilds that persist for 4 spins. Active wilds have a yellow background with orange "WILD" text and a chevron arrow (up or down) indicating expansion direction. Wilds expand to cover the entire reel (4 spaces tall) then disappear.',
      playConditions: [
        { label: 'Active yellow wilds in first 3 reels', operator: '>=', value: 1, unit: '' },
        { label: 'OR active wilds in reel 4 with multipliers', operator: '>=', value: 1, unit: '(only if 2x or 3x multiplier)' },
      ],
      notes:
        'Do NOT play purple wilds — those don\'t stick around. The chevron arrow direction doesn\'t indicate how tall wilds will get — ALL yellow wilds expand to cover the entire reel. Must put money in to check, making it slightly harder to scout. Common to find plays because ploppies don\'t grasp the expanding wilds mechanic. Can pay massively when multiple wilds are active, especially with 2x and 3x multipliers. All three titles (Wolf Peak, Cat Peak, Fu Ren Wu) use the same strategy.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Wolf Run Eclipse / Cats Wild Serengeti',
    manufacturer: '',
    strategy: {
      description:
        'Features four progressive free games meters — mini, minor, major and mega. Free games increase when corresponding bonus symbols land in the fourth reel. These are NOT must-hit-bys — completely random when they trigger. Extremely volatile — only for experienced APs with large bankrolls.',
      playConditions: [
        { label: 'Use calculator for exact entry points', operator: '=', value: 'See notes', unit: '' },
      ],
      notes:
        'WARNING: Uncapped progressive — the most common way APs get destroyed. The idea is that the free games meter sometimes goes beyond the point where hitting it more than covers the cost on average. But "on average" is key — if you don\'t trigger in the average number of spins, you just dig a deeper hole. The meter keeps increasing but NOT fast enough to cover losses. It does NOT become more likely to hit the more you play. Set a loss budget and stick to it. Mini = 1 wild reel per spin, minor = 2, major/mega = 3 wild reels. Major and mega wild stacks rigged to land towards the right. Mini/minor/major reset to 5 free games. Mega resets to 100 free games — view it as hitting a jackpot rather than something to chase directly. Mega is virtually a guaranteed handpay even at small bet levels.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Wu Dragon / Star Goddess',
    manufacturer: '',
    strategy: {
      description:
        'Features persistent frames that lock onto the reels. Fireballs occasionally shoot down from the upper right. If a fireball hits inside a frame, that frame and all adjacent symbols turn wild, plus all other frames on the screen also turn wild.',
      playConditions: [
        { label: 'Frames in first 4 reels (with >= 5 in reels 2 & 3)', operator: '>=', value: 7, unit: 'frames' },
        { label: 'OR frames in first 4 reels (>= 3 connected horizontally)', operator: '>=', value: 6, unit: 'frames' },
        { label: 'OR frames in same row', operator: '>=', value: 4, unit: 'frames (even if not connected)' },
      ],
      notes:
        'Focus on getting 5-of-a-kind line hits — ideally all wilds. 4-of-a-kind pays okay, 3-of-a-kind pays barely anything. Frames in reels 2-3 are MORE valuable than reel 1 (fireball in reel 1 can\'t expand wilds to the left). Middle rows more valuable than top/bottom for same reason. Sometimes better to NOT have frames in reel 1 that could attract a fireball. Fireballs turn ANY symbols wild (even without frames), but frames won\'t clear until a fireball hits inside a frame. Biggest wins come from multiple fireballs hitting multiple frames. Glowing border animation around screen edges signals a big win coming. Only bottom row bet levels (with Portal Lock) contain persistent frames. Sometimes frames disappear when checking — play one spin on any bet level to restore them (may be anti-vulturing feature or bug).',
    },
    casinoIndexes: [],
  },
  {
    name: 'Zodiac Lion / Zodiac Dragon',
    manufacturer: '',
    strategy: {
      description:
        'Features persistent gold frames that lock on the reels. A lion head symbol (or dragon head in Zodiac Dragon) creates the initial gold frame. When another head symbol lands within any gold frame, all connecting gold frames turn wild. Frames disappear on the next spin.',
      playConditions: [
        { label: 'Horizontally connected gold frames (reels 1-4 or 2-5)', operator: '>=', value: 4, unit: 'frames' },
        { label: 'OR connected frames starting reel 1 or 2 (with >= 8 total in clump)', operator: '>=', value: 3, unit: 'horizontal frames' },
        { label: 'Do NOT play clumps in reels 3-5 without connections to reels 1-2', operator: '=', value: 'Avoid', unit: '' },
      ],
      notes:
        'One of the most popular AP games but poorly played by most hustlers. Many just play when there are lots of frames regardless of position — you really want 4-of-a-kind or 5-of-a-kind line hits. 3-of-a-kind barely pays. Frames need to be connected horizontally (left to right) not vertically. Top row bets (without Zodiac Wheel) pay much better but landing lion heads is harder. Even $0.60 bet pays well with 5-of-a-kind wilds. Bottom row bet levels give a chance at Zodiac Wheel connecting clumps. More frames on screen = better chance of landing 3 lion symbols for Lion Spin Bonus. Turn down volume before checking. RTP 85%–96%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Sumo Kitty / Lucha Kitty',
    manufacturer: '',
    strategy: {
      description:
        'Features persistent gold frames that lock in place. When a coin symbol containing a credit amount lands in a gold frame, that credit amount transfers to ALL connected gold frames and the player wins the total. Frames disappear on the next spin.',
      playConditions: [
        { label: 'Connected gold frames (without credit values already)', operator: '>=', value: 6, unit: 'frames' },
      ],
      notes:
        'Essentially a much more volatile version of Zodiac Lion. Instead of getting wilds, you get a random credit amount that varies significantly — from one third of your bet up to a mini or minor jackpot. Frame LOCATION doesn\'t matter (unlike Zodiac Lion) — play anywhere as long as they\'re connected. If two coins land within connected frames, they combine and the total is multiplied throughout all frames.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Diamonds & Devils Deluxe / Jade Monkey Deluxe',
    manufacturer: '',
    strategy: {
      description:
        'Features prizes above each reel awarded when 3 diamonds are collected. Prizes build up as credit values and free games symbols land. Landing a devil/jade monkey symbol REMOVES one diamond. If no diamonds remain, another devil/monkey RESETS the reel entirely.',
      playConditions: [
        { label: 'Free games with 2 diamonds', operator: '>=', value: 8, unit: 'free games' },
        { label: 'Free games with 1 diamond', operator: '>=', value: 16, unit: 'free games' },
        { label: 'Free games always (even 0 diamonds)', operator: '>=', value: 24, unit: 'free games' },
        { label: 'Credit value with 2 diamonds', operator: '>=', value: 10, unit: 'x bet' },
      ],
      notes:
        'The devil/jade monkey symbol adds huge variance — frustrating to get close then have it taken away. Requires discipline — cash out immediately when no longer +EV. Landing a free games symbol adds 8 free games (cap at 80). Free games bonus pays well — devil/monkey doesn\'t appear on reels during bonus. Free games generally worth much more than credit prizes. Reels 1-2 are easier to trigger, reel 5 is harder — play reels 1-2 slightly looser and reel 5 tighter. Reels 1-2 reset to 1x bet, reels 3-4 to 2x, reel 5 to 5x. Numbers above reels are silver at reset values, turn yellow when built up. Up to 3 diamonds can land per reel per spin. Game tricks new players who don\'t realize the devil removes diamonds.',
    },
    casinoIndexes: [],
  },
];
