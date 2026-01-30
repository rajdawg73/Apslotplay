export const sampleCasinos = [];

export const SEED_VERSION = 7;

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
  {
    name: 'Azure Dragon / Emerald Guardian',
    manufacturer: '',
    strategy: {
      description:
        'Features four progressive free games meters — mega, maxi, minor and mini. Free games increase when corresponding symbols land in the fourth reel. These are NOT must-hit-bys — completely random when they trigger. Much more volatile than Wolf Run Eclipse because bonus payouts are extremely inconsistent.',
      playConditions: [
        { label: 'Use calculator for exact entry points', operator: '=', value: 'See notes', unit: '' },
      ],
      notes:
        'WARNING: Extremely volatile uncapped progressive. Bonus stacks are credit prizes (not wilds like Wolf Run Eclipse) — only awarded if they connect starting in the first two reels. Stacks rigged to land more frequently in rightmost reels, often serving as line hit blockers. But five connected stacks across reels = massive wins. Stacks contain larger credit prizes further to the right. Mega/maxi = 3 guaranteed stacks per spin, minor = 2, mini = 1. Combos are king — mini payouts can be very weak, usually need support from minor/maxi. Meters don\'t increment every time a corresponding symbol lands — only a "chance" of incrementing. Mega resets to 80 free games; maxi/minor/mini reset to 8. Recommended bankroll: at least 1000x bet (1500-2000x for top progressive). Chasing uncapped progressives is the most common way APs get destroyed — set a loss budget and stick to it. RTP 86%–92%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Bigger Fu Cash Bats: Prosperous Panda / Prosperous Pig',
    manufacturer: '',
    strategy: {
      description:
        'Features bat coins that land in the first reel and persist for 3 spins. While bat coins are active, any coin symbols with credit prizes are awarded when they land consecutively in each reel starting from the second reel. Bat coins also give a chance to trigger the three features above the reels.',
      playConditions: [
        { label: 'Bat coins in first reel (coins remaining in holder above reel 1)', operator: '>=', value: 1, unit: '' },
      ],
      notes:
        'Low volatility game requiring minimal investment of just a few spins. Bat coins appear frequently — common to find plays. Up to 3 bat coins can land in reel 1: purple bat = chance at Extra Coins feature, red bat = chance at Multiply Coins feature, gold bat = chance at Jackpot Spins feature. Counter above reel 1 resets to 3 if additional bat coins land. Coins in later reels contain larger credit prizes. Do NOT confuse with "Big Fu Cash Bats" (similar name but NOT an advantage game). Must put a ticket in to check.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Bustin\' Money',
    manufacturer: '',
    strategy: {
      description:
        'Features three free games features — red safe (increasing free games), green safe (increasing ways) and blue safe (increasing multiplier). Bustin\' Money symbols land on middle reels and move to a random safe, either increasing value, opening the safe (triggering feature), or doing nothing. Safes get fatter but are NOT more likely to trigger.',
      playConditions: [
        { label: 'Free games (red safe) — chase individually', operator: '>=', value: 22, unit: 'free games' },
        { label: 'Ways (green safe) — chase individually', operator: '=', value: 'NEVER', unit: '' },
        { label: 'Multiplier (blue safe) — chase individually', operator: '>=', value: 10, unit: 'x' },
        { label: 'Combination plays: total points', operator: '>=', value: 12, unit: 'points (see notes for point system)' },
      ],
      notes:
        'POINT SYSTEM for combos: Free games (red) = games above 10 (e.g. 17 free games = 7 pts). Ways (green): 576=0, 1125=2, 1944=4, 3087=6. Multiplier (blue): 2x=0, 3x=1.5, 4x=3, 5x=4.5, 6x=6, 7x=7.5, 8x=9, 9x=10.5, 10x=12. Example: 17 free games (7) + 1125 ways (2) + 4x multiplier (3) = 12 points = play. Opening all three safes triggers jackpot feature (collect coins for mini/minor/maxi/major/grand — can win multiple times). Extremely high variance — expect massive swings. Opening green/blue during bonus adds 10 free games. Blue safe multiplier also applies to random expanding reels in base game. Red safe resets to 10 free games, green to 576 ways, blue to 2x. Only opened safes reset. Checking tip: wait and watch — screen automatically cycles through denominations showing best play.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Cash Up Jackpots',
    manufacturer: '',
    strategy: {
      description:
        'When Cash Up symbols land on reels (max bet only), they get collected above the first reel. Player can "spend" collected symbols to play bonuses (1 symbol = stack 1, 3 symbols = stack 2, 5 symbols = stack 3). Collected symbols persist after cashout — essentially free money if left behind.',
      playConditions: [
        { label: 'Cash Up symbols collected (check bet pad under max bet)', operator: '>=', value: 1, unit: '' },
        { label: 'If 5+ collected, always select the 5 Cash Up bonus', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Basically free money with zero risk when found. Plays left behind because the bonus screen is confusing/gimmicky — players don\'t realize they can play the bonus for free. Extremely profitable AP game. Cash Up symbols only collected at max bet. Base game pay is terrible — large chunk of payout goes to bonus. 1 Cash Up: 10-100 credits, 3 Cash Up: 30-200 credits, 5 Cash Up: 50-300 credits. Never play to collect MORE symbols — if you find 4, just play 3+1 bonuses. 2x multipliers can apply to jackpots. Machine allows up to 16 collected symbols. Don\'t need ticket to play left behind bonuses (but recommended to avoid looking suspicious). Quick to check — just look at bet pad. Check all denominations.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Crackin\' Cash: Grand Venezia / Rio Wonder',
    manufacturer: '',
    strategy: {
      description:
        'Features three balloons above each reel — purple (small credits), green (larger credits) and jackpot balloons. When a balloon lands on a reel, it pushes balloons up one position (top balloon moves off screen). Single rocket = awards one random balloon above; triple rocket = awards all three balloons above.',
      playConditions: [
        { label: 'Jackpot balloons (check bet pad)', operator: '>=', value: 3, unit: '' },
        { label: 'OR jackpot balloons + green balloons', operator: '=', value: '2 jackpot + 4 green', unit: '' },
        { label: 'Advanced: total balloon value / bet', operator: '>=', value: 200, unit: 'x (value jackpots as 70x, purples as 0.5-1x)' },
      ],
      notes:
        'Balloons get pushed up fairly quickly — unlikely to get down deep. Rigged so lower-value balloons hit more often. Expect frequent losses with occasional jackpot balloon or free games wins. Free games bonus is very lucrative — balloons carry over, no new balloons land, triple rockets land much more often, can win jackpots multiple times. Skip bet levels with fewer than 2 jackpots on bet pad to save time. Balloons don\'t disappear after triggering — can win multiple times. Green balloons: 4x-26.66x bet (avg 15.33x). Purple: 0.266x-1.33x (avg 0.8x). Can tap bet level on touchscreen to check without betting. RTP: 1¢/2¢: 86-90%, 5¢/10¢: 88-92%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Dancing Drums: Golden Drums',
    manufacturer: '',
    strategy: {
      description:
        'Landing a drum symbol with "+1" increments the multiplier above reel 1 (also shown on bet pad). When drum/wild symbols land in both of the first two reels, the Golden Respin feature triggers. During the Respin, reels 3-5 can expand up to 3 rows. Glowing green drum credit prizes get multiplied by the active multiplier.',
      playConditions: [
        { label: 'Multiplier (check it is NOT faded out)', operator: '>=', value: 5, unit: 'x' },
      ],
      notes:
        'Important: make sure multiplier is not faded out — faded = just triggered and will disappear next spin. Free games bonus triggers when drum/wild lands in first 3 reels — can trigger during Golden Respin when credit prize lands in reel 3. Multiplier carries over into bonus. Base game drain is brutal — dead spin after dead spin with occasional fractional-bet line hits. This indicates more payback goes to bonus features. Golden Respin is volatile — sometimes just lands a single 1x green drum. Max multiplier is 8x. Mini/minor jackpots can land in reel 5 during Respin. Ignore coins in bowl above reels — cosmetic only. Only the Golden Drums version has persistent multipliers (not the original Dancing Drums). Check by looking at bet pad.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Double Dragon: Jin Long Jin Bao',
    manufacturer: '',
    strategy: {
      description:
        'Features water rings that lock on the reels for 3 spins. Additional water rings reset the counter to 3. When a coin with a credit value lands inside a water ring, that amount is awarded, plus all coins stacked above drop down and pay. Plays two boards at once — rings can contain multipliers up to 10x.',
      playConditions: [
        { label: 'Total water rings + multipliers across both boards', operator: '>=', value: 8, unit: '(count each ring as 1, multiplied ring as its multiplier value)' },
      ],
      notes:
        'Compared to the original Dragon, rings land more frequently but coin stacks have smaller credit values. Multipliers on water rings go up to 10x. Plays with multiple rings spread out = lower variance vs equity concentrated in single high-multiplier ring. Coins can be won more than once with multiple rings on same reel. Game shouts "Dragon!" before winning a stack. Coin stacks can be up to 30 high. Free games bonus: spin wheel for number of games + board height (up to 50 games, 6 symbols tall). Water rings persist entire bonus — can get gigantic wins. Multiple denominations — check all.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Dragon Spin CrossLink: Air / Earth / Fire / Water',
    manufacturer: '',
    strategy: {
      description:
        'Features five bags above the reels that slowly fill with gold when medallion symbols land in corresponding reels below. Any gold medallion may randomly trigger the Dragon Spin feature. During the feature, bags with more gold add larger credit prizes to the reels.',
      playConditions: [
        { label: 'Total value of all five bags', operator: '>=', value: 49, unit: '(see notes for bag level values)' },
      ],
      notes:
        'Six bag levels — sparkles differentiate level 6 from level 5. Example: all five bags at level 4 (just below rope) = 35 (5x7) = NOT a play. Dragon Spin feature is extremely volatile — doesn\'t always pay well even with all five bags sparkling. Random multiplier at end of each row (1x to 10x) has huge effect on results. More gold in bags does NOT mean feature is closer to hitting — completely random trigger. The advantage comes from larger credit prizes. Hold & spin style but landing another prize only gives 1 additional spin (not typical 3). Mini/minor/major/mega jackpots can land during feature. Free games feature can also trigger (5+ orbs with credit prizes in base game). After Dragon Spin feature, ALL five bags reset to level 1. Bags tend to fill evenly — uncommon to find mixed full/empty setups.',
    },
    casinoIndexes: [],
  },
  {
    name: 'God of Winning: Great Hammer / Super Spear',
    manufacturer: '',
    strategy: {
      description:
        'Features frames that lock on the reels. Thor character can randomly smash down his hammer, turning all locked frames into wilds (then they disappear). Also features Wild Zone mode (golden border for 3-5 paid spins) where a Wild Bonus can trigger, adding 8+ frames per spin that turn wild.',
      playConditions: [
        { label: 'Locked frames forming a line hit (not "Wild" frames)', operator: '>=', value: 5, unit: 'frames' },
        { label: 'OR locked frames (more spread out / toward right)', operator: '>=', value: 10, unit: 'frames' },
        { label: 'OR game in Wild Zone/Wild Bonus mode (golden border)', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'Do NOT count frames that say "Wild" — those disappear next spin. Frames accrue quickly and wild feature triggers frequently. Line hits are very weak though — need MORE frames compared to similar games (Star Goddess/Wu Dragon, Zodiac Lion). Play with 5 frames if they form a line hit shape; closer to 10 if frames are toward the right. Good chance of landing additional frames when spread out. Avoid plays where frames are concentrated entirely in reels 4 and 5. Frames carry over into free games and become wild for entire bonus duration — added value beyond base game.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Happy Blessings / Happy Blossoms',
    manufacturer: '',
    strategy: {
      description:
        'Features coin holders above reels 2, 3 and 4. When 3 coins fill a holder, that reel turns wild for the next 3 spins. Similar to Captain Riches but with important differences in coin collection mechanics.',
      playConditions: [
        { label: 'Multipliers in reels 2+3 coin holders total', operator: '>=', value: 10, unit: 'x (count non-multiplier coins as 1x)' },
        { label: 'OR active wilds in reels 2 and 3', operator: '=', value: 'Yes', unit: '' },
        { label: 'OR active wilds in reel 4 with multiplier coins (2x/3x)', operator: '=', value: 'Yes', unit: '' },
      ],
      notes:
        'A special red bag symbol can land in middle reel and add regular, 2x or 3x coins to the three middle reels. Like similar AGS games (Pots \'O Luck, Captain Riches), game rules state red bag chances depend on coins already collected — likely misleading in same way where 2 coins collected is extremely common and not always +EV (especially without multiplier coins). Ignore coins in pots and picks revealed above reels — fake indicators that do NOT represent how close you are to triggering features. Can tap bet level on touchscreen to check without betting. RTP: 1¢/2¢: 86-90%, 5¢/10¢: 88-92%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Hold N Gold: Acorn Falls / Hot Spell',
    manufacturer: '',
    strategy: {
      description:
        'When gold scatter symbols land, they lock for 3 additional spins. Each new gold scatter resets count to 3. Six total scatter symbols (gold or non-gold) trigger the bonus. Gold scatters persist between sessions.',
      playConditions: [
        { label: 'Gold scatter symbols collected (check bet pad)', operator: '>=', value: 2, unit: '' },
        { label: 'OR gold scatter with wheel symbol or large prize', operator: '>=', value: 1, unit: '(worth at least 15x bet)' },
      ],
      notes:
        'Bet pad indicator holds 5 scatter symbols but you need 6 to trigger bonus — different from similar games Ultra Rush Gold and Ultra Rush Gold X. Don\'t need 6 GOLD scatters — any combination of scatter symbols (including non-gold credit values and wheel symbols) triggers bonus. Scatter symbols can contain mini/minor jackpots. Major and grand progressives won during wheel spin in bonus. Gold scatters don\'t act as blockers — symbols behind them are still evaluated (shown as small icon on bottom). Once gold lock count reaches zero, game may randomly grant 3 additional spins. Easy to check by glancing at bet pad — tap buttons for other denominations. RTP: Acorn Falls 86.16%-94.15%, Hot Spell 86.23%-94.02%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Inferno Wheel: Aztec Awards / Polynesian Pays',
    manufacturer: 'Gaming Arts',
    strategy: {
      description:
        'Features a wheel with persistent prize values. When an Inferno Wheel symbol lands, it either triggers a wheel spin or boosts a wedge\'s prize value. Wedge colors: yellow -> orange -> red -> white as they receive more boosts. Wedge values persist between bet levels.',
      playConditions: [
        { label: 'Smallest wedge credit prize / bet', operator: '>=', value: 15, unit: 'x' },
        { label: 'Advanced: median wedge value / bet', operator: '>=', value: 30, unit: 'x (see notes)' },
      ],
      notes:
        'Under-the-radar AP — most APs don\'t know about it. High variance and complex to evaluate = low competition. On average, costs ~25 units to trigger wheel spin (factoring in free games and occasional large line hits). Aim for wheels with total wedges ~400x bet (really good = 800x). BUT total can be misleading — highest-value wedges (200-300x) are very hard to hit. Focus on MEDIAN wedge, not average. Safest approach: focus on lowest-value wedges to limit downside. Look for few small wedges (<10x) and lots of mid-size (30-60x). Avoid wheels with more than two wedges under 10x. Wedge colors indicate boosts received, NOT necessarily value (small initial + many boosts can be worth less than large initial + no boosts). Boosts increase by bet amount. Inferno Wheel symbol lands ~every 8 spins, ~1 in 8 chance of triggering spin. Symbols only land in reels 2-4 (expand to fill reel as wild). Can check without ticket on Gaming Arts machines. RTP 85%–96%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Knock Knock Guardians: Queen / Raider',
    manufacturer: '',
    strategy: {
      description:
        'Features two bonuses — Symbol Change (left cat, upgraded by white orbs) and Reel Grow (right cat, upgraded by black orbs). Each has 3 levels. Symbol Change upgrades symbols to premium; Reel Grow increases ways (L1: 1024, L2: 3125, L3: 7776). When triggered, spin a wheel with four progressive free spins meters.',
      playConditions: [
        { label: 'Purple free spins + both cats at MAX (level 3)', operator: '>=', value: 12, unit: 'purple free spins' },
        { label: 'Aggressive: purple free spins + one cat MAX + one at level 2', operator: '>=', value: 10, unit: 'purple free spins' },
      ],
      notes:
        'Extremely high variance — bonuses can be duds or 200-400x wins. Purple free spins meter triggers most often during wheel spin — most important meter, limits downside risk. A random meter (red/green/blue/purple) increments by 1 when a bonus is upgraded or awarded. Wheel also includes jackpots (mini/minor/major/grand) — if you hit one, spin again, so you always eventually get free spins. Cracks on cat statues don\'t mean anything — only the level below matters. NEVER chase free spins meters alone or upgraded cats alone — only play when cats are upgraded WITH high purple. After bonus, triggered cat resets to level 1. Can\'t trigger the other cat during bonus, but CAN upgrade the triggered cat. Meter resets: red=50, green=25, blue=10, purple=5. Wilds appear on reels 2-4 only. Can tap bet level to check without betting. RTP 86%–92%.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Lucky Haul / March of the Zombies',
    manufacturer: '',
    strategy: {
      description:
        'When a wild symbol covers an entire reel, it becomes a persistent wild reel that shifts one position to the left every spin.',
      playConditions: [
        { label: 'Active wild reels (not in reel 1 — will move off screen)', operator: '>=', value: 1, unit: '(check bet pad for red wild symbols)' },
      ],
      notes:
        'As simple and straightforward as AP games get. Only a few spins of investment needed with a fairly significant edge. Easy to check — just walk by and glance at bet pad for active wild reels. If a wild reel lands on an upgrade/CB radio symbol or on top of another wild reel, it becomes a 2x wild reel (doubles all wins) — but reverts to normal next spin. Free games offers a choice between more spins or more wild reels — same average payout, different volatility. Both versions play the same.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Master Da Dang Jia: Fine Fortunes / Vivid Diamonds',
    manufacturer: '',
    strategy: {
      description:
        'Features a multiplier above the middle reel (starts at 1x, max 18x). When the Master character lands on the middle reel, all coin symbols on other reels are awarded with credit values multiplied by the active multiplier. Each time Master lands WITHOUT coins, multiplier increments by 1x.',
      playConditions: [
        { label: 'Multiplier above middle reel', operator: '>=', value: 5, unit: 'x' },
      ],
      notes:
        'Fairly high variance — possible to take big losses if multiplier runs high but only lands 1-2 small coins. Over enough sessions (factoring in free games), should come out ahead. Active multiplier carries over into free games AND mini/minor jackpots on wheel spin. Master character doubles as wild symbol — always nudges to fill entire reel. Multiplier maxes at 18x — not guaranteed to hit there, just can\'t increase beyond it. Coins can contain mini/minor/major jackpots when multiplier is less than 6x. Check by looking at bet pad and switching denominations.',
    },
    casinoIndexes: [],
  },
  {
    name: 'Money Island',
    manufacturer: '',
    strategy: {
      description:
        'Features three progressive free games meters — mini (orange), minor (blue) and maxi (purple). Landing corresponding symbol in reel 5 increments the meter. Bonus symbol in reel 1 + symbol in reel 5 triggers the feature. Also features sticky wild coins in middle three reels that persist for 3 spins.',
      playConditions: [
        { label: 'Active sticky wilds ("Winner\'s Wave" + spins above middle reels)', operator: '>=', value: 1, unit: '' },
        { label: 'Mini (orange) free games', operator: '>=', value: 24, unit: '' },
        { label: 'Minor (blue) free games', operator: '>=', value: 32, unit: '' },
        { label: 'Maxi (purple)', operator: '=', value: 'NEVER chase', unit: '' },
      ],
      notes:
        'WARNING: Uncapped progressive. Sticky wilds make this better than standard uncapped progressives — common to find, quick/low-cost play with big upside. Reel 4 sticky wilds not very lucrative alone but good chance of landing additional wilds. Treasure chest in reels 1/5 can add 1-5 wild coins to middle reels. Skull wild coins expand to fill entire reel for 3 spins. Mini bonus: reels 2-4 sticky, minor: 2-5 sticky, maxi: all 5 sticky. Treasure chest during bonus can transform non-sticky reel to sticky. Bonus is very volatile — multiple wild reels = huge wins, but can also be weak. All meters reset to 5, capped at 99. Flames appear at 11 free games but do NOT indicate greater chance. Puff of smoke on reel 5 during suspense spin = bonus about to trigger. Free games meters shown on bet pad — check each bet level individually for sticky wilds.',
    },
    casinoIndexes: [],
  },
];
